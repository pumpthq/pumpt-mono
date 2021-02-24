// var RecruiterModel = require('../models/recruiter');
// var pagination = require('../helpers/pagination');
// var CompanyModel = require('../models/company');
// var VacancyModel = require('../models/vacancy');
// var expander = require('../helpers/expander');
// var constants = require('../constants/main');
// var errors = require('../constants/errors');
// var filter = require('../helpers/filter');
// var async = require('async');

// var CompanyService = function () {
//     var self = this;
//     var SORT_BY = 'registerAt';
//     var SORT_ORDER = 1;
//     var LIMIT = 10;

//     function getProjection() {
//         return {
//             _id                 : 1,
//             name                : 1,
//             foundDate           : 1,
//             workingIndustry     : 1,
//             employeesAmount     : 1,
//             recruiter           : 1,
//             locationHeadquarters: 1,
//             socialMedia         : 1,
//             locationOffices     : 1,
//             logo                : 1,
//             images              : 1,
//             description         : 1,
//             quoteOrMotto        : 1,
//             registerAt          : 1,
//             fillSteps           : 1,
//             fillProgress        : 1,
//             isFilled            : 1
//         };
//     }

//     this.create = function (company, cb) {
//         CompanyModel.create(company, function (err, createdCompany) {
//             err ? cb(errors.mongo(400, err)) : cb(null, createdCompany.toObject());
//         });
//     };

//     this.fetch = function (query, cb) {
//         var aggregateObj = [{$match: filter(query, 'name', 'workingIndustry', 'recruiter')}];
//         var sortBy = query.sortBy || SORT_BY;
//         var sortOrder = parseInt(query.sortOrder, 10) || SORT_ORDER;
//         var limit = pagination.limit(query, LIMIT);
//         var skip = pagination.skip(query, LIMIT);
//         var sortObj = {};

//         sortObj[sortBy] = sortOrder;

//         if (query.expand) {
//             aggregateObj = aggregateObj.concat(expander.expandOne('recruiter', getProjection(), 'recruiters'));
//         } else {
//             aggregateObj = aggregateObj.concat({$project: getProjection()});
//         }

//         CompanyModel
//             .aggregate(aggregateObj)
//             .sort(sortObj)
//             .skip(skip)
//             .limit(limit)
//             .exec(cb);
//     };

//     this.fetchById = function (id, callback) {
//         var aggregateObj = [{$match: {_id: id}}];
//         var company;

//         aggregateObj = aggregateObj.concat(expander.expandOne('recruiter', getProjection(), 'recruiters'));

//         CompanyModel
//             .aggregate(aggregateObj)
//             .exec(function (err, companies) {
//                 if (err || !companies.length) {
//                     return callback(err || errors.error(404, errors.NOT_FOUND));
//                 }

//                 company = companies[0];
//                 callback(null, company);
//             });
//     };

//     this.fetchByCompanyName = function (companyName, callback) {
//         CompanyModel
//             .findOne({name: companyName})
//             .lean()
//             .exec(callback);
//     };

//     this.updateById = function (id, body, cb) {
//         delete body.recruiter;
//         delete body.registerAt;
//         CompanyModel.findByIdAndUpdate(id, body, {lean: true, new: true}, function (err, company) {
//             cb(errors.mongo(400, err), company);
//         });
//     };

//     this.delete = function (id, cb) {
//         CompanyModel
//             .findByIdAndRemove(id)
//             .lean()
//             .exec(cb);
//     };

//     this.calcOccupancy = function (company, callback) {
//         var COMPANY_FILL_STEP = constants.COMPANY_FILL_STEP;
//         var steps = company.fillSteps = [];
//         var registerAt = company.registerAt;
//         var recruiter = company.recruiter;

//         async.waterfall([
//             function (cb) {
//                 company.recruiter._id ? cb(null, company.recruiter) : RecruiterModel
//                     .findById(company.recruiter)
//                     .lean()
//                     .exec(cb);
//             },

//             function (recr, cb) {
//                 steps.push(COMPANY_FILL_STEP.SOCIAL_MEDIA_STEP);
//                 recr.avatar !== constants.DEFAULT_USER_AVATAR ? steps.push(COMPANY_FILL_STEP.PROFILE_PHOTO_STEP) : '';
//                 company.locationOffices && company.locationOffices.length ? steps.push(COMPANY_FILL_STEP.LOCATION_STEP) : '';
//                 company.description ? steps.push(COMPANY_FILL_STEP.DESCRIPTION_STEP) : '';
//                 company.quoteOrMotto ? steps.push(COMPANY_FILL_STEP.QUOTE_OR_MOTTO_STEP) : '';
//                 company.logo !== constants.DEFAULT_COMPANY_LOGO ? steps.push(COMPANY_FILL_STEP.PHOTO_STEP) : '';

//                 company.fillProgress = Math.ceil(100 / 12 * (6 + steps.length));
//                 company.isFilled = company.fillProgress === 100;

//                 self.updateById(company._id, company, cb);
//             },

//             function (savedCompany, cb) {
//                 company.recruiter = recruiter;
//                 company.registerAt = registerAt;
//                 cb(null, company);
//             }
//         ], callback);
//     };
// };

// var companyService = new CompanyService();

// module.exports = companyService;
