import firebase from 'firebase/app';
import { TokenKey } from './redux/middlewares/local-storage.middleware';
import { store } from './redux/store';
import { updateUserProfile, checkForLogIn } from './redux/profile/action';
const bootstrap = async () => {
    try {
        const config = {
            apiKey: 'AIzaSyBUKfEz4PUEiZtIXwgzIzKing5xp8J-o7Q',
            authDomain: 'test-a1c39.firebaseapp.com',
            databaseURL: 'https://test-a1c39.firebaseio.com',
            projectId: 'test-a1c39',
            storageBucket: 'test-a1c39.appspot.com',
            messagingSenderId: '703565782455'
        };

        await firebase.initializeApp(config);
        if (localStorage) {
            const currentToken = localStorage.getItem(TokenKey);

            store.dispatch(checkForLogIn());
            // try {
            // } catch (error) {
            //     // tslint:disable-next-line:no-console
            //     console.log(error);
            // }
            store.dispatch(updateUserProfile(currentToken!, true));
        }
    } catch (err) {
        // tslint:disable-next-line:no-console
        // console.log('can not load configuration', err);
        return;
    }
};

export default bootstrap;
