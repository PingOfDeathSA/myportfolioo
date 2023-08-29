// const express = require('express');
// const passport = require('passport');
// const session = require('express-session');


// const [UserLeanerModel,LearnerInfomodel]  = require('../userLearnerModel');

// const router = express.Router();



// router.get('/', function (req, res) {
//     // Access the username from the session
//     const username2 = req.session.username;
  
//     // Use the username as needed
//     console.log('session:', username2);
  
//     // Rest of your code for the GET route
//     // ...
//   });


// router.post('/', function (req, res, next) {

//   passport.authenticate('local', function (err, user, info) {
//     if (err) {
//       console.log('Error:', err);
//       return res.sendStatus(500);
//     }
//     if (!user) {
//       console.log('Invalid credentials');
//       return res.sendStatus(401);
//     }
//     req.logIn(user, function (err) {
//       if (err) {
//         console.log('Login error:', err);
//         return res.sendStatus(500);
//       }

//       console.log('User authenticated:', req.user.username);
//       UserLeanerModel.findOne({ username: req.user.username })
//         .then(function (foundUser) {

//             LearnerInfomodel.findOne({ email_address: req.user.username })
//             .then(function (learnerInformation) {

//                 const Userfinalinfor = {
//                     learnerInformation: learnerInformation,
//                     foundUser: foundUser,
                   
              
//                   }
                 


//             //   console.log(learnerInformation);
//             //   console.log(foundUser);
//             req.session.username = req.user.username;
//             const username2 = req.session.username;
//             console.log('session:', username2);
//               res.status(200).send(Userfinalinfor);
//             }) 
//         })
//         // .catch(function (err) {
//         //   console.log('Database error:', err);
//         //   res.sendStatus(500);
//         // });
//     });
//   })(req, res, next);
// });















// // module.exports = router;
