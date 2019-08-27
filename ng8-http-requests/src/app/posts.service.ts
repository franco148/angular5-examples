import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

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
        // For multiple query params
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty').append('custom', 'key');

        return this.http.get<{ [key: string]: Post }>(
                'https://ngheroesfirebase.firebaseio.com/posts.json',
                {
                    headers: new HttpHeaders({'Custom-Header': 'Hello', 'My-Auth': 'Value'}),
                    // params: new HttpParams().set('print', 'pretty')
                    params: searchParams
                }
            )
            .pipe(map(response => {
                const postsArray: Post[] = [];
                for (const value in response) {
                    if (response.hasOwnProperty(value)) {
                    postsArray.push({...response[value], id: value});
                    }
                }
                return postsArray;
            }), catchError(errorResponse => {
                // Send to analytics server
                    console.log('Catching error with rxjs feature... ', errorResponse);
                    return throwError(errorResponse);
                })            
            );
            //  .subscribe(posts => {
            //     console.log(posts);
            //  });
    }

    clearPosts() {
        return this.http.delete('https://ngheroesfirebase.firebaseio.com/posts.json');
    }
}