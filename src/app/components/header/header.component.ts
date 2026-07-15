import { Component, inject } from '@angular/core';
import { ModalService } from '../../core/services/modal.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  modalService = inject(ModalService);
  menuOuvert = false;

  toggleMenu(): void {
    this.menuOuvert = !this.menuOuvert;
  }

  allerVersSection(event: Event, id: string): void {
    event.preventDefault();
    this.menuOuvert = false;

    const cible = document.getElementById(id);
    if (cible) {
      cible.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
