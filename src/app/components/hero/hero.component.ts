import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../core/services/modal.service';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

interface Salutation {
  code: string;
  drapeau: string;
  paysCode: string;
  mot: string;
  legende: string;
  zh?: boolean;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  modalService = inject(ModalService);

  greetings: Salutation[] = [
    { code: 'FR', drapeau: '🇫🇷', paysCode: 'fr', mot: 'Bonjour !', legende: 'Bonjour, bienvenue !' },
    { code: 'EN', drapeau: '🇬🇧', paysCode: 'gb', mot: 'Hello!', legende: 'Hello, welcome!' },
    { code: 'DE', drapeau: '🇩🇪', paysCode: 'de', mot: 'Hallo!', legende: 'Hallo, willkommen!' },
    { code: 'IT', drapeau: '🇮🇹', paysCode: 'it', mot: 'Ciao!', legende: 'Ciao, benvenuto!' },
    { code: 'ES', drapeau: '🇪🇸', paysCode: 'es', mot: '¡Hola!', legende: '¡Hola, bienvenido!' },
    { code: 'ZH', drapeau: '🇨🇳', paysCode: 'cn', mot: '你好！', legende: '你好，欢迎！', zh: true },
    { code: 'TR', drapeau: '🇹🇷', paysCode: 'tr', mot: 'Merhaba!', legende: 'Merhaba, hoş geldin!' }
  ];

  indexActif = 0;
  private intervalId?: ReturnType<typeof setInterval>;

  get greetingActif(): Salutation {
    return this.greetings[this.indexActif];
  }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.indexActif = (this.indexActif + 1) % this.greetings.length;
    }, 2200);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
