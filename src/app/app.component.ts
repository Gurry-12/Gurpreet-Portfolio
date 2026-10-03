import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { RouterModule, RouterLinkActive, NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { TechIconComponent } from './visuals/technology-icon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterLinkActive, CommonModule, TechIconComponent],
  template: `
    <!-- Skip to content (keyboard accessibility) -->
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <!-- Top Fixed Glass Navigation -->
    <header class="site-header" role="banner">
      <div class="header-inner shell">

        <!-- Brand / Monogram with Live Indicator -->
        <a routerLink="/" class="header-brand" aria-label="Gurpreet Singh — Home">
          <div class="header-avatar-frame">
            <img 
              src="/assets/gurpreet-avatar.png" 
              alt="Gurpreet Singh" 
              class="header-avatar-img"
              width="36" 
              height="36"
            />
            <span class="header-live-dot" title="Active & Open to opportunities"></span>
          </div>
          <div class="header-brand-text-group">
            <span class="header-brand-name">Gurpreet Singh</span>
            <span class="header-brand-role">Software Engineer · Backend</span>
          </div>
        </a>

        <!-- Desktop Navigation Links: Dedicated pages -->
        <nav class="desktop-nav" aria-label="Main navigation">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-item-link" id="nav-home">Home</a>
          <a routerLink="/projects" routerLinkActive="active" class="nav-item-link" id="nav-projects">Projects</a>
          <a routerLink="/skills" routerLinkActive="active" class="nav-item-link" id="nav-skills">Skills</a>
          <a routerLink="/experience" routerLinkActive="active" class="nav-item-link" id="nav-experience">Experience</a>
          <a routerLink="/achievements" routerLinkActive="active" class="nav-item-link" id="nav-achievements">Achievements</a>
          <a routerLink="/about" routerLinkActive="active" class="nav-item-link" id="nav-about">About</a>
          <a routerLink="/contact" routerLinkActive="active" class="nav-item-link" id="nav-contact">Contact</a>
        </nav>

        <!-- Header Actions -->
        <div class="header-actions-group">
          <a
            href="https://github.com/Gurry-12"
            target="_blank"
            rel="noopener noreferrer"
            class="header-icon-btn"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a
            href="/assets/resume/Gurpreet_Singh_Java_Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="header-resume-btn"
            id="nav-resume"
            aria-label="Download resume PDF"
          >
            <span>Resume</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button
            class="mobile-toggle-btn"
            type="button"
            [attr.aria-expanded]="isMenuOpen"
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
            (click)="toggleMenu()"
            id="mobile-menu-toggle"
          >
            <span class="bar-line" [class.open]="isMenuOpen"></span>
            <span class="bar-line" [class.open]="isMenuOpen"></span>
            <span class="bar-line" [class.open]="isMenuOpen"></span>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div class="mobile-drawer" [class.open]="isMenuOpen" id="mobile-nav">
        <nav class="mobile-nav-links">
          <a routerLink="/" (click)="closeMenu()">Home</a>
          <a routerLink="/projects" (click)="closeMenu()">Projects</a>
          <a routerLink="/skills" (click)="closeMenu()">Skills</a>
          <a routerLink="/experience" (click)="closeMenu()">Experience</a>
          <a routerLink="/achievements" (click)="closeMenu()">Achievements</a>
          <a routerLink="/about" (click)="closeMenu()">About</a>
          <a routerLink="/contact" (click)="closeMenu()">Contact</a>
        </nav>
        <div class="mobile-drawer-cta">
          <a
            href="/assets/resume/Gurpreet_Singh_Java_Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="editorial-btn-primary"
            style="width: 100%; justify-content: center;"
            (click)="closeMenu()"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </header>

    <!-- Main Content Shell -->
    <main id="main-content">
      <router-outlet></router-outlet>
    </main>

    <!-- Editorial Site Footer -->
    <footer class="modern-footer" role="contentinfo">
      <div class="shell">
        <div class="footer-top-row">
          <div class="footer-brand-info">
            <div class="footer-brand-title">Gurpreet Singh</div>
            <p class="footer-brand-desc">
              Software Engineer specializing in Java 17, Spring Boot 3, SQL Server, and scalable backend architecture.
            </p>
          </div>

          <div class="footer-links-group">
            <div class="footer-col">
              <div class="footer-heading">PORTFOLIO</div>
              <a routerLink="/projects">Projects &amp; Case Studies</a>
              <a routerLink="/skills">Skills &amp; Capabilities</a>
              <a routerLink="/experience">Work Experience</a>
              <a routerLink="/achievements">Achievements &amp; Proof</a>
            </div>
            <div class="footer-col">
              <div class="footer-heading">ABOUT &amp; RESUME</div>
              <a routerLink="/about">About &amp; Principles</a>
              <a routerLink="/contact">Contact</a>
              <a href="/assets/resume/Gurpreet_Singh_Java_Developer.pdf" target="_blank" rel="noopener">Download Resume (PDF) ↗</a>
            </div>
            <div class="footer-col">
              <div class="footer-heading">CHANNELS</div>
              <a href="https://github.com/Gurry-12" target="_blank" rel="noopener" class="footer-channel-link">
                <tech-icon name="github"></tech-icon>
                <span>GitHub ↗</span>
              </a>
              <a href="https://linkedin.com/in/gurpreet-singh57" target="_blank" rel="noopener" class="footer-channel-link">
                <tech-icon name="linkedin"></tech-icon>
                <span>LinkedIn ↗</span>
              </a>
              <a href="https://codolio.com/profile/Guriii" target="_blank" rel="noopener" class="footer-channel-link">
                <tech-icon name="codolio"></tech-icon>
                <span>Codolio ↗</span>
              </a>
              <a href="mailto:work.gurpreetsw@gmail.com" class="footer-channel-link">
                <tech-icon name="email"></tech-icon>
                <span>Email ↗</span>
              </a>
              <a href="tel:+919376847944" class="footer-channel-link">
                <tech-icon name="phone"></tech-icon>
                <span>+91 93768 47944 ↗</span>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom-bar">
          <div>
            <span>© 2026 Gurpreet Singh. Designed with modern editorial discipline.</span>
          </div>
          <div>
            <span class="tech-tag-chip">India · IST (UTC+5:30)</span>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class AppComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  private routerSub?: Subscription;

  constructor(private router: Router) { }

  ngOnInit(): void {
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
