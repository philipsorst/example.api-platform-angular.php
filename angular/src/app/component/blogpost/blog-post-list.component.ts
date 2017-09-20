import {Component, OnInit} from '@angular/core';
import {Restangular} from "ngx-restangular";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'blog-post-list',
    templateUrl: './blog-post-list.component.html',
})
export class BlogPostListComponent implements OnInit {

    blogPosts: Observable<any>;

    constructor(private restangular: Restangular) {
    }

    ngOnInit(): void {
        this.blogPosts = this.restangular.all('blog_posts').getList();
    }
}
