// const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');

// const userLearnerSchema = new mongoose.Schema({
//   email: String,
//   password: String,
//   LearnerNumber: String || Number,
// });
// const learnerInfoSchema = new mongoose.Schema({
//   StudentNumber: {
//     type: String,
//     required: true
//   },
//   GradeID: {
//     type: String,
//     required: true
//   },
//   subject: {
//     type: [String],
//     required: true
//   },
//   title: {
//     type: String,
//     required: true
//   },
//   age: {
//     type: Number,
//     required: true
//   },
//   Gender: {
//     type: String,
//     required: true
//   },
//   home_address: {
//     type: String || Number,
//     required: true
//   },
//   Gandian_First_Name: {
//     type: String,
//     required: true
//   },
//   Gdian_Lat_Name: {
//     type: String,
//     required: true
//   },
//   Gadian_title: {
//     type: String || Number,
//     required: true
//   },
//   Gadian_email: {
//     type: String,
//     required: true
//   },
//   Gadian_Home_address: {
//     type: String || Number,
//     required: true
//   },
//   Gadiane_Contacts: {
//     type: Number,
//     required: true
//   },
//   OnlineTest: [{
//     Subject_Test: {
//       type: String,
//       required: true
//     },
//     Test_Name: {
//       type: Number,
//       required: true
//     },
//     Mark: {
//       type: Number,
//       required: true
//     },
//     Date: {
//       type: Date,
//       required: true,
//       default: Date.now
//     }
//   }],
//   first_name: {
//     type: String,
//     required: true
//   },
//   last_name: {
//     type: String,
//     required: true
//   },
//   teacher_profile_picture: {
//     type: String,
//     required: true
//   },
//   email_address: {
//     type: String || Number,
//     required: true
//   }
// });

// userLearnerSchema.plugin(passportLocalMongoose);

// const UserLeanerModel = mongoose.model('UserLearner', userLearnerSchema);
// const LearnerInfomodel = mongoose.model("Leaner_collec", learnerInfoSchema);

// module.exports = [UserLeanerModel,LearnerInfomodel];
