import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Gurpreet Singh — Personal Engineering Hub'
  },
  {
    path: 'work',
    loadComponent: () => import('./pages/work/work.component').then(m => m.WorkComponent),
    title: 'Work — Gurpreet Singh'
  },
  {
    path: 'work/:id',
    loadComponent: () => import('./pages/project-detail/project-detail.component').then(m => m.ProjectDetailComponent),
    title: 'Work — Gurpreet Singh'
  },
  {
    path: 'learn',
    loadComponent: () => import('./pages/learn/learn.component').then(m => m.LearnComponent),
    title: 'Learn — Gurpreet Singh'
  },
  {
    path: 'lab',
    loadComponent: () => import('./pages/lab/lab.component').then(m => m.LabComponent),
    title: 'Lab — Gurpreet Singh'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About — Gurpreet Singh'
  },
  // Redirects for deleted pages to maintain link integrity
  {
    path: 'building',
    redirectTo: 'work',
    pathMatch: 'full'
  },
  {
    path: 'projects',
    redirectTo: 'work',
    pathMatch: 'full'
  },
  {
    path: 'projects/:id',
    redirectTo: 'work/:id',
    pathMatch: 'full'
  },
  {
    path: 'learning',
    redirectTo: 'learn',
    pathMatch: 'full'
  },
  {
    path: 'notes',
    redirectTo: 'learn',
    pathMatch: 'full'
  },
  {
    path: 'journey',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'goals',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
