const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

passport.use(
    new GoogleStrategy({
        clientID:"840157977101-la7ih5le08vpplddk65qj5s71rf8lcr6.apps.googleusercontent.com",
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        callbackURL:"/auth/google/callback",
        scope:["profile","email"] 
    },
    function(accessToken, refreshToken, profile, callback){
        callback(null, profile);
    }
)
);

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user, done) => {
    done(null, user);
})