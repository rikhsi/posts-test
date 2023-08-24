import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Post } from 'src/app/models/api/post';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  posts$!: Observable<Post[]>;
  post$!: Observable<Post>;

  constructor(private http: HttpClient ) { 
    this.posts$ = this.getPosts();
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('posts')
  }

  getPost(id: number): Observable<Post> {
    return this.post$ = this.http.get<Post>('posts/' + id);
  }
}
