// var env = process.env;
// var Linkedin = require('node-linkedin')(env.LINKEDIN_CLIENT_ID, env.LINKEDIN_CLIENT_SECRET_KEY);
// var imageService = require('../services/imageService');
// var matching = require('../constants/matching');
// var UserModel = require('../models/user');
// var async = require('async');

// var LinkedInService = function () {

//     this.getInterests = function (pictureUrls) {
//         var values = pictureUrls.values;

//         return Array.isArray(values) ?
//             values.map(function (url) {
//                 return {
//                     mediaId: imageService.uploadFromUrl(url)
//                 };
//             }) : [];
//     };

//     this.getExperience = function (positionsValue) {
//         var startDate = positionsValue.startDate || {};
//         var endDate = positionsValue.endDate || {};
//         var experiences = matching.EXPERIENCES;
//         var startYear = startDate.year;
//         var len = experiences.length;
//         var endYear = endDate.year;
//         var nExperience;
//         var i;

//         if (!startYear) {
//             return matching.EXPERIENCE.gt0lt2;
//         }

//         nExperience = endYear ? endYear - startYear : new Date().getFullYear() - startYear;

//         for (i = 0; i < len; i++) {
//             nExperience = parseInt(experiences[i], 10) < nExperience ? experiences[i] : '';
//         }

//         return {
//             value: nExperience || matching.EXPERIENCE.gt0lt2
//         };
//     };

//     this.getLocation = function (fullCity) {
//         var i;

//         if (!fullCity) {
//             return {
//                 location     : location,
//                 canRelocate: false
//             };
//         }


//         return {
// 					location: location,
//             canRelocate: false
//         };
//     };

//     this.parse = function (userData) {

//         // position main option
//         var positions = userData.positions || {};
//         var positionsValues = positions.values || [];
//         var positionsValue = positionsValues[0] || {};
//         var company = positionsValue.company ? positionsValue.company.name : '';

//         // position date option
//         var startDate = positionsValue.startDate || {};
//         var endDate = positionsValue.endDate || {};
//         var startWorkingAt = startDate.year ? '1-' + startDate.month + '-' + startDate.year : null;
//         var endWorkingAt = endDate.year ? '1-' + endDate.month + '-' + endDate.year : null;

//         // location option
//         var location = userData.location || {};

//         return {
//             summary: {
//                 firstName: userData.firstName,
//                 lastName : userData.lastName,
//                 email    : userData.emailAddress,

//                 industry: {
//                     value: userData.industry
//                 },

//                 fieldOfExpertise: {
//                     value: userData.industry
//                 },

//                 jobTitle: {
//                     value: positionsValue.title
//                 },

//                 income: {
//                     value: null
//                 },

//                 experience: this.getExperience(positionsValue)
//             },

//             experience: [{
//                 companyName: company,
//                 title      : positionsValue.title,

//                 location	 : location,

//                 fromDate   : startWorkingAt,
//                 toDate     : endWorkingAt,
//                 workHere   : positionsValue.isCurrent,
//                 description: positionsValue.summary
//             }],

//             education: [],


//             socialMedia: {
//                 linkedInProfileUrl: userData.publicProfileUrl
//             },

//             interests: this.getInterests(userData.pictureUrls),

//             profilePhoto: userData.pictureUrl ? imageService.uploadFromUrl(userData.pictureUrl) : null,

//             skills: []
//         };
//     };

//     this.fetch = function (res, reqQuery, userId, callback) {
//         var code = reqQuery.code; // The OAuth 2.0 authorization code
//         var accessToken;
//         var linkedin;

//         async.waterfall([

//             function (cb) {
//                 Linkedin.auth.getAccessToken(res, code, cb);
//             },

//             function (result, cb) {
//                 accessToken = result.access_token;
//                 linkedin = Linkedin.init(accessToken);

//                 linkedin.people.me(cb);
//             },

//             function (userData, cb) {
//                 cb(null, this.parse(userData));
//             }.bind(this),

//             function (parsedData, cb) {
//                 UserModel.findByIdAndUpdate(userId, {linkedInData: parsedData}, cb);
//             }

//         ], callback);
//     };

//     this.authorizeUser = function (req, res, next) {
//         var scope = ['r_emailaddress'];

//         // TIP refer header show us from where user came to us, for example it http://localhost:3000/
//         // and then spa should pass redirectTo query in order to be redirected after sign with linkedin, it /candidate/application
//         // in conclusion it will be complete redirect url like http://localhost:3000/#/candidate/application with hash symbol between.

//         console.log(req.headers);
//         console.log(req.headers.referer);

//         var redirectToUrl = req.headers.referer + '#' + req.query.redirectTo;
//         req.session.redirectTo = redirectToUrl;
//         req.headers.referer = req.headers.host;

//         Linkedin.setCallback(req.protocol + '://' + req.headers.host + '/linkedin/oauth/callback');
//         Linkedin.auth.authorize(res, scope);
//     };
// };

// var linkedInService = new LinkedInService();

// module.exports = linkedInService;
