var ItemIDType = require('../../Trading/ItemIDType');

function GetWantItNowPostRequestType(PostID) {

	/**
	  Documentation
	   Retrieves data for a specific, active Want It Now post identified by a post ID. The response includes the following fields: CategoryID, Description, PostID, Site, StartTime, ResponseCount, and Title. Although GetWantItNowSearchResults
                    returns most of this information, only GetWantItNowPost returns Description for a post.
	 */

	/**
	 * Arrays
	 */
	var _PostID;
	Object.defineProperty(this, 'PostID', {
		 get: function(){
			 return _PostID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemIDType){ 
					_PostID = value; 
				}else{
					console.log('PostID expects type ItemIDType');
				}
			}
		}
	});
	this.PostID = PostID;
}
GetWantItNowPostRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		PostID: (this.PostID === undefined)? null : this.PostID.toJSON()
	};
	if(!with_null) {
		for(var k in json) {
			if(json[k] === null) {
				delete json[k];
			}
		}
	}
	return json;
};
module.exports = GetWantItNowPostRequestType;