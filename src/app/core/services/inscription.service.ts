import { Injectable, signal } from '@angular/core';
import { InscriptionPayload, InscriptionResponse } from '../models/langue.model';

@Injectable({ providedIn: 'root' })
export class InscriptionService {

  /**
   * URL du déploiement Google Apps Script (voir apps-script-Code.gs fourni séparément).
   * À remplacer après déploiement : Extensions > Apps Script > Déployer > Application Web.
   */
  private readonly API_URL = 'https://script.google.com/macros/s/AKfycbxR3vERb2X2SMRlhCT6glryt8Ftpe7mD5uPXJTXt7WM-9xeKNDekcqQbGG7_-sJ1HwC5g/exec';

  readonly envoiEnCours = signal(false);
  readonly derniereErreur = signal<string | null>(null);

  async envoyer(payload: InscriptionPayload): Promise<InscriptionResponse> {
    this.envoiEnCours.set(true);
    this.derniereErreur.set(null);

    try {
      // Content-Type "text/plain" évite le preflight CORS bloqué par Apps Script.
      // Apps Script parse quand même le JSON côté serveur (voir doPost dans Code.gs).
      const response = await fetch(this.API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Erreur serveur (${response.status})`);
      }

      const result: InscriptionResponse = await response.json();
      if (!result.ok) {
        this.derniereErreur.set(result.message);
      }
      return result;

    } catch (err) {
      const message = err instanceof Error ? err.message : 'Erreur réseau inconnue';
      this.derniereErreur.set(message);
      return { ok: false, message };

    } finally {
      this.envoiEnCours.set(false);
    }
  }
}
