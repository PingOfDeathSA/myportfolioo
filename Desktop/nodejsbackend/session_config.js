// const session = require('express-session');
// const MongoStore = require('connect-mongo');
// const passport = require('passport');
// const [UserLeanerModel,LearnerInfomodel]= require('./userLearnerModel')
// // Function to configure session and passport middleware
// const configureSession = (app, mongoose) => {
//   app.use(
//     session({
//       secret: 'THeTerminatorIsHere',
//       resave: false,
//       saveUninitialized: false,
//       store: MongoStore.create({
//         mongoUrl: 'mongodb+srv://PingOfDeathSA:Ronald438@cluster0.kqlfkdc.mongodb.net/FinalschoolDB',
//         collectionName: 'sessions',
//         ttl: 60 * 60,
//       }),
//     })
//   );

//   // Initialize passport middleware if required
//   // app.use(passport.initialize());
//   // app.use(passport.session());

//   mongoose.connect('mongodb+srv://PingOfDeathSA:Ronald438@cluster0.kqlfkdc.mongodb.net/FinalschoolDB');
// };

// module.exports = configureSession;

