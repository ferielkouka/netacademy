import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

/**
 * Usage : <span appCounterAnimate [countTo]="5000" suffix="+"></span>
 * Anime le chiffre en boucle : 0 -> countTo -> 0 -> countTo ... tant que l'élément est visible.
 * L'animation se met en pause quand l'élément sort de l'écran (perf) et reprend en le re-scrollant.
 */
@Directive({
  selector: '[appCounterAnimate]',
  standalone: true
})
export class CounterAnimateDirective implements OnInit, OnDestroy {
  @Input({ required: true }) countTo!: number;
  @Input() suffix = '';
  @Input() durationMs = 1500;
  @Input() pauseMs = 800; // temps d'arrêt en haut et en bas avant de repartir

  private observer?: IntersectionObserver;
  private rafId?: number;
  private running = false;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const element = this.el.nativeElement;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.startLoop();
          } else {
            this.stopLoop();
          }
        });
      },
      { threshold: 0.4 }
    );

    this.observer.observe(element);
  }

  private startLoop(): void {
    if (this.running) {
      return;
    }
    this.running = true;
    this.runCycle(true);
  }

  private stopLoop(): void {
    this.running = false;
    if (this.rafId !== undefined) {
      cancelAnimationFrame(this.rafId);
      this.rafId = undefined;
    }
  }

  // montant = true -> compte de 0 à countTo ; sinon countTo à 0
  private runCycle(montant: boolean): void {
    const element = this.el.nativeElement;
    const target = this.countTo;
    const start = performance.now();

    const step = (now: number) => {
      if (!this.running) {
        return;
      }
      const progress = Math.min((now - start) / this.durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const value = Math.round(montant ? eased * target : (1 - eased) * target);
      element.textContent = value.toLocaleString('fr-FR') + this.suffix;

      if (progress < 1) {
        this.rafId = requestAnimationFrame(step);
      } else {
        // petite pause puis on repart dans l'autre sens
        setTimeout(() => {
          if (this.running) {
            this.runCycle(!montant);
          }
        }, this.pauseMs);
      }
    };

    this.rafId = requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    this.stopLoop();
    this.observer?.disconnect();
  }
}
