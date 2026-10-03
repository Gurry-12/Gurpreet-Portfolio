import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Gurpreet Singh — Software Engineer'
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/work/work.component').then(m => m.WorkComponent),
    title: 'Projects — Gurpreet Singh'
  },
  {
    path: 'projects/:id',
    loadComponent: () => import('./pages/project-detail/project-detail.component').then(m => m.ProjectDetailComponent),
    title: 'Project Case Study — Gurpreet Singh'
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills/skills.component').then(m => m.SkillsComponent),
    title: 'Skills & Stack — Gurpreet Singh'
  },
  {
    path: 'experience',
    loadComponent: () => import('./pages/experience/experience.component').then(m => m.ExperienceComponent),
    title: 'Experience — Gurpreet Singh'
  },
  {
    path: 'achievements',
    loadComponent: () => import('./pages/achievements/achievements.component').then(m => m.AchievementsComponent),
    title: 'Achievements & Proof — Gurpreet Singh'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About — Gurpreet Singh'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact — Gurpreet Singh'
  },

  // Aliases and backward-compatible redirects
  {
    path: 'work',
    redirectTo: 'projects',
    pathMatch: 'full'
  },
  {
    path: 'work/:id',
    redirectTo: 'projects/:id',
    pathMatch: 'full'
  },
  {
    path: 'journey',
    redirectTo: 'experience',
    pathMatch: 'full'
  },
  {
    path: 'learn',
    redirectTo: 'skills',
    pathMatch: 'full'
  },
  {
    path: 'notes',
    redirectTo: 'skills',
    pathMatch: 'full'
  },
  {
    path: 'lab',
    redirectTo: 'projects',
    pathMatch: 'full'
  },
  {
    path: 'building',
    redirectTo: 'projects',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
