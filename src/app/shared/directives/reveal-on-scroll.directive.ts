import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

/**
 * Usage :
 *  <div appRevealOnScroll class="reveal">...</div>
 *  <div appRevealOnScroll="left" class="reveal-left">...</div>
 *
 * Ajoute la classe .is-visible dès que l'élément entre dans le viewport,
 * et la retire quand il en sort : l'animation se rejoue à chaque passage.
 * Remplace l'usage d'AOS (librairie externe) par une solution native légère.
 */
@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  @Input('appRevealOnScroll') delay: string | number = 0;

  private observer?: IntersectionObserver;
  private timeoutId?: ReturnType<typeof setTimeout>;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const element = this.el.nativeElement;
    const delayMs = Number(this.delay) || 0;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.timeoutId = setTimeout(() => element.classList.add('is-visible'), delayMs);
          } else {
            clearTimeout(this.timeoutId);
            element.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutId);
    this.observer?.disconnect();
  }
}
