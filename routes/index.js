module.exports = function(app, passport) {
    app.get('/', function (req, res) {
        res.render('index.ejs');
    });

    app.get('/login', function (req, res) {
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });

    app.post('/login', passport.authenticate('login', {
        successRedirect : '/profile',
        failureRedirect : '/login',
        failureFlash : true
    }));

    app.get('/register', function (req, res) {
        res.render('register.ejs', { message: req.flash('registerMessage') });
    });

    app.post('/register', passport.authenticate('register', {
        successRedirect : '/profile',
        failureRedirect : '/register',
        failureFlash : true
    }));

    app.get('/profile', isLoggedIn, function (req, res) {
       res.render('profile.ejs', {
           user : req.user
       });
    });

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });
};

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){ // jesli zalogowany - dalej
        return next();
    }

    res.redirect('/'); // jesli nie - index
}

/*
exports.nauczyciel = function(req, res) {

    var imieNazwisko = req.params.id;
    var imie = imieNazwisko.split('.');
    console.log(imie);
    var xml = '<?xml version="1.0" encoding="utf-8"?>\n';
    xml += '<response><ip>' + '</ip><tm>' + '</tm></response>';
    res.setHeader("Cache-Control", "no-cache, must-revalidate"); 
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Content-Type", "text/xml; charset=utf-8");
    res.end(xml);
    
};*/
