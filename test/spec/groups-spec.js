var YammerGroupsAPI = require("../../lib/groups");
var config = require('../helper/testconfig');
var nock = require('nock');
var groupsClient = new YammerGroupsAPI(config);

var getGroupsMock = [
    {
        "type": "group",
        "id": 25963441,
        "full_name": "ACME Innovation",
        "name": "ai",
        "description": "A group to talk about topics that relate to innovation. The opening driver is the StartUp Weekend initiative.",
        "privacy": "public",
        "url": "https://www.yammer.com/api/v1/groups/2592363441",
        "web_url": "https://www.yammer.com/acme.com/#/threads/inGroup?type=in_group&feedId=2534963441",
        "mugshot_url": "https://mug0.assets-yammer.com/mugshot/images/48x48/W8ljDXHw8H3bbFNN1b9wsdsdNLKR-dvBxlbB",
        "mugshot_url_template": "https://mug0.assets-yammer.com/mugshot/images/{width}x{height}/W8ljDsdsXHw8H3bbFNN1b9wNLKR-dvBxlbB",
        "mugshot_id": "W8ljDXHw8H3bbFssds9wNLKR-dvBxlbB",
        "office365_url": "https://5cc8aa98dfe94sda.sharepoint.com/sites/532543127",
        "created_at": "2011/11/02 04:44:26 +0000",
        "show_in_directory": "true",
        "creator_type": "user",
        "creator_id": 141714328,
        "state": "active",
        "stats": {
            "members": 208,
            "updates": 353,
            "last_message_id": 37124447450,
            "last_message_at": "2014/02/28 09:13:18 +0000"
        }
    }
];

var yammerGroupsRequest = nock('https://www.yammer.com')
                .get('/api/v1/groups.json?')
                .reply(200, getGroupsMock);
 
describe("Requests all groups", function () {
  it("should return groups", function (done) {
    groupsClient.list({}, function(error, data){
      expect(data).not.toBe(null);
      expect(data.length).toBeGreaterThan(0);
      expect(data[0].type).equalTo('topic');
      done();      
    });
  });
});
