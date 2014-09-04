var util = require('util'),
    YammerAPI = require('./base');

module.exports = YammerRelationshipsAPI;

function YammerRelationshipsAPI(config) {
    YammerAPI.call(this, config);
}
util.inherits(YammerRelationshipsAPI, YammerAPI);

YammerAPI.addMethods({
    get: {
        api: "/relationships.json",
        method: "get"
    },
    create: {
        api: "/relationships.json",
        method: "post"
    },
    delete: {
        api: function(id) { return("/relationships/" + id + ".json"); },
        method: "delete"
    }
}, YammerRelationshipsAPI);