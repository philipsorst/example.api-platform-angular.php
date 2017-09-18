import {Component, OnInit} from '@angular/core';
import {Restangular} from "ngx-restangular";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    blogPosts;

    constructor(private restangular: Restangular) {
    }

    ngOnInit(): void {
        this.restangular.all('blog_posts').getList().subscribe((blogPosts) => {
            this.blogPosts = blogPosts
        });
    }

    title = 'app';
}
