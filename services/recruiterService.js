// var RecruiterModel = require('../models/recruiter');
// var pagination = require('../helpers/pagination');
// var logger = require('../helpers/logger')(module);
// var CompanyModel = require('../models/company');
// var expander = require('../helpers/expander');
// var constants = require('../constants/main');
// var ROLES = require('../constants/roles');
// var mailer = require('../helpers/mailer');
// var errors = require('../constants/errors');
// var UserModel = require('../models/user');
// var filter = require('../helpers/filter');
// var uuid = require('node-uuid');
// var async = require('async');

// var RecruiterService = function () {
//     var SORT_ORDER = 1;
//     var SORT_BY = '_id';
//     var LIMIT = 10;

//     function getProjection() {
//         return {
//             _id                : 1,
//             company            : 1,
//             user               : 1,
//             fullName           : 1,
//             avatar             : 1,
//             position           : 1,
//             favoritesCandidates: 1
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
//         var recruiter = body;
//         var company = body.company;
//         var user = body.user;

//         // create ids for each new doc
//         user._id = uuid.v4();
//         company._id = uuid.v4();
//         recruiter._id = uuid.v4();

//         // assign bidirectional references
//         recruiter.company = company._id;
//         recruiter.user = user._id;
//         company.recruiter = recruiter._id;
//         user._company = company._id;
//         user._recruiter = recruiter._id;

//         user.model = constants.USER_MODEL.RECRUITER;
//         user.role = ROLES.RECRUITER

//         // delete secure fields
//         user.isConfirmed ? delete user.isConfirmed : '';
//         user.isApproved ? delete user.isApproved : '';
//         user.isRejected ? delete user.isRejected : '';
//         user.registerAt ? delete user.registerAt : '';
//         user.visitedAt = new Date();
//         company.registerAt ? delete company.registerAt : '';

//         async.parallel({
//             user: function (cb) {
//                 UserModel.create(user, cb);
//             },

//             recruiter: function (cb) {
//                 RecruiterModel.create(recruiter, cb);
//             },

//             company: function (cb) {
//                 CompanyModel.create(company, cb);
//             }

//         }, function (err, data) {
//             var createdRecruiter;

//             if (err) {
//                 return async.parallel({
//                     user: function (cb) {
//                         UserModel.findByIdAndRemove(user._id, cb);
//                     },

//                     recruiter: function (cb) {
//                         RecruiterModel.findByIdAndRemove(recruiter._id, cb);
//                     },

//                     company: function (cb) {
//                         CompanyModel.findByIdAndRemove(company._id, cb);
//                     }

//                 }, function () {
//                     callback(errors.mongo(400, err));
//                 });
//             }

//             createdRecruiter = data.recruiter.toObject();
//             createdRecruiter.user = data.user.toObject();
//             createdRecruiter.company = data.company.toObject();
//             delete createdRecruiter.user.password;

//             callback(null, createdRecruiter);
// 						const name = recruiter.fullName;

//             mailer.onRegister(user, name, user.email, user.confirmEmailToken, logger.errorOrInfo);
//         });
//     };


//     this.fetch = function (query, callback) {
//         var aggregateObj = [{$match: filter(query, 'user', 'company', 'position')}];
//         var sortBy = query.sortBy || SORT_BY;
//         var sortOrder = parseInt(query.sortOrder, 10) || SORT_ORDER;
//         var limit = pagination.limit(query, LIMIT);
//         var skip = pagination.skip(query, LIMIT);
//         var sortObj = {};

//         sortObj[sortBy] = sortOrder;

//         if (query.expand) {
//             aggregateObj = aggregateObj.concat(
//                 expander.expandOneWithChildProjection('user', getProjection(), getUserProjection(), 'users'));
//             aggregateObj = aggregateObj.concat(expander.expandOne('company', getProjection(), 'companies'));
//             aggregateObj = aggregateObj.concat(expander.expandMany('blacklistCandidates', getProjection(), 'candidates'));
//             aggregateObj = aggregateObj.concat(expander.expandMany('favoritesCandidates', getProjection(), 'candidates'));
//         } else {
//             aggregateObj = aggregateObj.concat({$project: getProjection()});
//         }

//         RecruiterModel
//             .aggregate(aggregateObj)
//             .sort(sortObj)
//             .skip(skip)
//             .limit(limit)
//             .exec(callback);
//     };

//     this.fetchById = function (id, callback) {
//         var aggregateObj = [{$match: {_id: id}}];

//         aggregateObj = aggregateObj.concat(
//             expander.expandOneWithChildProjection('user', getProjection(), getUserProjection(), 'users'));
//         aggregateObj = aggregateObj.concat(expander.expandOne('company', getProjection(), 'companies'));
//         aggregateObj = aggregateObj.concat(expander.expandMany('blacklistCandidates', getProjection(), 'candidates'));
//         aggregateObj = aggregateObj.concat(expander.expandMany('favoritesCandidates', getProjection(), 'candidates'));

//         async.waterfall([
//             function (cb) {
//                 RecruiterModel
//                     .aggregate(aggregateObj)
//                     .exec(cb);
//             },

//             function (recruiters, cb) {
//                 cb(null, recruiters[0]);
//             }
//         ], callback);
//     };


//     this.updateById = function (id, body, callback) {

//         // security filter
//         delete body.company;
//         delete body.user;

//         RecruiterModel.findByIdAndUpdate(id, body, {lean: true, new: true}, function (err, recruiter) {
//             callback(errors.mongo(400, err), recruiter);
//         });
//     };

//     this.delete = function (id, callback) {
//         async.waterfall([
//             function (cb) {
//                 RecruiterModel
//                     .findByIdAndRemove(id)
//                     .lean()
//                     .exec(cb);
//             },

//             function (recruiter, cb) {
//                 !recruiter ? callback(errors.error(404, errors.NOT_FOUND)) : cb(null, recruiter);
//             },

//             function (recruiter, cb) {
//                 async.parallel({
//                     user: function (parallelCb) {
//                         UserModel
//                             .findByIdAndRemove(recruiter.user)
//                             .lean()
//                             .exec(parallelCb);
//                     },

//                     company: function (parallelCb) {
//                         CompanyModel
//                             .findByIdAndRemove(recruiter.company)
//                             .lean()
//                             .exec(parallelCb);
//                     }
//                 }, cb);
//             }
//         ], callback);
//     };
// };

// var recruiterService = new RecruiterService();

// module.exports = recruiterService;
