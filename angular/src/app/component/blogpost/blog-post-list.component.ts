import {Component, OnInit} from '@angular/core';
import {Restangular} from "ngx-restangular";

@Component({
    selector: 'blog-post-list',
    templateUrl: './blog-post-list.component.html',
})
export class BlogPostListComponent implements OnInit {

    blogPosts;

    constructor(private restangular: Restangular) {
    }

    ngOnInit(): void {
        this.restangular.all('blog_posts').getList().subscribe((blogPosts) => {
            this.blogPosts = blogPosts
        });
    }
}
