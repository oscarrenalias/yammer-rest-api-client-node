//tokens.json is ignored by git, this allows the developer to persist their token to
//disk and not be concerned about it being shared publically
//example;

// {
//   "yammer":"myspecialtoken"
// }
var fs = require('fs');
var tokens = {};

if (fs.existsSync('test/helper/tokens.json')) {
  tokens = require('./tokens.json');
}
else{
  console.log('local token config file not present');
}
var yammerToken = tokens.yammer || process.env.YAMMER_TOKEN;

exports.token = yammerToken;