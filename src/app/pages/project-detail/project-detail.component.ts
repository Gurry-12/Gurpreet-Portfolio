import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { getProjectById, Project } from '../../data/projects';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: '../project-detail/project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  project?: Project;

  selectedLayerId = 'client';
  selectedStateId = 'draft';
  activeDiagramTab: 'architecture' | 'stateMachine' | 'lifecycle' = 'architecture';

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.project = getProjectById(id);
      if (this.project?.architectureLayers?.length) {
        this.selectedLayerId = this.project.architectureLayers[0].id;
      }
      if (this.project?.stateMachine?.nodes?.length) {
        this.selectedStateId = this.project.stateMachine.nodes[0].id;
      }
    }
  }

  selectLayer(id: string): void {
    this.selectedLayerId = id;
  }

  selectState(id: string): void {
    this.selectedStateId = id;
  }

  setDiagramTab(tab: 'architecture' | 'stateMachine' | 'lifecycle'): void {
    this.activeDiagramTab = tab;
  }

  getSelectedLayer() {
    return this.project?.architectureLayers?.find(l => l.id === this.selectedLayerId);
  }

  getSelectedState() {
    return this.project?.stateMachine?.nodes?.find(n => n.id === this.selectedStateId);
  }
}
