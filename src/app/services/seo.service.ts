import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private baseTitle = 'Gurpreet Singh — Backend Software Engineer';

  constructor(private titleService: Title, private metaService: Meta) {}

  setPageTitle(page: string): void {
    const titles: Record<string, string> = {
      '': this.baseTitle,
      'about': `About — ${this.baseTitle}`,
      'projects': `Projects & Case Studies — ${this.baseTitle}`,
      'contact': `Contact — ${this.baseTitle}`
    };
    this.titleService.setTitle(titles[page] || this.baseTitle);
  }

  updateDescription(desc: string): void {
    this.metaService.updateTag({ name: 'description', content: desc });
  }
}
