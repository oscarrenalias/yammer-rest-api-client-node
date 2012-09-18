var https = require('https'),
    util = require('util'),
    assert = require('assert'),
    log = require('winston');

module.exports = YammerAPI;

function YammerAPI(config) {
	this.config = config;
    this.baseUrl = config.baseUrl || "/api/v1";
    this.host = config.host || "www.yammer.com"
}

YammerAPI.addMethods = function(mappings, obj) {
    var httpFuncs = {
        "get": function() { return(this.doGet) },
        "post": function() { return(this.doPost) },
        "delete": function() { return(this.doDelete) },
        "put": function() { return(this.doPut) }
    };

    for(func in mappings) {

        var apiMethod = mappings[func];

        obj.prototype[func] = (function(apiInfo) {
            if(apiInfo.api instanceof Function) {
                return function(id, params, callback) {
                    assert(id, "ID parameter must not be null");
                    RequestHelper.doRequest(
                        this.baseUrl + apiInfo.api(id),
                        this.config.token,
                        apiInfo.method, 
                        params, 
                        callback
                    );
                }
            }
            else { 
                return function(params, callback) {
                    RequestHelper.doRequest(
                        this.baseUrl + apiInfo.api, 
                        this.config.token,
                        apiInfo.method,
                        params, 
                        callback);
                }
            }   
        })(apiMethod);
    }
}

YammerAPI.prototype.doGet = function(endpoint, params, callback) {
    RequestHelper.doRequest(endpoint, this.config.token, "get", params, callback);
}

YammerAPI.prototype.doPost = function(endpoint, params, callback) {
    RequestHelper.doRequest(endpoint, this.config.token, "post", params, callback);
}

YammerAPI.prototype.doPut = function(endpoint, params, callback) {
    RequestHelper.doRequest(endpoint, this.config.token, "put", params, callback);
}

YammerAPI.prototype.doPost = function(endpoint, params, callback) {
    RequestHelper.doRequest(endpoint, this.config.token, "post", params, callback);
}

RequestHelper = {
    doRequest: function(endpoint, token, method, params, callback) {
        // so that it's possible to ignore the params parameter and provider the callback
        // in its place instead
        if(params instanceof Function) {
            callback = params;
            params = {}
        }

        var _mapParameters = function(parameters) {
            var queryString = "";
            for(var key in parameters) {
                queryString += key + "=" + parameters[key] + "&";
            }
            if(queryString[queryString.length-1] == "&")
                queryString = queryString.substr(0, queryString.length-1);

            return(queryString);
        }

        var _buildPath = function(endpoint, parameters, token) {
            token = token || token;
            var path = endpoint + "?" + _mapParameters(parameters) + "&access_token=" + token;
            log.debug("Building endpoint: " + path);

            return(path);
        }                

        var options = {
            host: "www.yammer.com",
            method: method,
            path: _buildPath(endpoint, params, token) + '?access_token=' + token,
            headers: { "Authorization": "Bearer " + token }                        
        }

        var request = https.request(options, function(response) {
            log.debug("Retrieving data");
            var data = "";
            response.on("data", function(chunk) {
                if(chunk.toString().trim() != "") {
                    data += chunk;
                }
            });

            if(response.statusCode != 200) {
                log.error("The Yammer endpoint returned status code " + response.statusCode + ", cannot continue");
                callback(response, null);
                return;
            }     

            response.on("end", function() {
                // process the response from yammer
                callback(null, JSON.parse(data));
            });
        });

        if(method == "post" || method == "POST")
            request.write(JSON.stringify(params));
        request.end();        
    }    
}