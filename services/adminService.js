// var logger = require('../helpers/logger')(module);
// var errors = require('../constants/errors');
// var mailer = require('../helpers/mailer');
// var UserModel = require('../models/user');
// var CandidateModel = require('../models/candidate');
// var MatchingModel = require('../models/matching');
// var VacancyModel = require('../models/vacancy');
// var constants = require('../constants/main');
// var async = require('async');

// var AdminService = function () {
//   var optionObj = { lean: true, new: true };

//   this.getCandidates = function (callback) {
//     UserModel.find({ model: 'Candidate' }, callback);
//   };

//   this.getRecruiters = function (callback) {
//     UserModel.find({ model: 'Recruiter' }, callback);
//   };

//   this.getMatches = function (callback) {
//     MatchingModel.find().populate('_vacancy', 'status').exec()
//       .then((matchings) => {
//         callback(null, matchings.filter(m => m._vacancy && m._vacancy.status === constants.VACANCY_STATUS.OPENED))
//       }).catch(callback);
//   };

//   this.approveMatch = function (id, callback) {
//     async.waterfall([
//       function (cb) {
//         MatchingModel
//           .findOne({ _id: id })
//           .lean()
//           .exec(cb);
//       },
//       function (match, cb) {
//         MatchingModel.findOneAndUpdate({ _id: id }, { $set: { isApproved: !match.isApproved } }, optionObj, cb);
//       },
//       function (match, cb) {
//         if (!match) {
//           cb(errors.error(404, errors.NOT_FOUND));
//         }

//         let brief = Object.assign({ _id: match._candidate }, match.candidate.brief)
//         if ('user' in brief) {
//           delete brief.user;
//         }

//         if (match.isApproved) {
//           mailer.onAdminApprovesMatch(match.candidate.brief.user, match, logger.errorOrInfo);

//           VacancyModel.findOneAndUpdate({ _id: match._vacancy },
//             { $push: { "candidates.briefs": brief } }, optionObj,
//             (err, vacancy) => (
//               vacancy ? cb(null, match) : cb(errors.error(404, errors.NOT_FOUND))
//             ));
//         } else {
//           VacancyModel.findOneAndUpdate({ _id: match._vacancy },
//             { $pull: { "candidates.briefs": { _id: match._candidate } } }, optionObj,
//             (err, vacancy) => (
//               vacancy ? cb(null, match) : cb(errors.error(404, errors.NOT_FOUND))
//             ));
//         }
//       },
//     ], callback);

//   }

//   // approve user registration
//   this.approve = function (id, callback) {
//     async.waterfall([
//       function (cb) {
//         UserModel
//           .findOne({ _id: id })
//           .lean()
//           .exec(cb);
//       },

//       function (user, cb) {
//         UserModel.findOneAndUpdate({ _id: id }, { $set: { isApproved: !user.isApproved } }, optionObj, cb);
//       },

//       function (user, cb) {
//         user ? cb(null, user) : cb(errors.error(404, errors.NOT_FOUND));
//       },

//       function (user, cb) {
//         if (user._candidate) {
//           mailer.onCandidateApproveRegister(user.email, logger.err);
//         } else if (user._recruiter) {
//           mailer.onRecruiterApproveRegister(user.email, logger.err);
//         }
//         cb(null, user);
//       }
//     ], callback);
//   };

//   // reject user registration
//   this.reject = function (id, callback) {
//     var updateObj = { isRejected: true };

//     async.waterfall([
//       function (cb) {
//         UserModel.findByIdAndUpdate(id, updateObj, optionObj, cb);
//       },

//       function (user, cb) {
//         user ? cb(null, user) : cb(errors.error(404, errors.NOT_FOUND));
//       },

//       function (user, cb) {
//         mailer.onRejectRegister(user.email, logger.errorOrInfo);
//         cb(null, user);
//       }
//     ], callback);
//   };
// };

// var adminService = new AdminService();

// module.exports = adminService;
