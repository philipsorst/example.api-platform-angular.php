import {Component, OnDestroy, OnInit} from "@angular/core";
import {UserService} from "../../service/user.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../model/user";

@Component({
    templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit, OnDestroy {

    public user: User;

    private routeSubscription;

    constructor(private userService: UserService, private route: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this.routeSubscription = this.route.params.subscribe((parameters) => {
            let id = parameters.id;
            this.userService.getUser(id).subscribe((user: User) => this.user = user)
        });
    }

    public ngOnDestroy(): void {
        this.routeSubscription.unsubscribe();
    }

    public save() {
        this.userService.save(this.user).subscribe((user: User) => {
            this.user = user;
        });
    }
}
