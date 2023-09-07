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

// Serve static files from the "public" directory
app.use(express.static(__dirname + '/public'));

// Handle route for the home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Your passport authentication strategies and routes should go here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
