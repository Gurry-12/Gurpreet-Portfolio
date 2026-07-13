import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollRevealDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentTime = '';

  profile = {
    name: 'Gurpreet Singh',
    role: 'Backend Software Engineer',
    location: 'Bhiwadi, Rajasthan, India',
    email: 'work.gurpreetsw@gmail.com'
  };

  highlights = [
    { icon: 'bi-rocket-takeoff', label: '3 Internships', desc: 'production experience across startups' },
    { icon: 'bi-graph-up-arrow', label: '30% Faster APIs', desc: 'query optimization at Anviam' },
    { icon: 'bi-hdd-rack', label: '6+ APIs Built', desc: 'RESTful services with JWT auth' },
    { icon: 'bi-people', label: '2000+ Students', desc: 'placement coordinator impact' }
  ];

  techStack = [
    { name: 'Java', icon: 'bi-cup-hot' },
    { name: 'Spring Boot', icon: 'bi-lightning' },
    { name: 'SQL', icon: 'bi-database' },
    { name: 'REST APIs', icon: 'bi-plug' },
    { name: 'Microservices', icon: 'bi-boxes' },
    { name: 'Python', icon: 'bi-filetype-py' },
    { name: 'Docker', icon: 'bi-box-seam' },
    { name: 'Angular', icon: 'bi-app-indicator' }
  ];

  experience = [
    {
      company: 'Monocept',
      role: 'Software Intern',
      period: 'Feb 2026 — Present',
      current: true,
      highlight: 'Contributing to production software development'
    },
    {
      company: 'Anviam Solutions',
      role: 'Software Developer Intern',
      period: 'Jan — Aug 2025',
      current: false,
      highlight: '30% API performance improvement'
    },
    {
      company: 'Codehop Interfusion',
      role: 'Software Engineer Intern',
      period: 'Sep — Nov 2024',
      current: false,
      highlight: 'Microservices with Python & Flask'
    }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateTime();
      setInterval(() => this.updateTime(), 1000);
    }
  }

  private updateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-US', {
      hour12: false,
      timeZone: 'Asia/Kolkata'
    });
  }

  copyEmail(): void {
    if (isPlatformBrowser(this.platformId)) {
      navigator.clipboard.writeText(this.profile.email).then(
        () => this.toastService.show('Email copied to clipboard!', 'success'),
        () => this.toastService.show('Failed to copy email', 'error')
      );
    }
  }
}
