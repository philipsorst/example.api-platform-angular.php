import {Component} from '@angular/core';
import {Credentials} from "../../model/credentials";
import {AuthService} from "../../service/auth.service";

@Component({
    selector: 'user-login',
    templateUrl: './user-login.component.html',
})
export class UserLoginComponent {

    credentials: Credentials = new Credentials();

    constructor(private authService: AuthService) {
    }

    login() {
        this.authService.login(this.credentials);
    }
}
