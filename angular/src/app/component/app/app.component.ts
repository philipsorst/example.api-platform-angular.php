import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {AuthService} from "../../service/auth.service";
import {User} from "../../model/user";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {

    public currentUserSubscription: Subscription;

    public currentUser: User;

    constructor(private authService: AuthService) {
    }

    public ngOnInit(): void {
        this.currentUserSubscription = this.authService.getCurentUserObservable().subscribe((user) => {
            this.currentUser = user;
        });
    }

    public ngOnDestroy(): void {
        this.currentUserSubscription.unsubscribe();
    }
}
