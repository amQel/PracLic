var path = require('path');

var courses = [];
var crs = require('../model/course');
var usrs = require('../model/user');
var opinion = require('../model/opinions');


module.exports = function (app, passport) {

    app.get('/', function (req, res) {
        if (req.isAuthenticated()) {
            if (req.user.local.role === 'student') {
                res.render('indexStudent', {
                    data: 'Zalogowano jako ' + req.user.local.email,
                    user: req.user
                });
            } else {

                res.render('indexTeacher', {
                    data: 'Zalogowano jako ' + req.user.local.email,
                    user: req.user
                });
            }
        } else {
            res.render('index', {
                user: undefined,
                data: 'Nie zalogowano'
            });
        }
    });


    app.get('/login', function (req, res) {
        res.render('login', {
            message: req.flash('loginMessage')
        });
    });

    app.get('/contact', function (req, res) {
        res.render('contact', {
            user: req.user
        });
    });

    app.get('/joinedcourses', function (req, res) {
        var resend = function (req, res) {
            var sendInfo = [];
            var dataToSend;
            courses.forEach(function (curs, i) {
                var joined = 0;
                curs.courseUsers.forEach(function (user) {
                    if (user.name == req.user.local.email) joined = 1;
                });
                if (joined) {
                    sendInfo.push(curs);
                }
            });
            if (sendInfo.length > 0) {
                dataToSend = "Twoje kursy :";
            } else {
                dataToSend = "Nie jestes zapisany do żadnego kursu";
            }
            res.render('joinedcourses', {
                user: req.user,
                courses: sendInfo.sort(sortCurses),
                data: dataToSend
            });
        };
        reorganizeUsers(resend, req, res);
    });

    app.get('/contactTeacher', function (req, res) {
        res.render('contactTeacher', {
            user: req.user
        });
    });

    app.get('/studentaccount', function (req, res) {
        res.render('studentaccount', {
            user: req.user
        });
    });

    app.post('/login', passport.authenticate('login', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    }));

    app.get('/register', function (req, res) {
        res.render('register', {
            message: req.flash('registerMessage')
        });
    });

    app.post('/register', passport.authenticate('register', {
        successRedirect: '/profile',
        failureRedirect: '/register',
        failureFlash: true
    }));

    app.get('/profile', isLoggedIn, function (req, res) {

        if (req.user.local.role == 'student') {
            res.render('student', {
                user: req.user
            });
        } else {
            res.render('teacher', {
                user: req.user
            });
        }
    });

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });


    app.post('/changeaccount', function (req, res) {

        res.render('changeaccountStudent', {
            user: req.user
        });
    });

    app.post('/changeaccountTeacher', function (req, res) {

        res.render('changeaccountTeacher', {
            user: req.user
        });
    });


    app.get('/teachers', function (req, res) {
        var renderTeacherData = [];
        usrs.find({}, function (err, teachers) {
            teachers.forEach(function (teacher) {
                
                if(teacher.local.role == 'teacher'){
                    console.log(teacher.local.role);
                    renderTeacherData.push(teacher);
                }
            });
            console.log(renderTeacherData);
            res.render('teachers', {
            user : req.user,
            teachers : renderTeacherData
        });
            
        });

    });

    app.get('/student', function (req, res) {
        if (req.user.local.role == 'student') {
            res.render('student', {
                user: req.user
            });
        } else {
            res.render('index');
        }

    });
    app.get('/teacher', function (req, res) {
        if (req.user.local.role == 'teacher') {
            res.render('teacher', {
                user: req.user
            });
        } else {
            res.render('index', {
                user: req.user
            });
        }


    });
    
    app.get('/opinion/:teacher', function(req, res){
        var tchr = req.params.teacher;
        res.render('teacherOpinion', {
            user : req.user,
            teacher : tchr
        });
        
    });
    app.get('/search', function (req, res) {
        res.render('search', {
            //tutaj dane użytkownika req.params .. 
        });
    });
    app.get('/course', function (req, res) {
        var resend = function (req, res) {
            if (req.isAuthenticated()) {
                res.render('course', {
                    courses: courses.sort(sortCurses),
                    user: req.user
                });
            } else {
                res.render('courseNotLoggedIn', {
                    courses: courses.sort(sortCurses),
                    user: req.user
                });
                //funkcja do czyszczenia bazy danych z kursów - wywolywac ostroznie
                //                courses.forEach(function (id, course) {
                //                    console.log("beniz" + course);
                //                    crs.remove({
                //                        'id': course
                //                    }, function (err) {
                //                        console.log(err);
                //                    });
                //                });
            }
        };
        reorganizeUsers(resend, req, res);


    });


    app.get('/zapisz/:id', function (req, res) {
        var ID = req.params.id;
        crs.findOne({
            'id': ID
        }, function (err, course) {
            if (err) {
                console.log('modafukin erro');
            } else {

                var courseToUpdate = course;
                var namee = {
                    name: req.user.local.email
                };
                crs.remove({
                    'id': courseToUpdate.id
                }, function (err) {
                    console.log(err);
                });
                courseToUpdate.courseUsers.push(namee);

                var newCourse = new crs();
                newCourse.id = courseToUpdate.id;
                newCourse.teacher = courseToUpdate.teacher;
                newCourse.courseInfo.name = courseToUpdate.courseInfo.name;
                newCourse.courseInfo.subject = courseToUpdate.courseInfo.subject;
                newCourse.courseInfo.description = courseToUpdate.courseInfo.description;
                newCourse.courseUsers = courseToUpdate.courseUsers;
                newCourse.courseInfo.costPerHour = courseToUpdate.courseInfo.costPerHour;
                newCourse.level = courseToUpdate.level;

                newCourse.save(function (err) {
                    if (err) {
                        throw err;
                    }
                });

            }
        });
        res.redirect('/profile');

    });

    app.get('/wypisz/:id', function (req, res) {
        var ID = req.params.id;
        crs.findOne({
            'id': ID
        }, function (err, course) {
            if (err) {
                console.log('modafukin erro');
            } else {
                var courseToUpdate = course;

                crs.remove({
                    'id': courseToUpdate.id
                }, function (err) {
                    console.log(err);
                });


                courseToUpdate.courseUsers.forEach(function (user, i) {
                    if (user.name == req.user.local.email) {
                        courseToUpdate.courseUsers.splice(i, 1);
                    }
                });

                var newCourse = new crs();
                newCourse.id = courseToUpdate.id;
                newCourse.teacher = courseToUpdate.teacher;
                newCourse.courseInfo.name = courseToUpdate.courseInfo.name;
                newCourse.courseInfo.subject = courseToUpdate.courseInfo.subject;
                newCourse.courseInfo.description = courseToUpdate.courseInfo.description;
                newCourse.courseUsers = courseToUpdate.courseUsers;
                newCourse.courseInfo.costPerHour = courseToUpdate.courseInfo.costPerHour;
                newCourse.level = courseToUpdate.level;

                newCourse.save(function (err) {
                    if (err) {
                        console.log('error saving user');
                        throw err;
                    }
                });
            }
        });
        res.redirect('/joinedcourses');
    });

    app.get('/usun/:id', function (req, res) {
        var ID = req.params.id;
        crs.remove({
            'id': ID
        }, function (err) {
            console.log(err);
        });
        res.redirect('/mycourses');
    });


    app.get('/teacheraccount', function (req, res) {
        res.render('teacheraccount', {
            user: req.user
        });
    });

    app.get('/addcourse', function (req, res) {
        res.render('addcourse', {
            user: req.user
        });
    });

    app.get('/index', function (req, res) {
        res.render('index', {
            user: req.user
        });
    });

    app.get('/mycourses', function (req, res) {
        var resnd = function (req, res) {
            var myCourses = [];
            courses.forEach(function (course) {
                if (course.teacher == req.user.local.email) {
                    myCourses.push(course);
                }
            });
            res.render('myCourses', {
                data: "kursy uzytkownika " + req.user.local.email,
                courses: myCourses.sort(sortCurses), user: req.user
            });
        };
        reorganizeUsers(resnd, req, res);
    });

    app.post('/newcourse', function (req, res) {

        var resnd = function (req, res) {
            var newCourse = new crs();
            newCourse.id = courses.length;
            newCourse.teacher = req.user.local.email;
            newCourse.courseInfo.name = req.body.courseName;
            newCourse.courseInfo.subject = req.body.Subject;
            newCourse.courseInfo.description = req.body.courseDescription;
            newCourse.courseInfo.costPerHour = req.body.costPerHour;
            newCourse.level = req.body.educationLevel;

            newCourse.save(function (err) {
                if (err) {
                    throw err;
                }
            });

            courses.push(newCourse);
            res.redirect('/mycourses');
        };

        reorganizeUsers(resnd, req, res);


    });
    app.post('/opinion', function(req, res) {
        var newOpinion = new opinion();
        newOpinion.teacher = req.body.teacher;
        newOpinion.opinion = req.body.opinion;
        newOpinion.student = req.user.local.email;
        newOpinion.save(function (err) {
                    if (err) {
                        console.log('error saving opinion');
                        throw err;
                    }
                });
        
        res.redirect('/opinions');
});
    app.get('/opinions', function(req, res){
        var opinions = [];
        opinion.find({}, function(err, opn){
            opn.forEach(function(opin){
                console.log(opin);
                opinions.push(opin);
            });
            res.render('opinions', {
            user : req.user,
            opinions : opinions
        });
        });
        
    });

    app.get('/cities/:id', function (req, res) {
        var id = req.params.id;
        res.sendFile(path.resolve('views/cities/' + id + '.html'));
    });

    app.get('/citiesCheck/:id', function (req, res) {
        var id = req.params.id;
        res.sendFile(path.resolve('views/cities/' + id + 'check.html'));
    });
};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) { // jesli zalogowany - dalej
        return next();
    }

    res.redirect('/'); // jesli nie - index
}

var reorganizeUsers = function (cb, req, res) {
    courses = [];
    crs.find({}, function (err, crss) {
        crss.forEach(function (course) {
            courses.push(course);
        });
        if (cb) cb(req, res);
    });

};

var sortCurses = function (a, b) {
    return a.id - b.id;
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
