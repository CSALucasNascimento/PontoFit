import {AuthenticationService} from './authentication.service';
import {AuthGuard} from './auth-guard';

export {
    AuthenticationService,
    AuthGuard
};

export default [
    AuthenticationService,
    AuthGuard
];