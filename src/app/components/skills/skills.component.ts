import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  level: number;
  description: string;
}

interface LearningItem {
  name: string;
  icon: string;
  description: string;
  progress: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  frontendSkills: Skill[] = [
    {
      name: 'Angular',
      icon: '🅰️',
      level: 85,
      description: 'Developing scalable and responsive SPAs like Disaster Ready UI.'
    },
    {
      name: 'TypeScript',
      icon: '📘',
      level: 80,
      description: 'Strong experience building type-safe applications with Angular and .NET integration.'
    },
    {
      name: 'HTML/CSS',
      icon: '🌐',
      level: 90,
      description: 'Proficient in semantic HTML and modern CSS, with responsive design principles.'
    },
    {
      name: 'JavaScript',
      icon: '💛',
      level: 85,
      description: 'Hands-on experience with ES6+ features across frontend projects.'
    },
    {
      name: 'Tailwind CSS',
      icon: '🎨',
      level: 75,
      description: 'Used for styling Angular applications quickly and efficiently.'
    }
  ];

  backendSkills: Skill[] = [
    {
      name: '.NET (C#)',
      icon: '⚙️',
      level: 85,
      description: 'Built REST APIs like Disaster Ready backend and Book Shelf using ASP.NET Core.'
    },
    {
      name: 'Flask',
      icon: '🐍',
      level: 80,
      description: 'Developed ML-based web apps like Sentiment Analyzer and Algebra App.'
    },
    {
      name: 'Python',
      icon: '🐍',
      level: 80,
      description: 'Applied in ML projects such as Wine Prediction and Dry Bean Classification.'
    },
    {
      name: 'SQL',
      icon: '🗄️',
      level: 75,
      description: 'Experience with relational databases and query optimization.'
    },
    {
      name: 'REST APIs',
      icon: '🔌',
      level: 88,
      description: 'Designed and implemented robust APIs for multiple projects.'
    }
  ];

  toolSkills: Skill[] = [
    {
      name: 'Git & GitHub',
      icon: '📝',
      level: 90,
      description: 'Used for version control and collaboration across projects.'
    },
    {
      name: 'Postman',
      icon: '📮',
      level: 85,
      description: 'API testing and debugging for .NET and Flask applications.'
    },
    {
      name: 'VS Code / Visual Studio',
      icon: '💻',
      level: 95,
      description: 'Primary IDEs for development in Python, Angular, and .NET.'
    },
    {
      name: 'PyCharm',
      icon: '🐍',
      level: 70,
      description: 'Used for ML-based Python projects and Flask apps.'
    }
  ];

  learningItems: LearningItem[] = [
    {
      name: 'Machine Learning (Advanced)',
      icon: '🤖',
      description: 'Improving ML knowledge through projects like Wine Prediction and Sentiment Analysis.',
      progress: 50
    },
    {
      name: 'Cloud Deployment (Azure/AWS)',
      icon: '☁️',
      description: 'Learning deployment strategies for .NET APIs and Flask apps.',
      progress: 35
    },
    {
      name: 'Microservices',
      icon: '🔗',
      description: 'Exploring modular architectures for scalable applications.',
      progress: 30
    }
  ];
}
