import {Injectable} from "@angular/core";
import {CollectionResult} from "../model/collection-result";
import {User} from "../model/user";
import {Observable} from "rxjs/Observable";
import {Restangular} from "ngx-restangular";

@Injectable()
export class UserService {

    constructor(private restangular: Restangular) {
    }

    public getUser(id: any) {
        return this.restangular.one('users', id).get();
    }

    public listUsers(): Observable<CollectionResult<User>> {
        return this.restangular.all('users').getList();
    }

    public save(user: any): Observable<User> {
        console.log(user.href);
        return user.save();
    }
}
