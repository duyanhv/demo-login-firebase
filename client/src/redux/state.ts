import { ProfileState } from './profile';
import LoginPageState from './ui/login-page/state';

interface AppState {
    profile: ProfileState;
    ui: {
        loginPage: LoginPageState;
    };
}

export { AppState };
