const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


const loginButton = document.getElementById("loginButton");
const signupButton = document.getElementById("signupButton");

loginButton.addEventListener("click", () => {
    console.log("Login button clicked");
});

signupButton.addEventListener("click", () => {
    console.log("Signup button clicked");
});

const googleOAuthButton = document.getElementById("googleOAuthButton");

googleOAuthButton.addEventListener("click", () => {
    console.log("Login with Google button clicked");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
