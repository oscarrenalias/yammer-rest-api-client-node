//token.json is ignored by git, this allows the developer to persist their token to
//disk and not be concerned about it being shared publically
//example;

// {
//   "yammer":"myspecialtoken"
// }

var tokens = require('./tokens.json');


exports.token = tokens.yammer;