import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TagService } from './services';

import { TagActions } from './store/actions';
import { TagEffects } from './store/effects';
import { default as reducer } from './store/tag-store';

@NgModule({
  declarations: [
  ],
  imports: [

    //store
    StoreModule.provideStore(reducer),

    //ngrx effects
    EffectsModule.run(TagEffects),
  ],
  providers: [
    //Services
    TagService,

    //Actions
    TagActions
  ]
})
export class TagsModule { }
