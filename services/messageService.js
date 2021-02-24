// var ConversationModel = require('../models/conversation');
// var pagination = require('../helpers/pagination');
// var MessageModel = require('../models/message');
// var expander = require('../helpers/expander');
// var errors = require('../constants/errors');

// var MessageService = function () {

//     var SORT_BY = 'createdAt';
//     var SORT_ORDER = -1;
//     var LIMIT = 10;

//     function getProjection() {
//         return {
//             _id         : 1,
//             conversation: 1,
//             text        : 1,
//             sentBy      : 1,
//             createdAt   : 1
//         };
//     }

//     // publish message
//     this.create = function (message, cb) {
//         MessageModel.create(message, function (err, createdMessage) {
//             if (err) {
//                 return cb(err);
//             }

//             ConversationModel.findById(message.conversation, function (err, conversation) {
//                 if (err || !conversation) {
//                     return cb(err || errors.error(404, errors.NOT_FOUND));
//                 }

//                 conversation.messages.push(createdMessage._id);
//                 conversation.save(function (err) {
//                     if (err) {
//                         return cb(err);
//                     }

//                     cb(null, createdMessage.toObject());
//                 });
//             });
//         });
//     };

//     this.fetch = function (query, cb) {
//         var aggregateObj = [];
//         var sortBy = query.sortBy || SORT_BY;
//         var sortOrder = parseInt(query.sortOrder, 10) || SORT_ORDER;
//         var limit = pagination.limit(query, LIMIT);
//         var skip = pagination.skip(query, LIMIT);
//         var sortObj = {};

//         sortObj[sortBy] = sortOrder;

//         if (query.expand) {
//             aggregateObj = aggregateObj.concat(expander.expandOne('conversation', getProjection(), 'conversations'));
//         } else {
//             aggregateObj = aggregateObj.concat({$project: getProjection()});
//         }

//         MessageModel
//             .aggregate(aggregateObj)
//             .sort(sortObj)
//             .skip(skip)
//             .limit(limit)
//             .exec(cb);
//     };

//     this.fetchById = function (id, cb) {
//         var aggregateObj = [{$match: {_id: id}}];

//         aggregateObj = aggregateObj.concat(expander.expandOne('conversation', getProjection(), 'conversations'));

//         MessageModel
//             .aggregate(aggregateObj)
//             .exec(function (err, companies) {
//                 if (err) {
//                     return cb(err);
//                 }

//                 cb(null, companies[0]);
//             });
//     };

//     this.updateById = function (id, changes, cb) {
//         MessageModel.findByIdAndUpdate(id, changes, {lean: true, new: true}, cb);
//     };

//     this.delete = function (id, cb) {
//         var deletedIndex;

//         MessageModel.findByIdAndRemove(id, function (err, message) {
//             if (err || !message) {
//                 return cb(err || errors.error(404, errors.NOT_FOUND));
//             }

//             cb(null, message);

//             ConversationModel.findById(message.conversation, function (err, conversation) {
//                 if (!conversation) return;

//                 deletedIndex = conversation.messages.indexOf(id);

//                 if (deletedIndex !== -1) {
//                     conversation.messages.splice(deletedIndex, 1);
//                     conversation.save();
//                 }
//             });
//         });
//     };
// };

// var messageService = new MessageService();

// module.exports = messageService;
