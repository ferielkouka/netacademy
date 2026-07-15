import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  annee = new Date().getFullYear();

  allerVersSection(event: Event, id: string): void {
    event.preventDefault();
    const cible = document.getElementById(id);
    if (cible) {
      cible.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
