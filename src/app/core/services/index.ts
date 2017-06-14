import {AuthenticationService} from './authentication.service';
import {AuthGuard} from './auth-guard';
import {UserService} from './user.service'

export {
    AuthenticationService,
    AuthGuard,
    UserService
};

export default [
    AuthenticationService,
    AuthGuard,
    UserService
];