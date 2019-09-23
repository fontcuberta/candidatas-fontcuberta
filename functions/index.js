'use strict';
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
// The Firebase Admin SDK to access the Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

exports.addCandidate = functions.https.onRequest(async (req, res) => {
  const email = req.body.email;
  const full_name = req.body.full_name;
  const postcode = req.body.postcode;
  const birthday = req.body.birthday;
  const birthdayDate = new Date(birthday.split('/').join(','));
  const age = Date.now() - birthdayDate.getTime();
  const ageDate = new Date(age);
  const resultAge = Math.abs(ageDate.getUTCFullYear() - 1970);

  const writeResult = await admin
    .firestore()
    .collection('candidates')
    .add({
      full_name: full_name,
      email: email,
      postcode: postcode,
      birthday: birthday,
      age: resultAge,
    });

  res.json({ result: `Candidate with ID: ${writeResult.id} added.` });
});
