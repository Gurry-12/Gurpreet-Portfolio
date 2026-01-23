import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
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

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  onSubmit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.isSubmitting = true;
    this.submitError = false;

    // Create FormData for Netlify
    const formData = new FormData();
    formData.append('form-name', 'contact');
    formData.append('name', this.contactForm.name);
    formData.append('email', this.contactForm.email);
    formData.append('subject', this.contactForm.subject);
    formData.append('message', this.contactForm.message);

    // Submit to Netlify
    this.http.post('/', formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      responseType: 'text'
    }).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitSuccess = true;

        // Reset form
        this.contactForm = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };

        // Hide success message after 5 seconds
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      },
      error: (error) => {
        console.error('Form submission error:', error);
        this.isSubmitting = false;
        this.submitError = true;

        // Hide error message after 5 seconds
        setTimeout(() => {
          this.submitError = false;
        }, 5000);
      }
    });
  }
}
