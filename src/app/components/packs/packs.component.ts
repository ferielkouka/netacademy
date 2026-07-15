import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

interface Pack {
  icone: string;
  titre: string;
  description: string;
  matieres: string[];
  reduction?: string;
  vedette?: boolean;
}

@Component({
  selector: 'app-packs',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './packs.component.html',
  styleUrl: './packs.component.scss'
})
export class PacksComponent {
  packsScolaires: Pack[] = [
    {
      icone: '🎓',
      titre: 'Pack Bac',
      description: "Option Bac — Français, Anglais, et l'option choisie par l'élève",
      matieres: ['Français', 'Anglais', 'Option choisie']
    },
    {
      icone: '📘',
      titre: 'Pack 9ème année',
      description: "Soutien 9ème année — Anglais et Français",
      matieres: ['Anglais', 'Français']
    },
    {
      icone: '📗',
      titre: 'Pack 6ème année',
      description: "Soutien 6ème année — Anglais et Français",
      matieres: ['Anglais', 'Français']
    }
  ];

  packsCombines: Pack[] = [
    {
      icone: '🌍',
      titre: 'Pack A1 + A2',
      description: "Combinez les niveaux A1 et A2 d'une même langue",
      matieres: ['Niveau A1', 'Niveau A2'],
      reduction: '-20%',
      vedette: true
    },
    {
      icone: '🇫🇷',
      titre: 'Pack Français + Anglais',
      description: "Apprenez les deux langues en même temps",
      matieres: ['Français', 'Anglais'],
      reduction: '-20%',
      vedette: true
    }
  ];
}
