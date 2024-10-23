import {Component, Input, NgZone, OnInit} from '@angular/core';
import {Toast} from "../../models/Toast.model";
import {ToastService} from "../../services/toast.service";

@Component({
    selector: 'app-toast',
    standalone: true,
    imports: [],
    templateUrl: './toast.component.html',
    styleUrl: './toast.component.scss'
})
export class ToastComponent implements OnInit {

    @Input() toast!: Toast

    constructor(private readonly toastService: ToastService, private ngZone: NgZone) {
    }

    ngOnInit(): void {
        if (this.toast.duration) {
            this.ngZone.runOutsideAngular(() => {
                setTimeout(() => {
                    this.ngZone.run(() => {
                        this.close();
                    });
                }, this.toast.duration);
            });
        }
    }

    close(): void {
        this.toastService.removeToast(this.toast);
    }

}
