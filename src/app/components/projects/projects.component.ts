import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { ProjectDataService, ProjectCaseStudy } from '../../services/project-data.service';

interface ListingProject {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  status: string;
  github?: string;
  live?: string;
  techBadges: string[];
  category: string;
  featured: boolean;
  problemStatement: string;
  overview: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  featuredProjects: ListingProject[] = [];
  additionalProjects: ListingProject[] = [];

  constructor(private projectData: ProjectDataService) {}

  ngOnInit(): void {
    const all = this.projectData.getListingData();
    this.featuredProjects = all.filter(p => p.featured);
    this.additionalProjects = all.filter(p => !p.featured);
  }
}
