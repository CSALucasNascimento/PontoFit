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
    this.db.object('/users/' + user.userId).update({
      dob: user.dob.toString(),
      displayName: user.firstName + ' ' + user.lastName,
      firstName: user.firstName,
      lastName: user.lastName
    }).then(
      (ret)=> {
        this.store.dispatch(this.userActions.editUserSuccess());
      },
      (error: Error) => {
        console.error(error);
      }
    );
  }

  getUsers(): Observable<User[]> {
    return this.db.list('/users')
      .catch(error => {
        console.log(error);
        return Observable.of(null);
      });
  }

  getUserRoles(user: User): Observable<User> {
    return this.db.object('/users/' + user.userId + "/roles")
      .take(1)
      .map(roles => {
        user.roles = roles;
        return user;
      });
  }

  get user () : User {
    let user: User;
    this.db.object('/users/' + user.userId);
    this.store.take(1).subscribe(s => user = s.user);
    return user;
  };

}
