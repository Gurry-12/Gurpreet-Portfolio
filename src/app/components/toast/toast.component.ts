import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, Toast } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-container" aria-live="polite" aria-atomic="true">
      <div
        *ngFor="let toast of toasts$ | async"
        class="toast"
        [class.toast-success]="toast.type === 'success'"
        [class.toast-error]="toast.type === 'error'"
        [class.toast-info]="toast.type === 'info'"
        role="alert"
      >
        <i class="bi" [ngClass]="{
          'bi-check-circle-fill': toast.type === 'success',
          'bi-exclamation-circle-fill': toast.type === 'error',
          'bi-info-circle-fill': toast.type === 'info'
        }"></i>
        <span class="toast-message">{{ toast.message }}</span>
        <button class="toast-close" (click)="toastService.dismiss(toast.id)" aria-label="Dismiss">
          <i class="bi bi-x"></i>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      bottom: var(--sp-6);
      right: var(--sp-6);
      z-index: 1000;
      display: flex;
      flex-direction: column;
      gap: var(--sp-2);
      pointer-events: none;
    }

    .toast {
      display: flex;
      align-items: center;
      gap: var(--sp-3);
      padding: var(--sp-3) var(--sp-4);
      border-radius: var(--radius-md);
      background: var(--surface);
      border: 1px solid var(--border);
      box-shadow: var(--shadow-lg);
      pointer-events: auto;
      animation: toast-in 0.3s var(--ease-out);
      max-width: 360px;
    }

    .toast-success {
      border-color: var(--accent);
      background: var(--accent-dim);
    }

    .toast-success i {
      color: var(--accent);
    }

    .toast-error {
      border-color: var(--danger);
      background: var(--danger-dim);
    }

    .toast-error i {
      color: var(--danger);
    }

    .toast-info i {
      color: var(--text-2);
    }

    .toast-message {
      font-family: var(--font-mono);
      font-size: var(--text-sm);
      color: var(--text);
      flex: 1;
    }

    .toast-close {
      background: none;
      border: none;
      color: var(--text-3);
      cursor: pointer;
      padding: var(--sp-1);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: var(--transition-fast);
    }

    .toast-close:hover {
      color: var(--text);
    }

    @keyframes toast-in {
      from {
        opacity: 0;
        transform: translateY(16px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @media (max-width: 480px) {
      .toast-container {
        left: var(--sp-4);
        right: var(--sp-4);
        bottom: var(--sp-4);
      }

      .toast {
        max-width: 100%;
      }
    }
  `]
})
export class ToastComponent {
  toasts$;

  constructor(public toastService: ToastService) {
    this.toasts$ = this.toastService.toasts;
  }
}
