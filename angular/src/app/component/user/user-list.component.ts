import {Component, OnInit} from "@angular/core";
import {UserService} from "../../service/user.service";
import {CollectionResult} from "../../model/collection-result";
import {User} from "../../model/user";

@Component({
    templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

    public users: CollectionResult<User>;

    constructor(private userService: UserService) {
    }

    public ngOnInit() {
        this.userService.listUsers().subscribe((users: CollectionResult<User>) => {
            this.users = users;
        });
    }
}
