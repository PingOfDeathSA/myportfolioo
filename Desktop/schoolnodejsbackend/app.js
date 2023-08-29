const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { StudentsLogin, UserProfiles, Followers } = require('./data');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require("passport");
const MongoStore = require('connect-mongo');
const LocalStrategy = require('passport-local').Strategy;
const passportLocalMongoose = require('passport-local-mongoose');

const app = express();
// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));
// Parse JSON bodies
app.use(bodyParser.json());
app.use(cors());


app.use(session({
  secret: 'THeTerminatorIsHere', // Secret key used to sign the session ID cookie
  resave: false, // Do not save the session if unmodified
  saveUninitialized: false, // Do not create a session until something is stored
  store: MongoStore.create({
 mongoUrl: "mongodb+srv://PingOfDeathSA:Ronald438@cluster0.kqlfkdc.mongodb.net/FinalschoolDB",
    collectionName: 'sessions', // Collection name to store the sessions
    ttl: 60 * 60 // Session TTL (1 hour)
  })
}));
app.use(passport.initialize());
app.use(passport.session());
mongoose.connect("mongodb+srv://PingOfDeathSA:Ronald438@cluster0.kqlfkdc.mongodb.net/FinalschoolDB");


// User Schema
const userLearnerschema = new mongoose.Schema({
  email: String,
  password: String,
});

const learnerInfoSchema = new mongoose.Schema({
  StudentNumber: {
    type: String,
    required: true
  },
  GradeID: {
    type: String,
    required: true
  },
  subject: {
    type: [String],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  Gender: {
    type: String,
    required: true
  },
  home_address: {
    type: String || Number,
    required: true
  },
  Gandian_First_Name: {
    type: String,
    required: true
  },
  Gdian_Lat_Name: {
    type: String,
    required: true
  },
  Gadian_title: {
    type: String || Number,
    required: true
  },
  Gadian_email: {
    type: String,
    required: true
  },
  Gadian_Home_address: {
    type: String || Number,
    required: true
  },
  Gadiane_Contacts: {
    type: Number,
    required: true
  },
  OnlineTest: [{
    Subject_Test: {
      type: String,
      required: true
    },
    Test_Name: {
      type: Number,
      required: true
    },
    Mark: {
      type: Number,
      required: true
    },
    Date: {
      type: Date,
      required: true,
      default: Date.now
    }
  }],
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  teacher_profile_picture: {
    type: String,
    required: true
  },
  email_address: {
    type: String || Number,
    required: true
  }
});
const AnnouceSchema = new mongoose.Schema({
  AnM: {
    type: String|| Number,
    required: true
  },
  Date: {
    type: Date,
    required: true,
    default: Date.now
  }
  });

  const teacherSchema = new mongoose.Schema({
    TeacherNumber:{ type: String, required: true},
    GradeID: {
      type: [String],
      required: true
    },
    subject: {
      type: [String],
      required: true
    },
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    teacher_profile_picture: {
      type: String,
      required: true
    },
    email_adsress: {
      type: String || Number,
      required: true
    },
    home_address: {
      type: String|| Number,
      required: true
    },
    Contact_Details: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  });

  const timetableSchema = new mongoose.Schema({
    day: String,
  
        startTime: String,
        endTime: String,
        Subject: String,
        teacher: String,
        classroom: String,
  
  });
  
  // Create the timetable model
  const QuizzSchema = new mongoose.Schema({
    Teacher: { type: String|| Number, required: true },
    Topic: { type: String|| Number, required: true },
    gradeID: { type: String|| Number, required: true },
    subject: { type:String|| Number, required: true },
    QuizzCode: { type: String|| Number, required: true },
    Test_Name: {type: String|| Number, required: true },
    Questions: [{
      QuizQuestion: { type: String, required: true },
      CorrectAnswer: { type: String, required: true },
      WrongAnswers:{  type: [String], required: true},
      ImageQuiz:{ type: String, required: true },
    }],
    Date: {
      type: Date,
      required: true,
      default: Date.now
    }
  });
  const MarketPlaceSchema = new mongoose.Schema({
      
    PostedbyUnique:{type: String|| Number, required: true },
    Size:{
      type: [String || Number],
      required: true
    },
    PickupAddress : {type: String|| Number, required: true },
    Available:{type: String|| Number, required: true },
    Image1: {type: String|| Number, required: true },
    Image2:{type: String|| Number, required: false },
    Image3: {type: String|| Number, required: false },
    ProductName: {type: String|| Number, required: true },
    NumOfProductsinstore:{type: String|| Number, required: true },
    Date: {
      type: Date,
      required: true,
      default: Date.now
    },
    AvailableColors : {
      type: [String || Number],
      required: true
    },
    Price: {type: Number, required: true},
    ContactDetails: {type: Number, required: true},
    Discount: {type: String|| Number, required: true },
    Discriptiton: {type: String|| Number, required: true },
    Discountdatefrom:{type: String|| Number, required: true },
    DiscountdateTill:{type: String|| Number, required: true },


})


userLearnerschema.plugin(passportLocalMongoose);
const MarketPlaceModel = mongoose.model("Marketpacel_collec", MarketPlaceSchema);
const Quizzfomodel = mongoose.model("Quizz_collec", QuizzSchema);
const Annoucefomodel = mongoose.model("Announc_collec", AnnouceSchema);
const LearnerInfomodel = mongoose.model("Leaner_collec", learnerInfoSchema);
const TeacherInfomodel = mongoose.model("Teacher_collec", teacherSchema);
const TimetableModel = mongoose.model('Timetable', timetableSchema);
const UserLeanerModel = mongoose.model("UserLearner", userLearnerschema);


passport.use(UserLeanerModel.createStrategy());
// Setting up a new instance of LocalStrategy, using the 'email' field as the username field
passport.use(new LocalStrategy({ username: 'email' }, UserLeanerModel.authenticate()));
passport.serializeUser(UserLeanerModel.serializeUser());
passport.deserializeUser(UserLeanerModel.deserializeUser());






app.get('/announcement', (req, res) => {
  Annoucefomodel.find({})
    .then((Annoces) => {
      res.status(200).json({ Annoces: Annoces });
      console.log('Announcements:', Annoces);
    })
    .catch((err) => {
      console.log(err);
    });
});




app.post('/TestQuiz', (req, res) => {
  const globalUser = req.body.globalUser;
  const quizzcode = req.body.globalCode;

  // Log the user and global code
  console.log('User:', globalUser);
  console.log('Global Code:', quizzcode);
  const Learnerusername = globalUser;
  LearnerInfomodel.find({email_address: Learnerusername})
  .then((LeanerDetails) => {

    const LearnerGarage = LeanerDetails[0].GradeID;
    const LeanerSubjects = LeanerDetails[0].subject;
 
    Quizzfomodel.find({
      QuizzCode: quizzcode,
      gradeID: LearnerGarage,
      subject: { $in: LeanerSubjects } 
     
    })    
    .then((FoundQuizTest) => {
      if(FoundQuizTest.length == 0 ){

res.send(404)
        console.log('quiz not found or test is not available')
      } else{
//  console.log( 'found quizz test  is ', LeanerSubjects)


let AllQuestions = [];
FoundQuizTest.forEach(QuestionCorrect => {
            AllQuestions.push(QuestionCorrect.Questions);
          });
          let CorrectAnswerDetails = [];
          AllQuestions.forEach((questionArray) => {
            questionArray.forEach((question) => {
              const CorrectAnswerObj = {
                ImageQuiz:question.ImageQuiz,
                QuizQuestion:question.QuizQuestion,
                _id: question._id.toString(),
                CorrectAnswer: question.CorrectAnswer,
              };
              CorrectAnswerDetails.push(CorrectAnswerObj);
            });
          });
          // console.log("Correct answer is", CorrectAnswerDetails);   
          let FinalWrongAnswerDetails = [];          
          AllQuestions.forEach((questionArray2) => {
            questionArray2.forEach((question) => {
              const WrongAnswerObj = {
                ImageQuiz:question.ImageQuiz,
                QuizQuestion:question.QuizQuestion,
                
                _id: question._id.toString(),
                WrongAnswers: question.WrongAnswers,
              };
              FinalWrongAnswerDetails.push(WrongAnswerObj);
            });
          });
          // console.log("Wrong answers are ", FinalWrongAnswerDetails);
          // loop through the FinalWrongAnswerDetails array and modify each object
          FinalWrongAnswerDetails = FinalWrongAnswerDetails.map((obj) => {
            // find the corresponding CorrectAnswer object
            const correctAnswerObj = CorrectAnswerDetails.find(
              (item) => item._id === obj._id
            );
            // get a random index within the WrongAnswers array
            const randomIndex = Math.floor(Math.random() * (obj.WrongAnswers.length + 1));
            // insert the CorrectAnswer value at the random index
            obj.WrongAnswers.splice(randomIndex, 0, correctAnswerObj.CorrectAnswer);
            return obj;
          });

      
          const Userfinalinfor = {
            LeanerDetails : LeanerDetails,
            FinalWrongAnswerDetails : FinalWrongAnswerDetails,
            FoundQuizTest : FoundQuizTest,
              };
              res.status(200).send(Userfinalinfor);
          //  console.log(Userfinalinfor)
          // console.log("Final wrong answer is", FinalWrongAnswerDetails);
      } 
    })
  })
  .catch((err) => {
    console.log(err);
  });

});






app.post('/QuizCode', (req, res) => {
  const quizzcode = req.body.quizzcode;
  const globalUser = req.body.globalUser;
  console.log(quizzcode)
  console.log(globalUser)
  const Learnerusername = globalUser;
  LearnerInfomodel.find({email_address: Learnerusername})
  .then((LeanerDetails) => {

    const LearnerGarage = LeanerDetails.GradeID;
    const LeanerSubjects = LeanerDetails.subject;
    
    Quizzfomodel.find({QuizzCode :quizzcode, })
    .then((FoundQuizTest) => {
      if(FoundQuizTest.length == 0 ){

res.send(404)
        console.log('quiz not found or test is not available')
      } else{
        const Userfinalinfor = {
          quizzcode: quizzcode
        };
      

        res.status(200).send(Userfinalinfor);
        } 
    })
  })
  .catch((err) => {
    console.log(err);
  });

});



app.post('/dashboard', (req, res) => {
  // Access the globalUser value sent in the request body
  const globalUser = req.body.globalUser;
  console.log('global user is', globalUser);

  LearnerInfomodel.findOne({ email_address: globalUser })
  .then(function (learnerInformation) {

    // Checking learnerInfoSchema's performence
    const LearnerMarks = learnerInformation.OnlineTest;
   const LearnerGarage = learnerInformation.GradeID;

    let totalMarks = 0;
    for (let i = 0; i < LearnerMarks.length; i++) {
      totalMarks += LearnerMarks[i].Mark;
    } 
    const averageMark = totalMarks / LearnerMarks.length;

    

    
    //  console.log("Average Mark:", averageMark);
    // Find underperforming subjects (marks below 50%)
    const underperformingSubjects = LearnerMarks.filter(subject => {
      return (subject.Mark / 100) * 100 < 50; // Assuming marks are out of 100
    });
    const VeryBadMark = LearnerMarks.filter(subject => {
      return (subject.Mark / 100) * 100 < 30; // Assuming marks are out of 100
    });
    const distintion  = LearnerMarks.filter(subject => {
      return (subject.Mark / 100) * 100 >= 80; // Assuming marks are out of 100
    });
    // console.log("Bad Subjects: ",VeryBadMark);
    // console.log("Bad Subjects: ",distintion);
    const LearnerSunjects = learnerInformation.subject;
    TeacherInfomodel.find({ GradeID: LearnerGarage, subject: { $in: LearnerSunjects } })
    .then(function (TeachersInformation) {
      function isTeachingSubject(subjects) {
        for (const subject of subjects) {
          if (LearnerSunjects.includes(subject)) {
            return true;
          }
        }
        return false;
      }
      // Filter teachers who teach any subject in LearnerSunjects and extract required info
      const teachersTeachingLearnerSubjects = TeachersInformation.filter((teacher) =>
        isTeachingSubject(teacher.subject)
      ).map(({ first_name, last_name,email_adsress,Contact_Details, title,teacher_profile_picture, subject }) => ({
        teacher_firtName: first_name,
        teacher_Last_Name: last_name,
         tearcher_email: email_adsress,
        Teacher_phone_Number: Contact_Details,
        Teacher_Title: title,
        Teacher_Profile_picture: teacher_profile_picture,
        subjectsTeaching: subject.filter((sub) => LearnerSunjects.includes(sub))
      }));     
      console.log(teachersTeachingLearnerSubjects);
      // console.log(TeachersInformation);
   


      Annoucefomodel.find({})
      .then((Annoces) => {

        TimetableModel.find({ Subject: { $in: LearnerSunjects }})
        .then((learnerTimeTable) => {


          MarketPlaceModel.find({ })
          .then((Items) => {
            console.log('Learner Marks:', Items);            
            const averageMarkObj = 
              { Mark: averageMark
               };           
            console.log(averageMarkObj);                   
                    // console.log('Announcements:', Annoces);
                    const Userfinalinfor = {
                      learnerTimeTable : learnerTimeTable,
                      teachersTeachingLearnerSubjects:teachersTeachingLearnerSubjects,
                      learnerInformation: learnerInformation,
                      LearnerMarks: LearnerMarks,
                      underperformingSubjects:underperformingSubjects,
                      averageMarkObj:averageMarkObj,
                      VeryBadMark:VeryBadMark,
                      distintion:distintion,
                      Annoces:Annoces,
                      Items:Items,
                    };
                  
            
                    res.status(200).send(Userfinalinfor);
                    // console.log('User authenticated:', Userfinalinfor);
                    



         
          })





       
        })


      })


      // You can work with the teacher information here
    })
    // Continue with the rest of your code or any other operations using LearnerXandY
  })
  .catch(function (err) {
    console.log('Database error:', err);
    res.sendStatus(500);
  });

});



app.get('/dashboard', (req, res) => {
 redirect('/dashboard')

});


app.get('/login', function (req, res) {

 res.redirect("/dashboard")
});






app.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      console.log('Error:', err);
      return res.sendStatus(500);
    }
    if (!user) {
      console.log('Invalid credentials');
      return res.sendStatus(401);
    }
    req.logIn(user, function (err) {
      if (err) {
        console.log('Login error:', err);
        return res.sendStatus(500);
      }

      
      UserLeanerModel.findOne({ username: req.user.username })
        .then(function (foundUser) {
          LearnerInfomodel.findOne({ email_address: req.user.username })
            .then(function (learnerInformation) {
              const Userfinalinfor = {
                learnerInformation: learnerInformation,
                foundUser: foundUser,
              };
              console.log('User authenticated:', req.user.username);
              console.log('User authenticated:', Userfinalinfor);
              // Save the username to the session
              req.session.username = req.user.username;

              res.status(200).send(Userfinalinfor);
            })
            .catch(function (err) {
              console.log('Database error:', err);
              res.sendStatus(500);
            });
        })
        .catch(function (err) {
          console.log('Database error:', err);
          res.sendStatus(500);
        });
    });
  })(req, res, next);
});













app.get('/register', function (req, res) {
  res.redirect('register/')
});




app.post("/register", function (req,res) {
  const name =  req.body.username
  console.log(name)
  UserModel.register({ username: req.body.username}, req.body.password,
    function (err, user) {
      if(err){
console.log(err)
res.redirect('/')
      } else {
        passport.authenticate('local')(req,res, function () {
    console.log("success registration")
          res.send(200)
          
        })
      }
      
    }
    
    )

  
});








  const login = '230845'
  

  
  
 
app.listen(3000, ()=> 
{console.log( 'server runing on port 3000')})