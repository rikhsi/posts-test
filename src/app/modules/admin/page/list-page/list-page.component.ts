import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../../services/post.service';
import { Post } from 'src/app/models/api/post';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListPageComponent implements OnInit{
  posts$!: Observable<Post[]>;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.posts$;
  }

}
