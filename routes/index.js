var path = require('path');

var courses = [];
var crs = require('../model/course');

module.exports = function(app, passport) {
    
    app.get('/', function (req, res) {
        if(req.isAuthenticated()){
            res.render('index',{
            data : 'Zalogowano jako ' + req.user.local.email,user : req.user
           });
        } else {
            res.render('index', {
               data : 'nie zalogowano'
            });
        }
    });

    app.get('/login', function (req, res) {
        res.render('login', { message: req.flash('loginMessage') });
    });

    app.get('/contact', function (req, res) {
        res.render('contact', {
           user : req.user
       });
    });
    
     app.get('/contactTeacher', function (req, res) {
        res.render('contactTeacher', {
           user : req.user
       });
    });
    
    app.get('/studentaccount', function (req, res) {
        res.render('studentaccount', {
           user : req.user
       });
    });
    
    app.get('/student', function (req, res) {
        res.render('student.ejs');
    });
    
    app.post('/login', passport.authenticate('login', {
        successRedirect : '/profile',
        failureRedirect : '/login',
        failureFlash : true
    }));

    app.get('/register', function (req, res) {
        res.render('register', { message: req.flash('registerMessage') });
    });

    app.post('/register', passport.authenticate('register', {
        successRedirect : '/profile',
        failureRedirect : '/register',
        failureFlash : true
    }));

    app.get('/profile', isLoggedIn, function (req, res) {
        
        if(req.user.local.role=='student'){
       res.render('student', {
           user : req.user
       });
        }
        else{
        res.render('teacher', {
           user : req.user
       });
    }
    });

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    
      app.post('/changeaccount',function(req, res){
          
        res.render('changeaccountStudent', {
           user : req.user
       });
    });
    
    app.post('/changeaccountTeacher',function(req, res){
          
        res.render('changeaccountTeacher', {
           user : req.user
       });
    });
    



     app.get('/student', function (req, res) {
          if(req.user.local.role=='student'){
       res.render('student', {
           user : req.user
       });
        }
        else{
        res.render('index');
    }
         
    });
    app.get('/teacher', function (req, res) {
           if(req.user.local.role=='teacher'){
       res.render('teacher', {
           user : req.user
       });
        }
        else{
        res.render('index', {
           user : req.user
       });
    }
             
         
    });
    app.get('/search', function (req, res) {
         res.render('search', {
             //tutaj dane użytkownika req.params .. 
       });
    });
    app.get('/course', function (req, res) {
        var resend = function(req, res) {
            res.render('course', {
             courses : courses,
             user : req.user
         });
        }
        reorganizeUsers(resend, req, res);
        
         
//     crs.remove({ 'id' : 0 }, function(err) {
//    
//       console.log(err);
//    });
});
    
    
    
    app.get('/teacheraccount', function (req, res) {
         res.render('teacheraccount', {
             user : req.user
         });
    });
    
    app.get('/addcourse', function (req, res) {
         res.render('addcourse', {
           user : req.user
       });
    });
    
    app.get('/mycourses', function (req, res) {
        var resnd = function(req, res){
        var myCourses = [];
        courses.forEach(function(course){
            if(course.teacher == req.user.local.email){
            myCourses.push(course);
            }
        });
         res.render('myCourses', {
             data : "kursy uzytkownika " + req.user.local.email,
             courses : myCourses 
       });
    }
        reorganizeUsers(resnd, req, res);
    });
    
    app.post('/newcourse',function(req, res){
        
        var resnd = function(req, res){
        var newCourse = new crs();
        newCourse.id = courses.length;
        newCourse.teacher = req.user.local.email;
        newCourse.courseInfo.name = req.body.courseName;
        newCourse.courseInfo.subject = req.body.Subject;
        newCourse.courseInfo.description = req.body.courseDescription;
        
        newCourse.save(function(err){
                        if(err){
                            throw err;
                        }
                    });
        
        courses.push(newCourse);
        res.redirect('/mycourses');
        }
        
        reorganizeUsers(resnd, req, res);
        
        
    });

    app.get('/cities/:id', function(req, res){
       var id = req.params.id;
       res.sendFile(path.resolve('views/cities/' + id + '.html'));
    });
};

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){ // jesli zalogowany - dalej
        return next();
    }

    res.redirect('/'); // jesli nie - index
}

var reorganizeUsers = function(cb, req, res){
    courses = [];
    crs.find({}, function(err, crss) {
        crss.forEach(function(course){
        console.log(course);
        courses.push(course);
        console.log(courses.length);
        });
        if (cb) cb(req, res);
    });
    
};



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
