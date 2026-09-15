import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LEARNING_TRACKS, LearningTrack, LearningTopic, LearningStatus, STATUS_ORDER } from '../../data/learning-tracks';
import { LEARNINGS, Learning } from '../../data/learnings';
import { FINDINGS, Finding } from '../../data/findings';
import { PageHeaderArtComponent } from '../../visuals/page-header-art.component';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [CommonModule, RouterModule, PageHeaderArtComponent],
  templateUrl: './learn.component.html'
})
export class LearnComponent implements OnInit {
  tracks: LearningTrack[] = [];
  activeTrackId: string = 'backend';
  statusOrder = STATUS_ORDER;

  learnings: Learning[] = [];
  findings: Finding[] = [];
  selectedFilter: string = 'All';
  categories: string[] = ['All', 'Backend', 'Database', 'Security', 'Architecture', 'Frontend'];

  ngOnInit(): void {
    this.tracks = LEARNING_TRACKS;
    this.learnings = LEARNINGS;
    this.findings = FINDINGS;
  }

  get activeTrack(): LearningTrack | undefined {
    return this.tracks.find(t => t.id === this.activeTrackId);
  }

  selectTrack(id: string): void {
    this.activeTrackId = id;
  }

  getStatusClass(status: LearningStatus): string {
    const map: Record<LearningStatus, string> = {
      'Applying': 'status-applying',
      'Building': 'status-building',
      'Practicing': 'status-practicing',
      'Learning': 'status-learning',
      'Exploring': 'status-exploring'
    };
    return map[status];
  }

  getStatusStepIndex(status: LearningStatus): number {
    return STATUS_ORDER.indexOf(status);
  }

  setFilter(cat: string): void {
    this.selectedFilter = cat;
  }

  get filteredLearnings(): Learning[] {
    if (this.selectedFilter === 'All') return this.learnings;
    return this.learnings.filter(l => l.category === this.selectedFilter);
  }

  get filteredFindings(): Finding[] {
    if (this.selectedFilter === 'All') return this.findings;
    return this.findings.filter(f => f.category === this.selectedFilter);
  }

}
