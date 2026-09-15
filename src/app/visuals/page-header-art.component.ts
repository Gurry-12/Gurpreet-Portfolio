import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'page-header-art',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-header-art" aria-hidden="true">
      <svg class="art-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
        xmlns="http://www.w3.org/2000/svg" role="presentation">
        <ng-container [ngSwitch]="icon">
          <ng-container *ngSwitchCase="'work'">
            <rect x="2" y="7" width="20" height="14" rx="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </ng-container>
          <ng-container *ngSwitchCase="'learn'">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </ng-container>
          <ng-container *ngSwitchCase="'lab'">
            <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55A1 1 0 0 0 5.62 22h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/>
            <path d="M8.5 2h7"/>
            <path d="M7 16h10"/>
          </ng-container>
          <ng-container *ngSwitchCase="'about'">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </ng-container>
        </ng-container>
      </svg>
    </div>
  `
})
export class PageHeaderArtComponent {
  @Input() icon: 'work' | 'learn' | 'lab' | 'about' = 'work';
}