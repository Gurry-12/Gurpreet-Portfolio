import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { resolveTechIcon } from './technology/technology-icons';

@Component({
  selector: 'tech-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (svg) {
      <span
        class="tech-icon"
        role="img"
        [attr.aria-label]="name"
        [innerHTML]="svg"
      ></span>
    }
  `
})
export class TechIconComponent {
  @Input() name = '';

  constructor(private sanitizer: DomSanitizer) {}

  get svg(): SafeHtml | null {
    const def = resolveTechIcon(this.name);
    return def ? this.sanitizer.bypassSecurityTrustHtml(def.svg) : null;
  }
}