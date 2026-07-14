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
  activeSection = '';
  scrollProgress = 0;
  carouselIndex = 0;
  lightboxOpen = false;
  lightboxIndex = 0;
  visibleSections: string[] = [];

  // Animated counters
  animatedMetrics: { value: string; label: string; displayValue: number; animated: boolean; isNumeric: boolean }[] = [];
  private counterObserver: IntersectionObserver | null = null;

  // Interactive architecture
  activeTier: string | null = null;

  // Scroll reveal
  private revealObserver: IntersectionObserver | null = null;

  private scrollHandler: (() => void) | null = null;

  sections = [
    { id: 'hero', label: 'Hero', icon: 'bi-stars' },
    { id: 'overview', label: 'Overview', icon: 'bi-lightbulb' },
    { id: 'architecture', label: 'Architecture', icon: 'bi-diagram-3' },
    { id: 'tech-stack', label: 'Tech Stack', icon: 'bi-layers' },
    { id: 'workflow', label: 'Workflow', icon: 'bi-arrow-repeat' },
    { id: 'database', label: 'Database', icon: 'bi-database' },
    { id: 'api', label: 'API', icon: 'bi-plug' },
    { id: 'challenges', label: 'Challenges', icon: 'bi-lightning' },
    { id: 'metrics', label: 'Results', icon: 'bi-bar-chart' },
    { id: 'gallery', label: 'Gallery', icon: 'bi-images' },
    { id: 'cta', label: 'Links', icon: 'bi-box-arrow-up-right' }
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

    if (this.project) {
      this.animatedMetrics = this.project.metrics.map(m => {
        const targetStr = m.value.replace(/[^0-9.]/g, '');
        const target = parseFloat(targetStr);
        return {
          ...m,
          displayValue: 0,
          animated: false,
          isNumeric: !isNaN(target)
        };
      });
    }

    if (!isPlatformBrowser(this.platformId)) return;

    this.buildVisibleSections();
    this.initSectionObserver();
    this.initCounterObserver();
    this.initRevealObserver();
  }

  ngOnDestroy(): void {
    if (this.scrollHandler) window.removeEventListener('scroll', this.scrollHandler);
    this.counterObserver?.disconnect();
    this.revealObserver?.disconnect();
  }

  private initSectionObserver(): void {
    this.scrollHandler = () => {
      const scrollTop = window.scrollY + 120;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      this.scrollProgress = docHeight > 0 ? Math.min((window.scrollY / docHeight) * 100, 100) : 0;

      let current = this.visibleSections[0];
      for (const id of this.visibleSections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollTop) {
          current = id;
        }
      }
      this.activeSection = current;
    };
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    this.scrollHandler();
  }

  private initCounterObserver(): void {
    this.counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateCounters();
            this.counterObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    setTimeout(() => {
      const metricsEl = document.getElementById('metrics');
      if (metricsEl) this.counterObserver?.observe(metricsEl);
    }, 500);
  }

  private initRevealObserver(): void {
    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            this.revealObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    setTimeout(() => {
      document.querySelectorAll('.pd-reveal').forEach(el => {
        this.revealObserver?.observe(el);
      });
    }, 300);
  }

  private animateCounters(): void {
    this.animatedMetrics.forEach((m, i) => {
      if (m.animated || !m.isNumeric) {
        m.animated = true;
        return;
      }
      const target = parseFloat(m.value.replace(/[^0-9.]/g, ''));
      const suffix = m.value.replace(/[0-9.]/g, '');
      const duration = 1500;
      const startTime = performance.now();
      const delay = i * 150;

      setTimeout(() => {
        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime - delay;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          m.displayValue = Math.round(target * eased * 10) / 10;
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            m.displayValue = target;
            m.animated = true;
          }
        };
        requestAnimationFrame(animate);
      }, delay);
    });
  }

  buildVisibleSections(): void {
    if (!this.project) return;
    const p = this.project;
    const vis: string[] = ['hero', 'overview', 'architecture'];

    if (p.techStack && p.techStack.length > 0) vis.push('tech-stack');
    if (p.stateMachine || (p.workflow && p.workflow.length > 0)) vis.push('workflow');
    if (p.dbEntities && p.dbEntities.length > 0) vis.push('database');
    if (p.apiShowcase && p.apiShowcase.length > 0) vis.push('api');
    if (p.challengeSolutions && p.challengeSolutions.length > 0) vis.push('challenges');
    if (p.metrics && p.metrics.length > 0) vis.push('metrics');
    if (p.screenshots && p.screenshots.length > 0) vis.push('gallery');
    
    vis.push('cta');

    this.visibleSections = vis;
  }

  isSectionVisible(id: string): boolean {
    return this.visibleSections.includes(id);
  }

  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  setActiveTier(tier: string | null): void {
    this.activeTier = tier;
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

  getTierLayers(tier: string): string[] {
    if (!this.project) return [];
    const layers = this.project.architecture.layers;
    const total = layers.length;
    if (tier === 'client') return layers.slice(0, 2);
    if (tier === 'server') return layers.slice(2, total - 1);
    if (tier === 'data') return layers.slice(total - 1);
    return [];
  }

  getLayerIcon(layer: string): string {
    const l = layer.toLowerCase();
    if (l.includes('react') || l.includes('angular') || l.includes('client') || l.includes('view') || l.includes('razor')) return 'bi-window';
    if (l.includes('rest') || l.includes('api') || l.includes('gateway')) return 'bi-arrow-left-right';
    if (l.includes('security') || l.includes('jwt') || l.includes('auth')) return 'bi-shield-lock';
    if (l.includes('controller')) return 'bi-usb-plug';
    if (l.includes('service') || l.includes('business')) return 'bi-gear';
    if (l.includes('repository') || l.includes('data access')) return 'bi-database';
    if (l.includes('hibernate') || l.includes('orm') || l.includes('ef') || l.includes('entity')) return 'bi-diagram-3';
    if (l.includes('sql') || l.includes('database') || l.includes('server')) return 'bi-database';
    if (l.includes('cloudinary') || l.includes('storage') || l.includes('cdn')) return 'bi-cloud';
    if (l.includes('flask') || l.includes('django') || l.includes('spring')) return 'bi-cpu';
    if (l.includes('nltk') || l.includes('tf-idf') || l.includes('vector')) return 'bi-braces';
    if (l.includes('classif') || l.includes('ml') || l.includes('predict')) return 'bi-cpu';
    if (l.includes('chart')) return 'bi-bar-chart';
    if (l.includes('rxjs') || l.includes('behavior')) return 'bi-arrow-repeat';
    if (l.includes('bootstrap') || l.includes('css') || l.includes('scss') || l.includes('theme')) return 'bi-palette';
    if (l.includes('postman') || l.includes('newman')) return 'bi-terminal';
    if (l.includes('collection') || l.includes('bdd')) return 'bi-check2-square';
    if (l.includes('pipeline') || l.includes('ci')) return 'bi-arrow-repeat';
    if (l.includes('report')) return 'bi-file-earmark-bar-graph';
    if (l.includes('json')) return 'bi-filetype-json';
    return 'bi-layers';
  }

  getMethodColor(method: string): string {
    const m = method.toUpperCase();
    if (m === 'GET') return 'var(--accent)';
    if (m === 'POST') return '#60a5fa';
    if (m === 'PUT' || m === 'PATCH') return '#fbbf24';
    if (m === 'DELETE') return '#f87171';
    return 'var(--text-3)';
  }

  getMetricSuffix(value: string): string {
    return value.replace(/[0-9.]/g, '');
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
