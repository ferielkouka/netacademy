import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

interface Atout {
  icone: string;
  titre: string;
  description: string;
}

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss'
})
export class WhyUsComponent {
  atouts: Atout[] = [
    { icone: '📖', titre: 'Formation 100% en ligne', description: 'Cours structurés et adaptés à votre niveau, accessibles où que vous soyez' },
    { icone: '🌐', titre: 'Enseignants expérimentés', description: 'Formateurs qualifiés et natifs' },
    { icone: '🎯', titre: 'Méthode moderne', description: 'Approches pédagogiques innovantes' },
    { icone: '💼', titre: 'Être pro dans la langue', description: 'Visez la fluidité et la confiance à l\'oral, pas juste un diplôme' }
  ];
}
