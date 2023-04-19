import * as functions from "firebase-functions";
const admin = require('firebase-admin');
admin.initializeApp();

const firestore = admin.firestore();

exports.addUserDetails = functions.auth.user().onCreate((user) => {
    const uid = user.uid;
    const displayName = user.displayName;

    firestore.collection('user-details').document(uid).add({
        displayName: displayName,
        image: "images/USM50.jpg",
    });
});
