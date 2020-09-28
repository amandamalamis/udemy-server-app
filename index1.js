const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const app = express();

passport.use(new GoogleStrategy());

// // 100760600926-4c748p6bref6snvhmf4k3e319tt85up3.apps.googleusercontent.com client ID
// // LCrSBe7Xv-j0ocIWZQ_Cug8T secret

const PORT = process.env.PORT || 5000;
app.listen(PORT);