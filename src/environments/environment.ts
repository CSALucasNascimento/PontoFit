// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { IConfig } from './iconfig';

export const environment = {
  production: false
};

export const CONFIG: IConfig = {
  "firebaseConfig" : {
    apiKey: "AIzaSyCLi1Czc0qWRN2LNWkvpwzq6wNGFZtw42k",
    authDomain: "ponto-fit.firebaseapp.com",
    databaseURL: "https://ponto-fit.firebaseio.com",
    storageBucket: "ponto-fit.appspot.com",
    messagingSenderId: "873522474878"
  }
};
