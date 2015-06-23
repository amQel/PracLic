module.exports = function(app, passport) {
    app.get('/', function (req, res) {
        if(req.isAuthenticated()){
           res.render('index.ejs',{
            data : 'Zalogowano jako ' + req.user.local.email
           }
          );
        } else {
            
        res.render('index.ejs', {
           data : 'nie zalogowano'
            }
           );
        }
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
    
     app.get('/student', function (req, res) {
         res.render('student', {
             //tutaj dane użytkownika req.params .. 
       });
    });
    app.get('/teacher', function (req, res) {
         res.render('teacher', {
             //tutaj dane użytkownika req.params .. 
       });
    });
    app.get('/search', function (req, res) {
         res.render('search', {
             //tutaj dane użytkownika req.params .. 
       });
    });
    app.get('/course', function (req, res) {
         res.render('course', {
             //tutaj dane użytkownika req.params .. 
       });
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
