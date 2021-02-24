// var logger = require('../helpers/logger')(module);
// var generator = require('../helpers/generator');
// var crypter = require('../helpers/crypter');
// var errors = require('../constants/errors');
// var mailer = require('../helpers/mailer');
// var User = require('../models/user');
// var async = require('async');

// var PasswordService = function () {
//     var optionObj = { lean: true, new: true };

//     this.changePassword = function (id, oldPass, newPass, callback) {
//         var searchObj = { _id: id, password: crypter(oldPass) };
//         var updateObj = { password: crypter(newPass) };

//         User.findOneAndUpdate(searchObj, updateObj, optionObj, callback);
//     };

//     this.restorePassword = function (email, callback) {
//         var searchObj = { email: email };
//         var tokenData = generator.generateToken();
//         var updateObj = { restorePassToken: tokenData };

//         async.waterfall([
//             function (cb) {
//                 User.findOneAndUpdate(searchObj, updateObj, optionObj, cb);
//             },

//             function (user, cb) {
//                 user ? cb(null, user) : cb(errors.error(400, errors.EMAIL_NOT_REGISTERED));
//             },

//             function (user, cb) {
//                 cb(null, { ok: 1 });
//                 mailer.onResetPassword(email, tokenData, logger.errorOrInfo);
//             }
//         ], callback);
//     };

//     this.resetPassword = function (token, callback) {
//         var searchObj = { restorePassToken: token };
//         var newPassword = generator.generateToken(6);
//         var updateObj = { password: crypter(newPassword), restorePassToken: null };

//         async.waterfall([
//             function (cb) {
//                 User.findOneAndUpdate(searchObj, updateObj, optionObj, cb);
//             },

//             function (user, cb) {
//                 user ? cb(null, user) : cb(errors.error(404, errors.NOT_FOUND));
//             },

//             function (user, cb) {
//                 cb(null, { ok: 1 });
//                 mailer.onNewPassword(user.email, newPassword, logger.errorOrInfo);
//             }
//         ], callback);
//     };

// };

// var passwordService = new PasswordService();

// module.exports = passwordService;
