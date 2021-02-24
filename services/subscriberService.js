// var SubscriberModel = require('../models/subscriber');
// var errors = require('../constants/errors');

// var SubscriberService = function () {

//     this.addSubscriber = function (email, callback) {
//         SubscriberModel.create({email: email}, function (err) {
//             callback(errors.mongo(400, err));
//         });
//     };

//     this.removeSubscriber = function (email, callback) {
//         SubscriberModel.findOneAndRemove({email: email}, callback);
//     };
// };

// var subscriberService = new SubscriberService();

// module.exports = subscriberService;
