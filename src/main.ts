import config from './config';
import * as express from 'express';
import firebase from 'firebase';
import * as bodyparser from 'body-parser';
import loginRouter from './modules/login/loginRouter';
const cors = require('cors');
const serviceAccount = require('./serviceAccountKey/serviceaccount.json');
import * as admin from 'firebase-admin';

const bootstrap = async () => {
    const server = express();
    server.use(cors({ origin: true }));
    firebase.initializeApp(config.auth);
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://test-a1c39.firebaseio.com'
    });
    const db = admin.firestore();
    server.set('db', db);
    // server.use((req, res, next) => {
    //     res.header('Access-Control-Allow-Origin', '*');
    //     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    //     next();
    // });
    server.use(bodyparser.urlencoded({ extended: true }));
    server.use(bodyparser.json());

    server.use('/api/', loginRouter);
    server.use(express.static('public'));

    server.listen(config.app.port, (error, respond) => {
        if (error) {
            // tslint:disable-next-line:no-console
            console.log(error);
        } else {
            // tslint:disable-next-line:no-console
            console.log(`running on port ${config.app.port}`);
        }
    });
};

bootstrap();
