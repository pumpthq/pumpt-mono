// var logger = require('../helpers/logger')(module);
// var errors = require('../constants/errors');
// var UserModel = require('../models/user');

// var UserService = function () {

//     this.updateById = function (id, body, cb) {
//         UserModel.findByIdAndUpdate(id, {email: body.email, visitedAt: new Date()}, {new: true, lean: true}, cb);
//     };

//     this.checkEmail = function (email, callback) {
//         UserModel
//             .findOne({email: email}, {email: 1})
//             .lean()
//             .exec(callback);
//     };

//     this.resendTokenToEmail = function (email, callback) {
//         UserModel
//             .findOne({email: email}, {confirmEmailToken: 1})
//             .lean()
//             .exec(callback);
//     };

//     this.confirmEmail = function (token, callback) {
//         UserModel
//             .findOne({confirmEmailToken: token})
//             .exec(function (err, user) {
//                 if (err || !user) {
//                     return callback(err || errors.error(400, errors.WRONG_LINK));
//                 }

//                 if (user.isConfirmed) {
//                     return callback(errors.error(400, errors.ALREADY_CONFIRMED));
//                 }

//                 user.isConfirmed = true;
//                 user.save(callback);
//             });
//     };

//     this.approveCheck = function (userId, callback) {
//         UserModel
//             .findById(userId, {isApproved: 1})
//             .lean()
//             .exec(callback);
//     };
// };

// var userService = new UserService();

// module.exports = userService;
