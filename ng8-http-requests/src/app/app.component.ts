import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostService } from './posts.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  loadedPosts = [];
  isFetching = false;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    // this.fetchPosts();
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    // --- Moved the request implementation to a service ---
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    // this.fetchPosts();

    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }

  onClearPosts() {
    // Send Http request
  }

  // private fetchPosts() {
    // First approach for using Types with HttpClient
    // this.http.get('https://ngheroesfirebase.firebaseio.com/posts.json')
    //          .pipe(map((response: { [key: string]: Post }) => {
    //            const postsArray: Post[] = [];
    //            for (const value in response) {
    //              if (response.hasOwnProperty(value)) {
    //               postsArray.push({...response[value], id: value});
    //              }
    //            }
    //            return postsArray;
    //          }))
    //          .subscribe(posts => {
    //             console.log(posts);
    //          });

    // this.isFetching = true;
    // Second approach --- moved to a service ---
    
  // }
}
