// var CandidateModel = require('../models/candidate');
// var VacancyModel = require('../models/vacancy');
// var MatchingModel = require('../models/matching');
// var logger = require('../helpers/logger')(module);
// var pagination = require('../helpers/pagination');
// var expander = require('../helpers/expander');
// var constants = require('../constants/main');
// var ROLES = require('../constants/roles');
// var errors = require('../constants/errors');
// var mailer = require('../helpers/mailer');
// var UserModel = require('../models/user');
// var filter = require('../helpers/filter');
// var uuid = require('node-uuid');
// var async = require('async');

// var MatchingService = require('./matchingService')

// var CandidateService = function () {
//     var self = this;
//     var SORT_BY = '_id';
//     var SORT_ORDER = 1;
//     var LIMIT = 10;

//     function getProjection() {
//         return {
//             _id                    : 1,
//             user                   : 1,
//             firstName              : 1,
//             lastName               : 1,
//             employments            : 1,
//             companySize            : 1,
//             interestWorkingArea    : 1,
//             recentJob              : 1,
//             recentAnnualIncome     : 1,
//             recentWorkingAreas     : 1,
//             preferredCompanySize	 : 1,
//             recentAreaExperience   : 1,
// 						values								 : 1,
//             avatar                 : 1,
//             rejectedVacancies      : 1,
//             favoriteVacancies      : 1,
//             skills                 : 1,
//             workingExperience      : 1,
//             education              : 1,
//             location               : 1,
//             socialMedia            : 1,
//             highestDegree          : 1
//         };
//     }

//     function getUserProjection() {
//         return {
//             _id         : 1,
//             email       : 1,
//             model       : 1,
//             isApproved  : 1,
//             isRejected  : 1,
//             isConfirmed : 1,
//             visitedAt   : 1,
//             registerAt  : 1,
//             linkedInData: 1
//         };
//     }

//     this.create = function (body, callback) {
//         var candidate = body;
//         var user = body.user;

//         // create ids for each new doc
//         candidate._id = uuid.v4();
//         user._id = uuid.v4();

//         // assign bidirectional references
//         candidate.user = user._id;
//         user._candidate = candidate._id

//         // delete secure fields
//         user.isApproved ? delete user.isApproved : '';
//         user.isRejected ? delete user.isRejected : '';
//         user.isConfirmed ? delete user.isConfirmed : '';
//         user.registerAt ? delete user.registerAt : '';
//         user.visitedAt = new Date();
//         user.model = constants.USER_MODEL.CANDIDATE;
//         user.role = ROLES.CANDIDATE
//         async.parallel({
//             user: function (cb) {
//                 UserModel.create(user, cb);
//             },

//             candidate: function (cb) {
//                 CandidateModel.create(body, cb);
//             }

//         }, function (err, data) {
//             var createdCandidate;

//             if (err) {
//                 return async.parallel({
//                     user: function (cb) {
//                         UserModel.findByIdAndRemove(user._id, cb);
//                     },

//                     candidate: function (cb) {
//                         CandidateModel.findByIdAndRemove(body._id, cb);
//                     }

//                 }, function () {
//                     callback(errors.mongo(400, err), null);
//                 });
//             }

//             createdCandidate = data.candidate.toObject();
//             createdCandidate.user = data.user.toObject();
//             delete createdCandidate.user.password;

//             callback(null, createdCandidate);
// 						const name = candidate.firstName + " " + candidate.lastName;

//             mailer.onRegister(user, name, user.email, user.confirmEmailToken, logger.errorOrInfo);
//         });
//     };

//     this.fetch = function (query, callback) {
//         var aggregateObj = [{$match: filter(query, 'user')}];
//         var sortBy = query.sortBy || SORT_BY;
//         var sortOrder = parseInt(query.sortOrder, 10) || SORT_ORDER;
//         var limit = pagination.limit(query, LIMIT);
//         var skip = pagination.skip(query, LIMIT);
//         var sortObj = {};

//         sortObj[sortBy] = sortOrder;

//         if (query.expand) {
//             aggregateObj = aggregateObj.concat(expander.expandOneWithChildProjection(
//                 'user', getProjection(), getUserProjection(), 'users'));
//             aggregateObj = aggregateObj.concat(expander.expandMany('rejectedVacancies', getProjection(), 'vacancies'));
//             aggregateObj = aggregateObj.concat(expander.expandMany('favoriteVacancies', getProjection(), 'vacancies'));
//         } else {
//             aggregateObj = aggregateObj.concat({$project: getProjection()});
//         }

//         CandidateModel
//             .aggregate(aggregateObj)
//             .sort(sortObj)
//             .skip(skip)
//             .limit(limit)
//             .exec(callback);
//     };

//     this.fetchById = function (id, callback) {
//         var aggregateObj = [{$match: {_id: id}}];

//         aggregateObj = aggregateObj.concat(expander.expandOneWithChildProjection(
//             'user', getProjection(), getUserProjection(), 'users'));
//         aggregateObj = aggregateObj.concat(expander.expandMany('rejectedVacancies', getProjection(), 'vacancies'));
//         aggregateObj = aggregateObj.concat(expander.expandMany('favoriteVacancies', getProjection(), 'vacancies'));

//         async.waterfall([
//             function (cb) {
//                 CandidateModel
//                     .aggregate(aggregateObj)
//                     .exec(cb);
//             },

//             function (candidates, cb) {
//                 cb(null, candidates[0]);
//             }
//         ], callback);
//     };

//     this.fetchByUserId = function (id, callback) {
//             CandidateModel.findOne({user:id})
//             .exec(callback);
//     };


//     this.updateById = function (id, body, callback) {
//         delete body.user;
//         CandidateModel.findByIdAndUpdate(id, body, {lean: true, new: true}, function (err, candidate) {
//             callback(errors.mongo(400, err), candidate);
//         });
//     };

//     this.delete = function (id, callback) {
//         async.waterfall([
//             function (cb) {
//                 CandidateModel
//                     .findByIdAndRemove(id)
//                     .lean()
//                     .exec(cb);
//             },

//             function (candidate, cb) {
//                 candidate ? cb(null, candidate) : cb(errors.error(404, errors.NOT_FOUND));
//             },

//             function (candidate, cb) {
//                 UserModel
//                     .findByIdAndRemove(candidate.user)
//                     .lean()
//                     .exec(cb);
//             }
//         ], callback);
//     };

//   this.deactivate = function (id, callback) {
//     async.waterfall([
//       function (cb) {
//         CandidateModel
//           .findOneAndUpdate({_id: id}, {active: false}, {lean: true})
//           .populate('user')
//           .exec(cb)
//       },
//       function (candidate, cb) {
//         candidate ? cb(null, candidate) : cb(errors.error(404, errors.NOT_FOUND));
//       },
//       function (candidate, cb) {
//         mailer.onDeactivate(candidate.user.email, logger.errorOrInfo)
//         cb()
//       }
//     ], callback);
//   }

//   this.activate = function (id, callback) {
//     async.waterfall([
//       function (cb) {
//         CandidateModel
//           .findOneAndUpdate({_id: id}, {active: true}, {lean: true})
//           .populate('user')
//           .exec(cb)
//       },
//       function (candidate, cb) {
//         candidate ? cb(null, candidate) : cb(errors.error(404, errors.NOT_FOUND));
//       },
//      function (candidate, cb) {
//         mailer.onReactivate(candidate.user.email, logger.errorOrInfo)
//         cb()
//       }
//     ], callback);
//   }

//     // TODO: refactor name to calcFillProgress, remove save to db
//     this.calcOccupancy = function (candidate, callback) {
//         var CANDIDATE_FILL_STEP = constants.CANDIDATE_FILL_STEP;
//         var steps = candidate.fillSteps = [];
//         var user = candidate.user;

//         candidate.avatar !== constants.DEFAULT_USER_AVATAR ? steps.push(CANDIDATE_FILL_STEP.PROFILE_PHOTO_STEP) : '';
//         candidate.workingExperience.length ? steps.push(CANDIDATE_FILL_STEP.EXPERIENCE_STEP) : '';
//         candidate.education && candidate.education.schoolName ? steps.push(CANDIDATE_FILL_STEP.EDUCATION_STEP) : '';
//         candidate.location ? steps.push(CANDIDATE_FILL_STEP.LOCATION_STEP) : '';
//         candidate.socialMedia && candidate.socialMedia.linkedInUrl ? steps.push(CANDIDATE_FILL_STEP.SOCIAL_MEDIA_STEP) : '';
//         candidate.skills.length ? steps.push(CANDIDATE_FILL_STEP.SKILLS_STEP) : '';

//         candidate.fillProgress = Math.ceil(100 / 12 * (5 + steps.length));
//         candidate.isFilled = candidate.fillProgress === 100;

//         async.waterfall([
//             function (cb) {
//                 self.updateById(candidate._id, candidate, cb);
//             },

//             function (savedCandidate, cb) {
//                 candidate.user = user;
//                 cb(null, candidate);
//             }
//         ], callback);
//     };

// };

// var candidateService = new CandidateService();

// module.exports = candidateService;
