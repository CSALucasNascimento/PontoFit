import { personal } from './personal.reducer';
import { PersonalActions } from '../actions';
import { Personal } from '../../../model';

describe('Reducer: personal', () => {
  
  it('Initial State', () => {
    let state: Personal = personal(undefined, {type: null, payload: null});

    expect(state).toEqual(null);
  });

  it('Add Personal Action', () => {
    let aPersonal: Personal  = { 
      "personalId": "32489230-13423",
      "displayName": "trivia",
      "email": "trivia@realworldfullstack.io",
      "roles": [],
      "authState": null
    };
    let state: Personal = personal(null, {type: PersonalActions.ADD_USER_WITH_ROLES, payload: aPersonal});

    expect(state).toEqual(aPersonal);

  });

  it('Logoff Action', () => {
    let aPersonal: Personal  = { 
      "personalId": "32489230-13423",
      "displayName": "trivia",
      "email": "trivia@realworldfullstack.io",
      "roles": [],
      "authState": null
    };
    let state: Personal = personal(aPersonal, {type: PersonalActions.LOGOFF});

    expect(state).toEqual(null);

  });

  it('Any other action', () => {
    let aPersonal: Personal  = { 
      "personalId": "32489230-13423",
      "displayName": "trivia",
      "email": "trivia@realworldfullstack.io",
      "roles": [],
      "authState": null
    };
    let state: Personal = personal(aPersonal, {type: "any other action", payload: null});

    expect(state).toEqual(aPersonal);

  });


});
