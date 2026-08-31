import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { getTier1Projects, getTier2Projects, Project } from '../../data/projects';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './work.component.html'
})
export class WorkComponent implements OnInit {
  tier1Projects: Project[] = [];
  tier2Projects: Project[] = [];

  ngOnInit(): void {
    this.tier1Projects = getTier1Projects();
    this.tier2Projects = getTier2Projects();
  }
}
