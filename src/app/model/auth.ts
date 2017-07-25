import * as firebase from 'firebase/app';

export class Auth {
  idToken?: string;
  authState: firebase.User;

  constructor(authState: firebase.User)
  {
    if (authState) {
      this.authState = authState;
    }
  }
}
