import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostService {

    error = new Subject<string>();

    constructor(private http: HttpClient) {}

    createAndStorePost(title: string, content: string) {
        const postData: Post = { title: title, content: content };

        this.http
        .post<{ name: string }>(
            'https://ngheroesfirebase.firebaseio.com/posts.json',
            postData
        )
        .subscribe(responseData => {
            console.log(responseData);
        }, error => {
            this.error.next(error.message);
        });
    }

    fetchPosts() {
        return this.http.get<{ [key: string]: Post }>('https://ngheroesfirebase.firebaseio.com/posts.json')
                .pipe(map(response => {
                const postsArray: Post[] = [];
                for (const value in response) {
                    if (response.hasOwnProperty(value)) {
                    postsArray.push({...response[value], id: value});
                    }
                }
                return postsArray;
                }));
            //  .subscribe(posts => {
            //     console.log(posts);
            //  });
    }

    clearPosts() {
        return this.http.delete('https://ngheroesfirebase.firebaseio.com/posts.json');
    }
}