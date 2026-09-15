import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { RouterModule, RouterLinkActive, NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterLinkActive, CommonModule],
  template: `
    <!-- Skip to content (keyboard accessibility) -->
    <a href="#main-content" class="skip-link">Skip to content</a>

    <!-- Site Header -->
    <header class="site-header" role="banner">
      <div class="header-inner">

        <!-- Logo / Home link -->
        <a routerLink="/" class="header-logo" aria-label="Gurpreet Singh — Home">
          <span class="header-logo-mark" aria-hidden="true">G</span>
          <span>Gurpreet Singh</span>
        </a>

        <!-- Desktop navigation -->
        <nav class="header-nav" aria-label="Main navigation">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" id="nav-home">home</a>
          <a routerLink="/work" routerLinkActive="active" id="nav-work">work</a>
          <a routerLink="/learn" routerLinkActive="active" id="nav-learn">learn</a>
          <a routerLink="/lab" routerLinkActive="active" id="nav-lab">lab</a>
          <a routerLink="/about" routerLinkActive="active" id="nav-about">about</a>
          <a
            href="/assets/resume/Gurpreet_Singh_Java_Developer.pdf"
            target="_blank"
            rel="noopener"
            class="header-resume"
            id="nav-resume"
            aria-label="Download resume PDF"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Resume
          </a>
        </nav>

        <!-- Mobile hamburger button -->
        <button
          class="mobile-menu-btn"
          type="button"
          [attr.aria-expanded]="isMenuOpen"
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          (click)="toggleMenu()"
          id="mobile-menu-toggle"
        >
          <span class="hamburger-line" [class.open]="isMenuOpen"></span>
          <span class="hamburger-line" [class.open]="isMenuOpen"></span>
          <span class="hamburger-line" [class.open]="isMenuOpen"></span>
        </button>
      </div>

      <!-- Mobile navigation drawer -->
      <nav
        class="mobile-nav"
        [class.open]="isMenuOpen"
        id="mobile-nav"
        aria-label="Mobile navigation"
        [attr.aria-hidden]="!isMenuOpen"
      >
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()" id="mnav-home">
          home
        </a>
        <a routerLink="/work" routerLinkActive="active" (click)="closeMenu()" id="mnav-work">
          work
        </a>
        <a routerLink="/learn" routerLinkActive="active" (click)="closeMenu()" id="mnav-learn">
          learn
        </a>
        <a routerLink="/lab" routerLinkActive="active" (click)="closeMenu()" id="mnav-lab">
          lab
        </a>
        <a routerLink="/about" routerLinkActive="active" (click)="closeMenu()" id="mnav-about">
          about
        </a>
        <a
          href="/assets/resume/Gurpreet_Singh_Java_Developer.pdf"
          target="_blank"
          rel="noopener"
          class="mobile-nav-resume"
          (click)="closeMenu()"
          id="mnav-resume"
        >
          Resume ↓
        </a>
      </nav>
    </header>

    <!-- Main Content -->
    <main id="main-content">
      <router-outlet></router-outlet>
    </main>

    <!-- Footer -->
    <footer class="site-footer" role="contentinfo">
      <div class="footer-inner">
        <div class="footer-row">
          <span class="footer-text">© 2026 Gurpreet Singh · Software Engineer</span>
          <nav class="footer-links" aria-label="Social and contact links">
          <a href="https://github.com/Gurry-12" target="_blank" rel="noopener" aria-label="GitHub profile" id="footer-github">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://linkedin.com/in/gurpreet-singh57" target="_blank" rel="noopener" aria-label="LinkedIn profile" id="footer-linkedin">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="https://codolio.com/profile/Guriii" target="_blank" rel="noopener" aria-label="Codolio profile" id="footer-codolio">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14.6 20h2.9l5.5-8-5.5-8h-2.9l5.5 8-5.5 8zm-5.2 0H6.5l-5.5-8 5.5-8h2.9l-5.5 8 5.5 8z"/></svg>
          </a>
          <a routerLink="/about" aria-label="Contact page" id="footer-contact">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </nav>
        </div>
        <span class="footer-built">Built with Angular 18 · SCSS · Deployed on Netlify</span>
      </div>
    </footer>
  `
})
export class AppComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  private routerSub?: Subscription;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Close mobile menu on navigation
    this.routerSub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.closeMenu());
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }
}
