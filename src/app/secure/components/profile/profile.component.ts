import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormArray, FormControl, ValidatorFn } from '@angular/forms';

import { Store } from '@ngrx/store';

import { User } from '../../../model';
import { AppStore } from '../../../core/store/app-store';
import { UserActions } from '../../../core/store/actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  userForm: FormGroup;
  user: User;
  sub: any;

  constructor(private fb: FormBuilder,
              private store: Store<AppStore>,
              private userActions: UserActions) {
    this.sub = store.select(s => s.user).subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
    this.createForm(this.user);
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }

  onSubmit() {
    //validations
    this.userForm.updateValueAndValidity();
    if (this.userForm.invalid)
      return;

    let user: User = this.getUserFromFormValue(this.userForm.value);

    this.saveProfile(user);

  }

  //Helper functions
  getUserFromFormValue(formValue: any): User {

    this.user.dob = formValue.dob;
    this.user.firstName = formValue.firstName;
    this.user.lastName = formValue.lastName;

    return this.user;
  }

  saveProfile(user: User) {
    this.store.dispatch(this.userActions.editUserProfile(user));
  }

  createForm(user: User) {
    this.userForm = this.fb.group({
      dob: '',
      firstName: '',
      lastName: ''
    });
  }

}
