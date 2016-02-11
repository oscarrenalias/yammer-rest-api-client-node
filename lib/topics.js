var util = require('util'),
    YammerAPI = require('./base');

module.exports = YammerTopicsAPI;

function YammerTopicsAPI(config) {
    YammerAPI.call(this, config);
}
util.inherits(YammerTopicsAPI, YammerAPI);

YammerTopicsAPI.prototype.get = function(id, callback) {      
    this.doGet('/api/v1/topics/' + id + '.json', {}, callback);
};

YammerTopicsAPI.prototype.add = function (id, topic, callback) {
    this.doPost('/api/v1/threads/' + id + '/apply_topic', { topic: topic }, callback);
};

YammerTopicsAPI.prototype.delete = function (id, topic_id, callback) {
    this.doPost('/api/v1/threads/' + id + '/remove_topic', { topic_id: topic_id }, callback);
};