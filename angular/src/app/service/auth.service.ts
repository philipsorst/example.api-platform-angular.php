import {Injectable} from "@angular/core";
import {Restangular} from "ngx-restangular";
import {Credentials} from "../model/credentials";
import {User} from "../model/user";
import {Subject} from "rxjs/Subject";

@Injectable()
export class AuthService {

    private currentUser = new Subject<User>();

    constructor(private restangular: Restangular) {
    }

    login(credentials: Credentials) {
        this.restangular.all('login_check').post(credentials).toPromise().then((response) => {
            this.restangular.configuration.defaultHeaders.Authorization = 'Bearer ' + response.token;
            this.restangular.all('users').one('me').get().toPromise().then((response) => {
                this.currentUser.next(response);
                console.log('Login successfull', this.currentUser);
            });
        });
    }

    getCurentUser() {
        return this.currentUser;
    }
}
