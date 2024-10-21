import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../models/User.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user$ = new BehaviorSubject<User | null>({
        username: 'Test',
        id: 1
    });

    constructor() {
    }

}
