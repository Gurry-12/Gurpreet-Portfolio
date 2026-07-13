import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  contactMethods = [
    { label: 'email', icon: 'bi-envelope', value: 'work.gurpreetsw@gmail.com', href: 'mailto:work.gurpreetsw@gmail.com', external: false },
    { label: 'linkedin', icon: 'bi-linkedin', value: '/in/gurpreet-singh57', href: 'https://linkedin.com/in/gurpreet-singh57', external: true },
    { label: 'github', icon: 'bi-github', value: '/Gurry-12', href: 'https://github.com/Gurry-12', external: true }
  ];

  private get isNetlify(): boolean {
    return isPlatformBrowser(this.platformId) && window.location.hostname !== 'localhost';
  }

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  onSubmit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if (!this.isNetlify) {
      this.openMailtoFallback();
      return;
    }

    this.isSubmitting = true;
    this.submitError = false;

    const formData = new FormData();
    formData.append('form-name', 'contact');
    formData.append('name', this.contactForm.name);
    formData.append('email', this.contactForm.email);
    formData.append('subject', this.contactForm.subject);
    formData.append('message', this.contactForm.message);

    this.http.post('/', formData, {
      responseType: 'text'
    }).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactForm = { name: '', email: '', subject: '', message: '' };
        setTimeout(() => this.submitSuccess = false, 5000);
      },
      error: () => {
        this.isSubmitting = false;
        this.submitError = true;
        setTimeout(() => this.submitError = false, 5000);
      }
    });
  }

  private openMailtoFallback(): void {
    const { name, email, subject, message } = this.contactForm;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;
    window.open(`mailto:work.gurpreetsw@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`, '_self');
    this.isSubmitting = false;
    this.submitSuccess = true;
    this.contactForm = { name: '', email: '', subject: '', message: '' };
    setTimeout(() => this.submitSuccess = false, 5000);
  }
}
