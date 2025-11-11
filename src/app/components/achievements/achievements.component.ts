import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Achievement {
  id: number;
  title: string;
  description: string;
  category: 'certification' | 'award' | 'milestone' | 'publication' | 'recognition';
  date: string;
  issuer?: string;
  icon: string;
  link?: string;
  badge?: string;
}

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {
  achievements: Achievement[] = [
    {
      id: 1,
      title: 'Angular Developer Certification',
      description: 'Completed comprehensive Angular development certification covering modern Angular features, best practices, and advanced concepts.',
      category: 'certification',
      date: '2024',
      issuer: 'Angular Team',
      icon: '🏆',
      link: '#'
    },
    {
      id: 2,
      title: 'Full Stack Development Bootcamp',
      description: 'Graduated from intensive full-stack development program covering frontend, backend, databases, and DevOps.',
      category: 'certification',
      date: '2023',
      issuer: 'Tech Academy',
      icon: '🎓',
      link: '#'
    },
    {
      id: 3,
      title: 'Best Student Project Award',
      description: 'Received recognition for outstanding final year project demonstrating innovative problem-solving and technical excellence.',
      category: 'award',
      date: '2023',
      issuer: 'University',
      icon: '⭐',
      link: '#'
    },
    {
      id: 4,
      title: 'Hackathon Winner',
      description: 'First place in regional coding competition for developing a sustainable energy management solution.',
      category: 'award',
      date: '2023',
      issuer: 'Tech Community',
      icon: '🚀',
      link: '#'
    },
    {
      id: 5,
      title: '100+ GitHub Contributions',
      description: 'Achieved consistent contribution streak with meaningful contributions to open source projects.',
      category: 'milestone',
      date: '2024',
      issuer: 'GitHub',
      icon: '📊',
      link: 'https://github.com/Gurry-12'
    },
    {
      id: 6,
      title: 'Published Technical Article',
      description: 'Wrote comprehensive guide on modern web development practices published on developer platform.',
      category: 'publication',
      date: '2024',
      issuer: 'Dev Community',
      icon: '📝',
      link: '#'
    },
    {
      id: 7,
      title: 'Mentorship Recognition',
      description: 'Recognized for mentoring junior developers and contributing to team knowledge sharing initiatives.',
      category: 'recognition',
      date: '2024',
      issuer: 'Company',
      icon: '🤝',
      link: '#'
    },
    {
      id: 8,
      title: 'Performance Excellence',
      description: 'Achieved top performance ratings for three consecutive quarters demonstrating consistent delivery and quality.',
      category: 'recognition',
      date: '2024',
      issuer: 'Company',
      icon: '💎',
      link: '#'
    }
  ];

  selectedCategory: string = 'all';
  filteredAchievements: Achievement[] = this.achievements;

  categories = [
    { value: 'all', label: 'All Achievements', icon: '🌟' },
    { value: 'certification', label: 'Certifications', icon: '🏆' },
    { value: 'award', label: 'Awards', icon: '⭐' },
    { value: 'milestone', label: 'Milestones', icon: '📊' },
    { value: 'publication', label: 'Publications', icon: '📝' },
    { value: 'recognition', label: 'Recognition', icon: '🤝' }
  ];

  selectCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredAchievements = this.achievements;
    } else {
      this.filteredAchievements = this.achievements.filter(achievement => 
        achievement.category === category
      );
    }
  }

  getCategoryIcon(category: string): string {
    const cat = this.categories.find(c => c.value === category);
    return cat ? cat.icon : '🌟';
  }

  getCategoryLabel(category: string): string {
    const cat = this.categories.find(c => c.value === category);
    return cat ? cat.label : 'Achievement';
  }
}
