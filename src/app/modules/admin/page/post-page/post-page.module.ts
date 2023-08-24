import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostPageRoutingModule } from './post-page-routing.module';
import { PostPageComponent } from './post-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PostPageComponent
  ],
  imports: [
    CommonModule,
    PostPageRoutingModule,
    SharedModule
  ]
})
export class PostPageModule { }
