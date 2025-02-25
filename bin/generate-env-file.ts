#!/usr/bin/env node

const fs = require("fs");
const firebaseSettings = require("../.firebase-config");

const ENV_LOCAL = `
REACT_APP_FIREBASE_API_KEY='${firebaseSettings.apiKey}'
REACT_APP_FIREBASE_AUTH_DOMAIN='${firebaseSettings.authDomain}'
REACT_APP_FIREBASE_DATABASE_URL='${firebaseSettings.databaseURL}'
REACT_APP_FIREBASE_PROJECT_ID='${firebaseSettings.projectId}'
REACT_APP_FIREBASE_STORAGE_BUCKET='${firebaseSettings.storageBucket}'
REACT_APP_FIREBASE_MESSAGING_SENDER_ID='${firebaseSettings.messagingSenderId}'
REACT_APP_FIREBASE_APP_ID='${firebaseSettings.appId}'
`;
const TRIMMED_ENV_LOCAL = ENV_LOCAL.trim();

const envFileName = ".env.local";

try {
  fs.writeFileSync(envFileName, TRIMMED_ENV_LOCAL);
  console.log(`Congrats! ${envFileName} was successfully generated!`);
} catch (e) {
  console.log(e);
}
