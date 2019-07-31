import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
        'https://ngheroesfirebase.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http.get('https://ngheroesfirebase.firebaseio.com/posts.json')
             .pipe(map(response => {
               const postsArray = [];
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
