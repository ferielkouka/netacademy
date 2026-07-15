import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

interface Temoignage {
  citation: string;
  nom: string;
  pays: string;
  initiales: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  temoignages: Temoignage[] = [
    { citation: "Grâce à ce centre j'ai appris le français rapidement et efficacement. Les formateurs sont exceptionnels !", nom: 'Maria Garcia', pays: 'Espagne', initiales: 'MG' },
    { citation: 'Un excellent centre avec une atmosphère professionnelle. Les cours sont très bien organisés et adaptés.', nom: 'Chen Wei', pays: 'Chine', initiales: 'CW' },
    { citation: "J'ai énormément progressé grâce aux cours en ligne. Je recommande vivement ce centre !", nom: 'Ahmed Hassan', pays: 'Égypte', initiales: 'AH' }
  ];
}
