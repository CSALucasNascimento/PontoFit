import { AuthProviders, FirebaseAuthState } from 'angularfire2';

export class User {
  userId: string;
  displayName: string;
  photoURL: String;
  email: string;
  authState: FirebaseAuthState;
  roles: any[];

  constructor(authState: FirebaseAuthState)
  {
    if (authState) {
      this.authState = authState;
      this.userId = authState.uid;
      this.photoURL = authState.auth.photoURL;
      this.email = authState.auth.providerData[0].email;
      this.displayName = (authState.auth.providerData[0].displayName ? authState.auth.providerData[0].displayName : this.email);
    }
  }
}
