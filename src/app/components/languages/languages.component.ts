import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { LANGUES } from '../../core/models/langue.model';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss'
})
export class LanguagesComponent {
  langues = LANGUES;
}
