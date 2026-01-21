import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentTime = '';

  profile = {
    name: 'Gurpreet Singh',
    role: 'Backend Developer',
    location: 'Bhiwadi, Rajasthan',
    status: 'Open to work',
    email: 'work.gurpreetsw@gmail.com',
    github: 'github.com/Gurry-12',
    linkedin: 'linkedin.com/in/gurpreet-singh57'
  };

  stack = [
    'C#', 'ASP.NET Core', 'Python', 'Angular', 'TypeScript', 'SQL Server'
  ];

  experience = [
    {
      company: 'Anviam Solutions',
      role: 'Software Developer Intern',
      period: 'Jan - Aug 2025',
      current: false
    },
    {
      company: 'Codehop Interfusion',
      role: 'Software Engineer Intern',
      period: 'Sep - Nov 2024',
      current: false
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateTime();
      setInterval(() => this.updateTime(), 1000);
    }
  }

  private updateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-US', {
      hour12: false,
      timeZone: 'Asia/Kolkata'
    });
  }

  copyEmail(): void {
    if (isPlatformBrowser(this.platformId)) {
      navigator.clipboard.writeText(this.profile.email);
    }
  }
}