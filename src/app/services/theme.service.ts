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
        this.setTheme(true);
    }

    toggleTheme(): void {
        // Disabled to enforce premium dark SaaS aesthetic
    }

    setTheme(isDark: boolean): void {
        this.isDarkMode.next(true); // Force true
        if (isPlatformBrowser(this.platformId)) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    }

    getCurrentTheme(): boolean {
        return this.isDarkMode.value;
    }
}