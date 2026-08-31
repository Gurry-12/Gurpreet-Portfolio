import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Gurpreet Singh — Backend Software Engineer & Publication'
  },
  {
    path: 'work',
    loadComponent: () => import('./pages/work/work.component').then(m => m.WorkComponent),
    title: 'Work & Case Studies — Gurpreet Singh'
  },
  {
    path: 'work/:id',
    loadComponent: () => import('./pages/project-detail/project-detail.component').then(m => m.ProjectDetailComponent),
    title: 'Case Study — Gurpreet Singh'
  },
  {
    path: 'projects/:id',
    redirectTo: 'work/:id',
    pathMatch: 'full'
  },
  {
    path: 'notes',
    loadComponent: () => import('./pages/notes/notes.component').then(m => m.NotesComponent),
    title: 'Engineering Notes & Discoveries — Gurpreet Singh'
  },
  {
    path: 'lab',
    loadComponent: () => import('./pages/lab/lab.component').then(m => m.LabComponent),
    title: 'Project Lab & Experiments — Gurpreet Singh'
  },
  {
    path: 'journey',
    loadComponent: () => import('./pages/journey/journey.component').then(m => m.JourneyComponent),
    title: 'Engineering Evolution & Trajectory — Gurpreet Singh'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About & Principles — Gurpreet Singh'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact & Communication — Gurpreet Singh'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
