import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [class.opacity-0]="!visible"
      [class.translate-y-4]="!visible"
      [class.pointer-events-none]="!visible"
      [class.opacity-100]="visible"
      [class.translate-y-0]="visible"
      [class.pointer-events-auto]="visible"
      class="fixed bottom-6 right-6 w-11 h-11 flex items-center justify-center bg-portfolio-surface border border-portfolio-border rounded-full text-portfolio-muted z-[90] shadow-lg transition-all duration-300 ease-out hover:bg-portfolio-accent hover:border-portfolio-accent hover:text-white hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(59,130,246,0.4)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent md:w-12 md:h-12"
      (click)="scrollToTop()"
      aria-label="Scroll to top"
      type="button"
    >
      <i class="bi bi-arrow-up text-lg group-hover:-translate-y-0.5 transition-transform duration-300"></i>
    </button>
  `
})
export class ScrollTopComponent implements OnInit, OnDestroy {
  visible = false;
  private scrollHandler: (() => void) | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollHandler = () => {
        this.visible = window.scrollY > 400;
      };
      window.addEventListener('scroll', this.scrollHandler, { passive: true });
    }
  }

  ngOnDestroy(): void {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
