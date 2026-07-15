import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterAnimateDirective } from '../../shared/directives/counter-animate.directive';

interface Stat {
  icone: string;
  valeur: number;
  suffixe: string;
  label: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, CounterAnimateDirective],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {
  stats: Stat[] = [
    { icone: '👥', valeur: 5000, suffixe: '+', label: 'Apprenants actifs' },
    { icone: '🧑‍🏫', valeur: 25, suffixe: '', label: 'Formateurs expérimentés' },
    { icone: '🌍', valeur: 7, suffixe: '', label: 'Langues enseignées' },
    { icone: '⭐', valeur: 98, suffixe: '%', label: 'Taux de satisfaction' }
  ];
}
