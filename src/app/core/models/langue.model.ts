export interface Langue {
  code: string;
  nom: string;
  drapeau: string; // emoji drapeau (fallback)
  paysCode: string; // code pays ISO pour l'image du drapeau (flagcdn.com)
}

export const LANGUES: Langue[] = [
  { code: 'fr', nom: 'Français', drapeau: '🇫🇷', paysCode: 'fr' },
  { code: 'en', nom: 'Anglais', drapeau: '🇬🇧', paysCode: 'gb' },
  { code: 'de', nom: 'Allemand', drapeau: '🇩🇪', paysCode: 'de' },
  { code: 'it', nom: 'Italien', drapeau: '🇮🇹', paysCode: 'it' },
  { code: 'es', nom: 'Espagnol', drapeau: '🇪🇸', paysCode: 'es' },
  { code: 'zh', nom: 'Chinois', drapeau: '🇨🇳', paysCode: 'cn' },
  { code: 'tr', nom: 'Turc', drapeau: '🇹🇷', paysCode: 'tr' }
];

export interface InscriptionPayload {
  nom: string;
  prenom: string;
  email?: string;
  telephone: string;
  langues: string[]; // noms des langues cochées
}

export interface InscriptionResponse {
  ok: boolean;
  message: string;
}
