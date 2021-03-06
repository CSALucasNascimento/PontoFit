import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PostService } from './services';

import { PostActions } from './store/actions';
import { PostEffects } from './store/effects';
import { default as reducer } from './store/post-store';

import { PostAddUpdateComponent, MyPostsComponent } from './components';

import { MyPostsRoutingModule } from './routing/my-posts-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { PublicModule } from '../../../public/public.module';

@NgModule({
  declarations: [
    PostAddUpdateComponent,
    MyPostsComponent
  ],
  entryComponents: [
    PostAddUpdateComponent,
    MyPostsComponent
  ],
  imports: [
    //routing
    MyPostsRoutingModule,

    //store
    StoreModule.provideStore(reducer),

    //ngrx effects
    EffectsModule.run(PostEffects),

    SharedModule,
    PublicModule
  ],
  providers: [
    //Services
    PostService,

    //Actions
    PostActions
  ]
})
export class PostsModule { }
