import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LAB_EXPERIMENTS, LabExperiment } from '../../data/lab';
import { TechIconComponent } from '../../visuals/technology-icon.component';
import { PageHeaderArtComponent } from '../../visuals/page-header-art.component';

@Component({
  selector: 'app-lab',
  standalone: true,
  imports: [CommonModule, RouterModule, TechIconComponent, PageHeaderArtComponent],
  templateUrl: './lab.component.html'
})
export class LabComponent implements OnInit {
  experiments: LabExperiment[] = [];

  ngOnInit(): void {
    this.experiments = LAB_EXPERIMENTS;
  }
}
