import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { PacksComponent } from './components/packs/packs.component';
import { MethodComponent } from './components/method/method.component';
import { StatsComponent } from './components/stats/stats.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { InscriptionModalComponent } from './shared/inscription-modal/inscription-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    WhyUsComponent,
    LanguagesComponent,
    PacksComponent,
    MethodComponent,
    StatsComponent,
    TestimonialsComponent,
    FaqComponent,
    FooterComponent,
    InscriptionModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'netacadAcademy';
}
