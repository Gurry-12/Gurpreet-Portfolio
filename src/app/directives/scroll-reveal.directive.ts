import { Directive, ElementRef, OnDestroy, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  constructor(
    private el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const element = this.el.nativeElement;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    // Observe the element itself if it has .reveal
    if (element.classList.contains('reveal') || element.classList.contains('reveal-stagger')) {
      this.observer.observe(element);
    }

    // Also observe children with .reveal
    const children = element.querySelectorAll('.reveal, .reveal-stagger');
    children.forEach((child) => this.observer?.observe(child));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
