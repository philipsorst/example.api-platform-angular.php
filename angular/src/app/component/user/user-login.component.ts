import {Component} from '@angular/core';
import {Credentials} from "../../model/credentials";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {User} from "../../model/user";

@Component({
    selector: 'user-login',
    templateUrl: './user-login.component.html',
})
export class UserLoginComponent {

    public credentials: Credentials = new Credentials();

    public error: string = null;

    constructor(private authService: AuthService, private router: Router) {
    }

    public login() {
        this.error = null;
        this.authService.login(this.credentials)
            .then((user: User) => this.router.navigateByUrl(this.getReturnUrl()))
            .catch((reason) => {
                this.error = reason.data.message;
            });
    }

    private getReturnUrl() {
        return localStorage.getItem('example_app.return_url') || '/';
    }
}
