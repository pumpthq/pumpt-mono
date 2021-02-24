// var env = require('../config'); // needed for tests
// var AWS = require('aws-sdk');
// var s3bucket = new AWS.S3({params: {Bucket: env.BUCKET_NAME}});
// var logger = require('../helpers/logger')(module);
// var Candidate = require('../models/candidate');
// var Recruiter = require('../models/recruiter');
// var constants = require('../constants/main');
// var errors = require('../constants/errors');
// var Company = require('../models/company');
// var uuid = require('node-uuid');
// var async = require('async');
// var fs = require('fs')
//   , gm = require('gm').subClass({imageMagick: true});

// var ImageUploadService = function () {

//     function validatePart(part) {
//         if (!part || !part.headers || !part.headers['content-type']) return;
//         return part.headers['content-type'].indexOf('image') !== -1;
//     }

//     this.uploadFromUrl = function (url) {
//         var key = uuid.v4();
//         var params = {Key: key, Body: url};
//         s3bucket.upload(params, logger.errorOrInfo);

//         return key;
//     };

//     this.upload = function (part, callback) {
//         var dimensions = [{width: 200, postfix: '-small'}, {width: 100, postfix: '-mini'}];
//         var params = {Key: uuid.v4(), Body: part};
//         var rs;

//         if (!validatePart(part)) {
//             return callback(errors.error(400, errors.BAD_REQUEST));
//         }

//         s3bucket.upload(params, function (err, response) {
//             callback(err, response);

//             rs = s3bucket.getObject({Key: params.Key}).createReadStream();

//             async.each(dimensions, function (dimension) {
//                 gm(rs)
//                     .resize(dimension.width)
//                     .stream(function (err, stdout) {

//                         if(err) return logger.error(err)
//                         if(!stdout) return logger.error(new Error("Could not access stdout to read resized image data."))

//                         var buf = new Buffer('');

//                         stdout.on('data', function (data) {
// 													debugger;
//                             buf = Buffer.concat([buf, data]);
//                         });

//                         stdout.on('end', function () {
//                             var data = {
//                                 Key : params.Key + dimension.postfix,
//                                 Body: buf
//                             };

//                             s3bucket.putObject(data, logger.errorOrInfo);
//                         });
//                     });
//             });
//         });
//     };

//     this.read = function (params, cb) {
//         params.Bucket = env.BUCKET_NAME;
//         s3bucket.getObject(params, cb);
//     };

//     // will be used when deletes some instance with related images
//     this.delete = function (key, cb) {
//         var params = {
//             Key   : key,
//             Bucket: env.BUCKET_NAME
//         };

//         s3bucket.deleteObject(params, cb);
//     };

//     this.getMediaInfo = function (user, callback) {
//         var modelName = user.model;
//         var result = [];

//         if (modelName === constants.USER_MODEL.CANDIDATE) {
//             async.waterfall([
//                 function (cb) {
//                     Candidate.findOne({user: user._id}, {avatar: 1, interests: 1}, cb);
//                 },

//                 // candidate avatar media info
//                 function (candidate, cb) {
//                     result.push({
//                         id         : candidate.avatar,
//                         user       : user._id,
//                         type       : 'avatar',
//                         description: null
//                     });

//                     cb(null, candidate);
//                 },

//                 // candidate interests media info
//                 function (candidate, cb) {
//                     async.each(candidate.interests, function (interest, eachCb) {
//                         if (interest.image) {
//                             result.push({
//                                 id         : interest.image,
//                                 user       : user._id,
//                                 type       : 'interests',
//                                 description: interest.description || null
//                             });
//                         }

//                         eachCb();
//                     }, cb);
//                 },

//                 function (cb) {
//                     cb(null, result);
//                 }
//             ], callback);
//         }

//         if (modelName === constants.USER_MODEL.RECRUITER) {
//             async.waterfall([
//                 function (cb) {
//                     Recruiter.findOne({user: user._id}, {avatar: 1, company: 1}, cb);
//                 },

//                 // recruiter avatar media info
//                 function (recruiter, cb) {
//                     result.push({
//                         id         : recruiter.avatar,
//                         user       : user._id,
//                         type       : 'avatar',
//                         description: null
//                     });

//                     Company.findById(recruiter.company, {logo: 1, images: 1}, cb);
//                 },

//                 // company logo media info
//                 function (company, cb) {
//                     result.push({
//                         id         : company.logo,
//                         user       : user._id,
//                         type       : 'logo',
//                         description: null
//                     });

//                     cb(null, company.images);
//                 },

//                 // company images media info
//                 function (images, cb) {
//                     async.each(images, function (image, eachCb) {
//                         result.push({
//                             id         : image,
//                             user       : user._id,
//                             type       : 'images',
//                             description: null
//                         });

//                         eachCb();
//                     }, cb);
//                 },

//                 function (cb) {
//                     cb(null, result);
//                 }
//             ], callback);
//         }
//     };

// };

// var imageUploadService = new ImageUploadService();

// module.exports = imageUploadService;
