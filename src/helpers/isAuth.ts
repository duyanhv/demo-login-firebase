import firebase from 'firebase';

const isAuth = async (req, res, next) => {
    await firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
            return res.status(404).send('You are not login');
        }
    });
    next();
};

export default isAuth;
