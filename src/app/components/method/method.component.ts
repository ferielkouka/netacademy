import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

interface Etape {
  numero: number;
  icone: string;
  titre: string;
  description: string;
}

@Component({
  selector: 'app-method',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './method.component.html',
  styleUrl: './method.component.scss'
})
export class MethodComponent {
  etapes: Etape[] = [
    { numero: 1, icone: '📝', titre: 'Inscription', description: "Choisissez votre langue et réservez votre place en 2 minutes." },
    { numero: 2, icone: '📊', titre: 'Test de niveau', description: "Un test rapide pour vous placer dans le bon groupe dès le départ." },
    { numero: 3, icone: '🎓', titre: 'Formation', description: "Des cours réguliers en ligne avec des formateurs natifs et qualifiés." },
    { numero: 4, icone: '💬', titre: 'Pratique continue', description: "Échangez régulièrement à l'oral pour progresser et gagner en confiance." }
  ];
}
