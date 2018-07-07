"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({ origin: true }));
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
app.get('/getAllDocument', (request, response) => {
    const activites = db.collection('activites');
    activites.get()
        .then((snapshot) => {
        if (!snapshot) {
            console.log('No document collection');
            return;
        }
        const usersList = [];
        snapshot.forEach((item) => {
            usersList.push(item);
        });
        response.send(usersList);
    })
        .catch((error) => {
        console.log(error);
    });
});
app.get('/createActivitesCol', (request, response) => {
    for (let i = 0; i < 5; i++) {
        const usersRef = db.collection('activites').doc();
        usersRef.set({
            username: 'user' + i,
            distance: Math.floor(Math.random() * (2000 - 1)) + 1,
            id: usersRef.id,
            date: new Date
        }).then((doc) => {
            if (!doc || i >= 5) {
                console.log('User is not created');
                return;
            }
            response.send(doc);
        }).catch((error) => {
            console.log(error);
        });
    }
});
app.get('/createLeaderBoardCol', (request, response) => {
    for (let i = 0; i < 5; i++) {
        const usersRef = db.collection('leaderboard').doc();
        usersRef.set({
            username: 'user' + i,
            distance: Math.floor(Math.random() * (2000 - 1)) + 1,
            id: usersRef.id,
            date: ''
        }).then((doc) => {
            if (!doc) {
                console.log('User is not created');
                return;
            }
            console.log(doc);
        }).catch((error) => {
            console.log(error);
        });
    }
});
// export const getAllDocument = functions.https.onRequest((request, response) => {
//     const leaderBoard = db.collection('leaderboard');
//     leaderBoard.get()
//         .then((snapshot) => {
//             if (!snapshot) {
//                 console.log('No document collection');
//                 return;
//             }
//             const usersList = [];
//             snapshot.forEach((item) => {
//                 usersList.push(item);
//             });
//             response.send(usersList);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// });
// export const updateUser = functions.https.onRequest((request, response) => {
//     response.send(request.body);
//     // db.collection('activites').doc().get()
//     //     .then(doc => {
//     //         if (!doc.exists) {
//     //             console.log('No user with current id');
//     //             return;
//     //         }
//     //         console.log(doc.data());
//     //     }).catch(error => {
//     //         console.log(error);
//     //     });
// });
// export const createActivitesCol = functions.https.onRequest((request, response) => {
//     for (let i = 0; i < 5; i++) {
//         const usersRef = db.collection('activites').doc();
//         usersRef.set({
//             username: 'user' + i,
//             distance: Math.floor(Math.random() * (2000 - 1)) + 1,
//             id: usersRef.id,
//             date: new Date
//         }).then((doc) => {
//             if (!doc || i >= 5) {
//                 console.log('User is not created');
//                 return;
//             }
//             response.send(doc);
//         }).catch((error) => {
//             console.log(error);
//         });
//     }
// });
// export const createLeaderBoardCol = functions.https.onRequest((request, response) => {
//     for (let i = 0; i < 5; i++) {
//         const usersRef = db.collection('leaderboard').doc();
//         usersRef.set({
//             username: 'user' + i,
//             distance: Math.floor(Math.random() * (2000 - 1)) + 1,
//             id: usersRef.id,
//             date: ''
//         }).then((doc) => {
//             if (!doc) {
//                 console.log('User is not created');
//                 return;
//             }
//             console.log(doc);
//         }).catch((error) => {
//             console.log(error);
//         });
//     }
// });
exports.app = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map