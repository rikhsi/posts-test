import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post,PostHeader } from 'src/app/models/api/post';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostTableComponent implements OnInit {
  @Input() tableData$!: Observable<Post[]>;
  public tableHeaders: PostHeader[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setHeaders();
  }

  private setHeaders (): void {
    this.tableHeaders = Object.values(PostHeader);
  }

  onNavigate(id: number): void {
    this.router.navigate(['admin/post/' + id])
  }
}
