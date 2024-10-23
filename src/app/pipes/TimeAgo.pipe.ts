import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    standalone: true,
    name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

    transform(value: Date | string): string {
        const date = new Date(value);
        const now = new Date();
        const diffInMs = now.getTime() - date.getTime();

        const seconds = Math.floor(diffInMs / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
            return `Il y a ${days} jour${days > 1 ? 's' : ''}`;
        } else if (hours > 0) {
            return `Il y a ${hours} heure${hours > 1 ? 's' : ''}`;
        } else if (minutes > 0) {
            return `Il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
        } else {
            return `Il y a ${seconds} seconde${seconds > 1 ? 's' : ''}`;
        }
    }
}