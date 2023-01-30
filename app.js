// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
require("dotenv").config();

AWS.config.update({
  region: "ap-south-1",
  maxRetries: 3,
  httpOptions: { timeout: 30000, connectTimeout: 5000 },
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

console.log(process.env.AWS_ACCESS_KEY_ID);
var iam = new AWS.IAM();

var params = {
  MaxItems: 10,
};

iam.listUsers(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    var users = data.Users || [];
    users.forEach(function (user) {
      //   console.log("User " + user.UserName + " created", user.CreateDate);
      console.log(user);
    });
  }
});
