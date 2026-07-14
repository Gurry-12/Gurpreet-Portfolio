import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToastComponent } from './components/toast/toast.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent, ToastComponent, ScrollTopComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'gurpreet-portfolio';
  isLoading = false;
  private routerSub?: Subscription;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.routerSub = this.router.events.pipe(
        filter(event => event instanceof NavigationStart || event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError)
      ).subscribe(event => {
        if (event instanceof NavigationStart) {
          this.isLoading = true;
          window.scrollTo({ top: 0, behavior: 'instant' });
        } else {
          this.isLoading = false;
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }
}
