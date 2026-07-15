import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

interface QuestionReponse {
  question: string;
  reponse: string;
  ouvert?: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  questions: QuestionReponse[] = [
    {
      question: "NetAcademy propose-t-elle des cours de langues en ligne en Tunisie ?",
      reponse: "Oui, NetAcademy est un centre de formation en langues 100% en ligne, accessible depuis toute la Tunisie (Sfax, Tunis, Sousse et partout ailleurs). Il suffit d'une connexion internet pour suivre les cours."
    },
    {
      question: "Quelles langues peut-on apprendre avec NetAcademy ?",
      reponse: "Français, anglais, allemand, italien, espagnol, chinois et turc. Chaque langue est enseignée par des formateurs qualifiés, avec un test de niveau au départ pour vous placer dans le bon groupe."
    },
    {
      question: "Proposez-vous des packs pour les élèves du Bac, de 9ème ou de 6ème année ?",
      reponse: "Oui, NetAcademy propose des packs scolaires dédiés : Pack Bac (français, anglais et l'option choisie par l'élève), Pack 9ème année et Pack 6ème année (anglais et français), pensés pour accompagner les élèves tunisiens dans leur scolarité."
    },
    {
      question: "Comment s'inscrire à une formation NetAcademy ?",
      reponse: "L'inscription se fait directement en ligne via le bouton \"S'inscrire\" sur le site. Après un test de niveau rapide, vous êtes placé dans le groupe adapté et les cours démarrent en ligne."
    },
    {
      question: "Existe-t-il une réduction si je combine plusieurs formations ?",
      reponse: "Oui, NetAcademy propose des packs combinés avec 20% de réduction : le pack A1 + A2 (deux niveaux d'une même langue) et le pack Français + Anglais."
    },
    {
      question: "Où est basée NetAcademy ?",
      reponse: "NetAcademy est basée à Sfax, en Tunisie, mais comme les formations sont entièrement en ligne, tous les élèves du pays (et au-delà) peuvent y accéder facilement."
    }
  ];

  toggle(item: QuestionReponse): void {
    item.ouvert = !item.ouvert;
  }
}
