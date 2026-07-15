import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalService } from '../../core/services/modal.service';
import { InscriptionService } from '../../core/services/inscription.service';
import { LANGUES } from '../../core/models/langue.model';

type EtatEnvoi = 'idle' | 'envoi' | 'succes' | 'erreur';

@Component({
  selector: 'app-inscription-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './inscription-modal.component.html',
  styleUrl: './inscription-modal.component.scss'
})
export class InscriptionModalComponent {
  private fb = inject(FormBuilder);
  private inscriptionService = inject(InscriptionService);
  modalService = inject(ModalService);

  langues = LANGUES;
  etat: EtatEnvoi = 'idle';
  messageErreur = '';

  form = this.fb.group({
    nom: ['', [Validators.required, Validators.minLength(2)]],
    prenom: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.email]], // facultatif : pas de required
    telephone: ['', [Validators.required, Validators.pattern(/^[0-9+\s()-]{6,}$/)]],
    langues: this.fb.array(
      this.langues.map(() => this.fb.control(false))
    )
  });

  get languesArray() {
    return this.form.get('langues') as import('@angular/forms').FormArray;
  }

  get auMoinsUneLangue(): boolean {
    return this.languesArray.value.some((v: boolean) => v);
  }

  fermer(): void {
    this.modalService.close();
    // Réinitialise l'état visuel pour la prochaine ouverture, sans perdre la saisie en cours
    if (this.etat === 'succes') {
      this.form.reset();
      this.languesArray.controls.forEach((c) => c.setValue(false));
      this.etat = 'idle';
    }
  }

  arreterPropagation(event: Event): void {
    event.stopPropagation();
  }

  async soumettre(): Promise<void> {
    if (this.form.invalid || !this.auMoinsUneLangue) {
      this.form.markAllAsTouched();
      return;
    }

    this.etat = 'envoi';

    const valeurs = this.form.value;
    const languesChoisies = this.langues
      .filter((_, i) => this.languesArray.value[i])
      .map((l) => l.nom);

    const resultat = await this.inscriptionService.envoyer({
      nom: valeurs.nom!,
      prenom: valeurs.prenom!,
      email: valeurs.email || undefined,
      telephone: valeurs.telephone!,
      langues: languesChoisies
    });

    if (resultat.ok) {
      this.etat = 'succes';
    } else {
      this.etat = 'erreur';
      this.messageErreur = resultat.message;
    }
  }
}
