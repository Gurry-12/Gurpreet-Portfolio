import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LEARNINGS, Learning } from '../../data/learnings';
import { FINDINGS, Finding } from '../../data/findings';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './notes.component.html'
})
export class NotesComponent implements OnInit {
  learnings: Learning[] = [];
  findings: Finding[] = [];
  selectedFilter: string = 'All';

  categories: string[] = ['All', 'Backend', 'Database', 'Security', 'Architecture', 'Frontend'];

  ngOnInit(): void {
    this.learnings = LEARNINGS;
    this.findings = FINDINGS;
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
