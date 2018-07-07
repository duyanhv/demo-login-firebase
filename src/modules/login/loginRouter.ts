import { Router as ExpressRouter } from 'express';
const Router = ExpressRouter();
import firebase from 'firebase/app';
import isAuth from 'helpers/isAuth';
import * as admin from 'firebase-admin';
// const db = admin.firestore();

Router.get('/login', (req, res) => {
    res.send('login api');
});

Router.post('/createuser', (req, res) => {
    firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
        .then((resolve) => {
            res.send(resolve);
        })
        .catch((error) => {
            res.send(error);
            // tslint:disable-next-line:no-console
            console.log(error);
        });
});

Router.get('/user', isAuth, (req, res) => {
    const user = firebase.auth().currentUser;

    if (user != null) {
        res.send(user);
    }
});

Router.post('/signin', (req, res) => {
    firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
        .then((resolve) => {
            res.send(resolve);
        })
        .catch((error) => {
            res.send(error);
        });
});

Router.get('/logout', isAuth, (req, res) => {
    firebase.auth().signOut().then((resolve) => {
        // tslint:disable-next-line:no-console
        console.log(resolve);
        res.send(resolve);
    }).catch((error) => {
        // tslint:disable-next-line:no-console
        console.log(error);

        res.send(error);
    });
});

Router.get('/testfirecloud', async (req, res) => {
    const db = req.app.get('db');
    // const setAlan = aTuringRef.set({
    //     first: 'Alan',
    //     middle: 'Mathison',
    //     last: 'Turing',
    //     born: 1912
    // });

    for (let i = 0; i < 5; i++) {
        const usersRef = await db
            .collection('leaderboard').doc('user' + i);
        await usersRef.set({
            username: 'user' + i,
            ranking: Math.floor(Math.random() * (100 - 1)) + 1
        });
    }
    try {
        const Users = await db.collection('leaderboard').get();
        const usersList = [];
        Users.forEach((item) => {
            usersList.push(item.data());
        });
        res.send(usersList);
    } catch (error) {
        // tslint:disable-next-line:no-console
        console.log(error);
    }
});

export default Router;
