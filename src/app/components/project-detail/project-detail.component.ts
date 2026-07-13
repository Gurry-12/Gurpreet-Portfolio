import { Component, OnInit, OnDestroy, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ProjectDataService, ProjectCaseStudy } from '../../services/project-data.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  project: ProjectCaseStudy | null = null;
  relatedProjects: ProjectCaseStudy[] = [];
  activeSection = 'overview';
  scrollProgress = 0;
  carouselIndex = 0;
  lightboxOpen = false;
  lightboxIndex = 0;

  private scrollHandler: (() => void) | null = null;
  private sectionObserver: IntersectionObserver | null = null;

  sections = [
    { id: 'overview', label: 'Overview', icon: 'bi-eye' },
    { id: 'problem', label: 'Problem', icon: 'bi-lightbulb' },
    { id: 'features', label: 'Features', icon: 'bi-check2-all' },
    { id: 'architecture', label: 'Architecture', icon: 'bi-diagram-3' },
    { id: 'sequence', label: 'Sequences', icon: 'bi-arrow-left-right' },
    { id: 'tech-stack', label: 'Tech Stack', icon: 'bi-layers' },
    { id: 'decisions', label: 'Decisions', icon: 'bi-lightbulb-fill' },
    { id: 'database', label: 'Database', icon: 'bi-database' },
    { id: 'api', label: 'APIs', icon: 'bi-plug' },
    { id: 'workflow', label: 'Workflow', icon: 'bi-arrow-repeat' },
    { id: 'challenges', label: 'Challenges', icon: 'bi-exclamation-triangle' },
    { id: 'tradeoffs', label: 'Tradeoffs', icon: 'bi-arrow-left-right' },
    { id: 'failure', label: 'What Broke', icon: 'bi-bug' },
    { id: 'learnings', label: 'Learnings', icon: 'bi-mortarboard' },
    { id: 'future', label: 'Future', icon: 'bi-rocket' },
    { id: 'metrics', label: 'Metrics', icon: 'bi-bar-chart' }
  ];

  constructor(
    private route: ActivatedRoute,
    private projectDataService: ProjectDataService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.project = this.projectDataService.getById(id) || null;
    this.relatedProjects = this.projectDataService.getRelated(id);

    if (!isPlatformBrowser(this.platformId)) return;

    this.scrollHandler = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      this.scrollProgress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
    };
    window.addEventListener('scroll', this.scrollHandler, { passive: true });

    // IntersectionObserver for active section tracking
    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );

    setTimeout(() => {
      this.sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el) this.sectionObserver?.observe(el);
      });
    }, 500);
  }

  ngOnDestroy(): void {
    if (this.scrollHandler) window.removeEventListener('scroll', this.scrollHandler);
    this.sectionObserver?.disconnect();
  }

  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  // Carousel
  nextSlide(): void {
    if (this.project) {
      this.carouselIndex = (this.carouselIndex + 1) % this.project.screenshots.length;
    }
  }

  prevSlide(): void {
    if (this.project) {
      this.carouselIndex = (this.carouselIndex - 1 + this.project.screenshots.length) % this.project.screenshots.length;
    }
  }

  goToSlide(i: number): void {
    this.carouselIndex = i;
  }

  // Lightbox
  openLightbox(index: number): void {
    this.lightboxIndex = index;
    this.lightboxOpen = true;
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
  }

  lightboxNext(): void {
    if (this.project) {
      this.lightboxIndex = (this.lightboxIndex + 1) % this.project.screenshots.length;
    }
  }

  lightboxPrev(): void {
    if (this.project) {
      this.lightboxIndex = (this.lightboxIndex - 1 + this.project.screenshots.length) % this.project.screenshots.length;
    }
  }

  trackByIndex(index: number): number {
    return index;
  }

  getTierLabel(index: number, totalLayers: number): string | null {
    if (index === 0) return 'CLIENT';
    if (index === 2) return 'SERVER';
    if (index === totalLayers - 1) return 'DATA';
    return null;
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (!this.lightboxOpen) return;

    switch (event.key) {
      case 'Escape':
        this.closeLightbox();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        this.lightboxPrev();
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.lightboxNext();
        break;
    }
  }
}
