import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "./service/auth.service";
import {User} from "./model/user";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    currentUserSubscription: Subscription;
    currentUser: User;

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
        this.currentUserSubscription = this.authService.getCurentUser().subscribe((user) => {
            this.currentUser = user;
        });
    }

    ngOnDestroy(): void {
        this.currentUserSubscription.unsubscribe();
    }
}
