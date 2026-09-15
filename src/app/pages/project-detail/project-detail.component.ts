import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { getProjectById, Project } from '../../data/projects';
import { TechIconComponent } from '../../visuals/technology-icon.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, TechIconComponent],
  templateUrl: '../project-detail/project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  project?: Project;

  selectedLayerId = 'client';
  activeDiagramTab: 'architecture' | 'stateMachine' = 'architecture';

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.project = getProjectById(id);
      if (this.project?.architectureLayers?.length) {
        this.selectedLayerId = this.project.architectureLayers[0].id;
      }
    }
  }

  selectLayer(id: string): void {
    this.selectedLayerId = id;
  }

  setDiagramTab(tab: 'architecture' | 'stateMachine'): void {
    this.activeDiagramTab = tab;
  }

  getSelectedLayer() {
    return this.project?.architectureLayers?.find(l => l.id === this.selectedLayerId);
  }
}