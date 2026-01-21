import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private isDarkMode = new BehaviorSubject<boolean>(true); // Default to dark mode
    public isDarkMode$ = this.isDarkMode.asObservable();

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        if (isPlatformBrowser(this.platformId)) {
            this.initializeTheme();
        }
    }

    private initializeTheme(): void {
        if (!isPlatformBrowser(this.platformId)) return;

        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            this.setTheme(savedTheme === 'dark');
        } else {
            this.setTheme(prefersDark);
        }
    }

    toggleTheme(): void {
        this.setTheme(!this.isDarkMode.value);
    }

    setTheme(isDark: boolean): void {
        this.isDarkMode.next(isDark);
        const theme = isDark ? 'dark' : 'light';

        if (isPlatformBrowser(this.platformId)) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        }
    }

    getCurrentTheme(): boolean {
        return this.isDarkMode.value;
    }
}