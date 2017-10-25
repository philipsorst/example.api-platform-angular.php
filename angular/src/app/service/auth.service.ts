import {Injectable} from "@angular/core";
import {Restangular} from "ngx-restangular";
import {Credentials} from "../model/credentials";
import {User} from "../model/user";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {

    private currentUserObservable = new BehaviorSubject<User>(null);

    constructor(private restangular: Restangular) {
    }

    public login(credentials: Credentials): Promise<User> {
        return this.restangular.all('login_check').post(credentials).toPromise().then((response) => {
            this.restangular.configuration.defaultHeaders.Authorization = 'Bearer ' + response.token;
            this.restangular.all('users').one('me').get().toPromise().then((user: User) => {
                this.currentUserObservable.next(user);
                console.log('Login successfull', this.currentUserObservable);

                return user;
            });
        });
    }

    public getCurentUserObservable(): Observable<User> {
        return this.currentUserObservable;
    }

    public getCurrentUser(): User | null {
        return this.currentUserObservable.getValue();
    }
}
