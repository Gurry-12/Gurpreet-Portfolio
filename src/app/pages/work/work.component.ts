import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PROJECTS, Project } from '../../data/projects';
import { TechIconComponent } from '../../visuals/technology-icon.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, RouterModule, TechIconComponent],
  templateUrl: './work.component.html'
})
export class WorkComponent implements OnInit {
  allProjects: Project[] = [];
  filteredProjects: Project[] = [];
  selectedCategory = 'all';

  categories: { id: string; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'backend', label: 'Backend Architecture' },
    { id: 'fullstack', label: 'Full-Stack & Cloud' },
    { id: 'web3', label: 'Blockchain & Web3' }
  ];

  ngOnInit(): void {
    this.allProjects = PROJECTS;
    this.filteredProjects = this.allProjects;
  }

  setCategory(catId: string): void {
    this.selectedCategory = catId;
    if (catId === 'all') {
      this.filteredProjects = this.allProjects;
    } else if (catId === 'backend') {
      this.filteredProjects = this.allProjects.filter(p =>
        p.category.toLowerCase().includes('backend') || p.tags.some(t => t.toLowerCase().includes('spring') || t.toLowerCase().includes('sql') || t.toLowerCase().includes('java'))
      );
    } else if (catId === 'fullstack') {
      this.filteredProjects = this.allProjects.filter(p =>
        p.category.toLowerCase().includes('full-stack') || p.category.toLowerCase().includes('frontend') || p.tags.some(t => t.toLowerCase().includes('angular') || t.toLowerCase().includes('dotnet') || t.toLowerCase().includes('bootstrap'))
      );
    } else if (catId === 'web3') {
      this.filteredProjects = this.allProjects.filter(p =>
        p.category.toLowerCase().includes('blockchain') || p.tags.some(t => t.toLowerCase().includes('solidity') || t.toLowerCase().includes('blockchain') || t.toLowerCase().includes('ethereum'))
      );
    }
  }
}
