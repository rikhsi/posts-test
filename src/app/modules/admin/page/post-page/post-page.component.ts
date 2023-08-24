import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/api/post';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicPages } from 'src/app/models/components/pages';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostPageComponent implements OnInit {
  post$!: Observable<Post>;
  postID!: number;
  
  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router){
    this.postID = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.post$ = this.postService.getPost(this.postID);
  }

  navigate(): void {
    this.router.navigate([BasicPages.admin])
  }
}
