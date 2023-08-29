const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
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
mongoose.connect("mongodb+srv://PingOfDeathSA:Ronald438@cluster0.kqlfkdc.mongodb.net/eye_detection_db");


// User Schema
const userschema = new mongoose.Schema({
  email: String,
  password: String,
});


const fatigue_detectionschema = new mongoose.Schema({
  operator_id: {
    type: String|| Number,
    required: true
  },
  timestamp: {
    type: String|| Number,
    required: true
  },
  left_eye: {
    type: String|| Boolean,
    required: true
  },
  right_eye: {
    type: String|| Boolean,
    required: true
  },
  face: {
    type: String,
    required: true
  }
  });

 

  userschema.plugin(passportLocalMongoose);
const fatigue_detectionsomodel = mongoose.model('fatigue_detection', fatigue_detectionschema, 'fatigue_detection');
const UserModel = mongoose.model("User", userschema);


passport.use(UserModel.createStrategy());
// Setting up a new instance of LocalStrategy, using the 'email' field as the username field
passport.use(new LocalStrategy({ username: 'email' }, UserModel.authenticate()));
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());


fatigue_detectionsomodel.findOne({})
  .then((fatigueinfo) => {
    console.log('Fatigue:', fatigueinfo);
  })
  .catch((err) => {
    console.log(err);
  });



app.get('/announcement', (req, res) => {
  fatigue_detectionsomodel.find({})
    .then((fatigueinfor) => {
      res.status(200).json({ Annoces: Annoces });
      console.log('Announcements:', Annoces);
    })
    .catch((err) => {
      console.log(err);
    });
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