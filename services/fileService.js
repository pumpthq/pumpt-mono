// const env = require('../config');
// const AWS = require('aws-sdk');
// const uuid = require('node-uuid');

// const spacesEndpoint = new AWS.Endpoint('nyc3.digitaloceanspaces.com');
// const s3bucket = new AWS.S3({
//   endpoint: spacesEndpoint,
//   accessKeyId: env.DO_KEY,
//   secretAccessKey: env.DO_SECRET,

// });

// const Bucket = env.DO_SPACE_NAME;

// var FileUploadService = function () {
//   this.upload = function (part, callback) {
//     var params = { Key: uuid.v4(), Body: part, Bucket };
//     s3bucket.upload(params, callback);
//   };

//   this.read = function (params, cb) {
//     params.Bucket = Bucket;
//     s3bucket.getObject(params, cb);
//   };

//   // will be used when deletes some instance with related images
//   this.delete = function (key, cb) {
//     var params = {
//       Key: key,
//       Bucket,
//     };
//     s3bucket.deleteObject(params, cb);
//   };
// };

// var fileUploadService = new FileUploadService();

// module.exports = fileUploadService;
