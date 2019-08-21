import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostService {

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
        });
    }

    fetchPosts() {
        this.http.get<{ [key: string]: Post }>('https://ngheroesfirebase.firebaseio.com/posts.json')
             .pipe(map(response => {
               const postsArray: Post[] = [];
               for (const value in response) {
                 if (response.hasOwnProperty(value)) {
                  postsArray.push({...response[value], id: value});
                 }
               }
               return postsArray;
             }))
             .subscribe(posts => {
                console.log(posts);
             });
    }
}