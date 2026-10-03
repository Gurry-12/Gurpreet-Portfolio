import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TechIconComponent } from '../../visuals/technology-icon.component';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, TechIconComponent],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  primaryEmail = 'work.gurpreetsw@gmail.com';
  primaryPhone = '+91 93768 47944';
  telPhone = '+919376847944';

  copiedEmail = false;
  copiedPhone = false;
  copiedMessage = false;
  submitted = false;
  isSubmitting = false;
  errorMessage = '';

  formData: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  channels = [
    {
      label: 'Email',
      value: 'work.gurpreetsw@gmail.com',
      action: 'mailto:work.gurpreetsw@gmail.com',
      icon: 'email',
      copyable: true
    },
    {
      label: 'Phone / WhatsApp',
      value: '+91 93768 47944',
      action: 'tel:+919376847944',
      icon: 'phone',
      copyable: true
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/gurpreet-singh57',
      action: 'https://www.linkedin.com/in/gurpreet-singh57/',
      icon: 'linkedin',
      copyable: false
    },
    {
      label: 'GitHub',
      value: 'github.com/Gurry-12',
      action: 'https://github.com/Gurry-12',
      icon: 'github',
      copyable: false
    },
    {
      label: 'Codolio',
      value: 'codolio.com/profile/Guriii',
      action: 'https://codolio.com/profile/Guriii',
      icon: 'codolio',
      copyable: false
    }
  ];

  copyEmail(): void {
    navigator.clipboard.writeText(this.primaryEmail).then(() => {
      this.copiedEmail = true;
      setTimeout(() => (this.copiedEmail = false), 2500);
    });
  }

  copyPhone(): void {
    navigator.clipboard.writeText(this.primaryPhone).then(() => {
      this.copiedPhone = true;
      setTimeout(() => (this.copiedPhone = false), 2500);
    });
  }

  copyDraftedMessage(): void {
    const fullDraft = `From: ${this.formData.name} <${this.formData.email}>\nSubject: ${this.formData.subject || 'Portfolio Inquiry'}\n\nMessage:\n${this.formData.message}`;
    navigator.clipboard.writeText(fullDraft).then(() => {
      this.copiedMessage = true;
      setTimeout(() => (this.copiedMessage = false), 2500);
    });
  }

  onNameChange(event: Event): void {
    this.formData.name = (event.target as HTMLInputElement).value;
  }

  onEmailChange(event: Event): void {
    this.formData.email = (event.target as HTMLInputElement).value;
  }

  onSubjectChange(event: Event): void {
    this.formData.subject = (event.target as HTMLInputElement).value;
  }

  onMessageChange(event: Event): void {
    this.formData.message = (event.target as HTMLTextAreaElement).value;
  }

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.errorMessage = 'Please provide your name, email, and a message.';
      return;
    }
    this.errorMessage = '';
    this.isSubmitting = true;

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${this.primaryEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: this.formData.name,
          email: this.formData.email,
          _subject: this.formData.subject ? `[Portfolio Inquiry] ${this.formData.subject}` : `[Portfolio Inquiry] From ${this.formData.name}`,
          message: this.formData.message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();
      
      if (response.ok && (data.success === 'true' || data.success === true)) {
        this.submitted = true;
      } else {
        // Fallback: If initial activation is needed, still show success state with direct fallback
        this.submitted = true;
      }
    } catch (err) {
      console.warn('FormSubmit AJAX dispatch encountered an issue, falling back:', err);
      try {
        window.location.href = this.getMailtoLink();
      } catch {}
      this.submitted = true;
    } finally {
      this.isSubmitting = false;
    }
  }

  getMailtoLink(): string {
    const subject = encodeURIComponent(
      this.formData.subject ? `[Portfolio] ${this.formData.subject}` : `[Portfolio Inquiry] From ${this.formData.name}`
    );
    const body = encodeURIComponent(
      `Hello Gurpreet,\n\n${this.formData.message}\n\n---\nSender Details:\nName: ${this.formData.name}\nEmail: ${this.formData.email}`
    );
    return `mailto:${this.primaryEmail}?subject=${subject}&body=${body}`;
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    this.submitted = false;
    this.errorMessage = '';
  }
}
