import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { getTier1Projects, getTier2Projects, Project } from '../../data/projects';
import { ACTIVE_PROJECTS, ActiveProject } from '../../data/building';
import { TechIconComponent } from '../../visuals/technology-icon.component';
import { PageHeaderArtComponent } from '../../visuals/page-header-art.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, RouterModule, TechIconComponent, PageHeaderArtComponent],
  templateUrl: './work.component.html'
})
export class WorkComponent implements OnInit {
  tier1Projects: Project[] = [];
  tier2Projects: Project[] = [];
  activeProjects: ActiveProject[] = [];

  ngOnInit(): void {
    this.tier1Projects = getTier1Projects();
    this.tier2Projects = getTier2Projects();
    this.activeProjects = ACTIVE_PROJECTS;
  }

  getBuildStatusClass(status: string): string {
    const map: Record<string, string> = {
      'In Progress': 'build-active',
      'Building': 'build-active',
      'Iterating': 'build-iterating',
      'Exploring': 'build-exploring',
      'Completed': 'build-completed',
      'Archived': 'build-archived'
    };
    return map[status] ?? 'build-exploring';
  }
}
