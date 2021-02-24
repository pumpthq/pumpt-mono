// var status = require('../constants/main').VACANCY_STATUS;
// var pagination = require('../helpers/pagination');
// var VacancyModel = require('../models/vacancy');
// var expander = require('../helpers/expander');
// var errors = require('../constants/errors');
// var async = require('async');
// var sanitizeHtml = require('sanitize-html');

// var VacancyService = function () {

//     var SORT_BY = '_id';
//     var SORT_ORDER = 1;
//     var LIMIT = 50;




//     function getProjection() {
//         return {
//             _id: 1,
//             title: 1,
//             industry: 1,
//             industryParent: 1,
//             salary: 1,
//             company: 1,
//             recruiter: 1,
//             experience: 1,
//             degree: 1,
//             employment: 1,
//             description: 1,
//             state: 1,
//             status: 1,
//             responsibilities: 1,
//             requirements: 1,
//             keywords: 1
//         };
//     }

//     this.create = function (body, callback) {
//         body.description = sanitizeHtml(body.description)
//         async.waterfall([
//             function (cb) {
//                 VacancyModel.create(body, cb);
//             },

//             function (vacancy, cb) {
//                 cb(null, vacancy.toObject());
//             }
//         ], callback);
//     };

//     this.fetch = function (user, query, cb) {
//         // var aggregateObj = [];
//         var sortBy = query.sortBy || SORT_BY;
//         var sortOrder = parseInt(query.sortOrder, 10) || SORT_ORDER;
//         var limit = pagination.limit(query, LIMIT);
//         var skip = pagination.skip(query, LIMIT);
//         var sortObj = {};

//         VacancyModel.find({ _company: user._company })
//             .sort(sortObj)
//             .skip(skip)
//             .limit(limit)
//             .exec(cb);
//     };

//     //@deprecate
//     this.fetchById = function (id, cb) {
//         var aggregateObj = [{ $match: { _id: id } }];

//         aggregateObj = aggregateObj.concat(expander.expandOne('recruiter', getProjection(), 'recruiters'));
//         aggregateObj = aggregateObj.concat(expander.expandOne('company', getProjection(), 'companies'));

//         VacancyModel
//             .aggregate(aggregateObj)
//             .exec(function (err, vacancies) {
//                 if (err || !vacancies[0]) {
//                     return cb(err || errors.error(404, errors.NOT_FOUND));
//                 }

//                 cb(null, vacancies[0]);
//             });
//     };

//     this.updateById = function (id, body, cb) {
//         delete body._company;
//         delete body.recruiter;
//         delete body.industry;
//         if (body.description) {
//             body.description = sanitizeHtml(body.description)
//         }
//         VacancyModel.findByIdAndUpdate(id, body, { lean: true, new: true }, cb);
//     };

//     this.delete = function (id, cb) {
//         VacancyModel
//             .findByIdAndRemove(id)
//             .lean()
//             .exec(cb);
//     };
// };

// var vacancyService = new VacancyService();

// module.exports = vacancyService;
