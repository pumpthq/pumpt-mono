// var ConversationModel = require('../models/conversation');
// var pagination = require('../helpers/pagination');
// var MessageModel = require('../models/message');
// var expander = require('../helpers/expander');
// var filter = require('../helpers/filter');

// var ConversationService = function () {

//     var SORT_BY = '_id';
//     var SORT_ORDER = -1;
//     var LIMIT = 10;

//     function getProjection() {
//         return {
//             _id      : 1,
//             vacancy  : 1,
//             recruiter: 1,
//             candidate: 1,
//             messages : 1
//         };
//     }

//     this.create = function (conversation, cb) {
//         ConversationModel.create(conversation, function (err, createdConversation) {
//             if (err) {
//                 return cb(err);
//             }

//             cb(null, createdConversation.toObject());
//         });
//     };

//     // query: {recruiter: uuid} or {candidate: uuid} or {vacancy: uuid}
//     this.fetch = function (query, cb) {
//         var aggregateObj = [{$match: filter(query, 'recruiter', 'candidate', 'vacancy')}];
//         var sortBy = query.sortBy || SORT_BY;
//         var sortOrder = parseInt(query.sortOrder, 10) || SORT_ORDER;
//         var limit = pagination.limit(query, LIMIT);
//         var skip = pagination.skip(query, LIMIT);
//         var sortObj = {};

//         sortObj[sortBy] = sortOrder;

//         if (query.expand) {
//             aggregateObj = aggregateObj.concat(expander.expandMany('messages', getProjection()));
//         } else {
//             aggregateObj = aggregateObj.concat({$project: getProjection()});
//         }

//         ConversationModel
//             .aggregate(aggregateObj)
//             .sort(sortObj)
//             .skip(skip)
//             .limit(limit)
//             .exec(cb);
//     };

//     this.fetchById = function (id, cb) {
//         var aggregateObj = [{$match: {_id: id}}];

//         aggregateObj = aggregateObj.concat(expander.expandMany('messages', getProjection()));

//         ConversationModel
//             .aggregate(aggregateObj)
//             .exec(function (err, conversations) {
//                 if (err) {
//                     return cb(err);
//                 }

//                 cb(null, conversations[0]);
//             });
//     };

//     this.delete = function (id, cb) {
//         ConversationModel
//             .findByIdAndRemove(id)
//             .lean()
//             .exec(function (err, conversation) {
//                 cb(err, conversation);
//                 MessageModel.remove({_id: {$in: conversation.messages}}).exec();
//             });
//     };
// };

// var conversationService = new ConversationService();

// module.exports = conversationService;
