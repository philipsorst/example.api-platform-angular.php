import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Restangular} from "ngx-restangular";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'blog-post-detail',
    templateUrl: './blog-post-detail.component.html',

})
export class BlogPostDetailComponent implements OnInit {

    blogPost: Observable<any>;

    constructor(private route: ActivatedRoute, private router: Router, private restangular: Restangular) {
    }

    ngOnInit(): void {
        let id = this.route.snapshot.paramMap.get('id');
        this.blogPost = this.restangular.all('blog_posts').one(id).get({'groups[]': ['blog_post_comments']});
        console.log(this.blogPost);
    }
}
