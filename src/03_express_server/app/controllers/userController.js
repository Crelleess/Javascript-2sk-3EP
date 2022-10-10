const model = require('../models/userModel');

exports.signupForm = (dotaz, odpoved) => {
    odpoved.render('user/signup');
}

exports.signinForm = (dotaz, odpoved) => {
    odpoved.render('user/signin');
}

exports.signup = (dotaz, odpoved) => {
    // vytahani si dat z formulare do promennych
    const username = dotaz.body.username;
    const password = dotaz.body.password;
    const passwordCheck = dotaz.body.passwordCheck;

    // kontroly vstupnich dat
    if(username.trim().length == 0) {
        return odpoved.redirect('/user/signup');
    }
    if(password.trim().length == 0) {
        return odpoved.redirect('/user/signup');
    }
    if(password != passwordCheck) {
        return odpoved.redirect('/user/signup');
    }

    // prace modelu
    if(!model.addUser(username, password)) {
        return odpoved.redirect('/page/error');
    }

    // vysledny view pri uspesne registraci
    return odpoved.redirect('/user/signin');
}

exports.signin = (dotaz, odpoved) => {
    const username = dotaz.body.username.trim();
    const password = dotaz.body.password.trim();

    if(!model.check(username, password)) {
        return odpoved.redirect('/user/signin');
    }

    return odpoved.redirect('/user/profile');
}

exports.signout = (dotaz, odpoved) => {
    return odpoved.redirect('/user/signin');
}

exports.profile = (dotaz, odpoved) => {
    odpoved.render('user/profile');
}
