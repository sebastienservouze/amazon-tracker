import {Injectable} from '@angular/core';
import {Toast} from "../models/Toast.model";

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    toasts: Toast[] = [];

    showToast(message: string, type: 'success' | 'error'): void {
        this.toasts.push({message, type, duration: 3000});
    }

    showSuccess(message: string): void {
        this.showToast(message, 'success');
    }

    showError(message: string): void {
        this.showToast(message, 'error');
    }

    removeToast(toast: Toast): void {
        this.toasts = this.toasts.filter(t => t !== toast);
    }
}
