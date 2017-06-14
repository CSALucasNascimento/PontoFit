import { Injectable }    from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import '../../rxjs-extensions';

import { User } from '../../model/user';
import { Store } from '@ngrx/store';
import { AppStore } from '../store/app-store';
import { UserActions } from '../store/actions';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase,
              private store: Store<AppStore>,
              private userActions: UserActions
  ) {}

  editUserProfile(user: User) {
    this.db.list('/user').push(user).then(
        (ret) => {  //success
          if (ret.key)
            this.db.object('/users/' + user).update({[ret.key]: "unpublished"});
          this.store.dispatch(this.userActions.editUserSuccess());
        },
        (error: Error) => {//error
          console.error(error);
        }
    );
  }

}
