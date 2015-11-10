var UserIDType = require('./UserIDType');

function ReviewType(URL, Title, Rating, Text, UserID, CreationTime) {

	/**
	  Documentation
	   A product review written by an eBay member.
	 */

	/**
	 * Arrays
	 */
	var _UserID;
	Object.defineProperty(this, 'UserID', {
		 get: function(){
			 return _UserID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIDType){ 
					_UserID = value; 
				}else{
					console.log('UserID expects type UserIDType');
				}
			}
		}
	});
	this.URL = URL;
	this.Title = Title;
	this.Rating = Rating;
	this.Text = Text;
	this.UserID = UserID;
	this.CreationTime = CreationTime;
}
ReviewType.prototype.toJSON = function(with_null) {
	var json = { 
		URL: (this.URL === undefined)? null : this.URL,
		Title: (this.Title === undefined)? null : this.Title,
		Rating: (this.Rating === undefined)? null : this.Rating,
		Text: (this.Text === undefined)? null : this.Text,
		UserID: (this.UserID === undefined)? null : this.UserID.toJSON(),
		CreationTime: (this.CreationTime === undefined)? null : this.CreationTime
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
module.exports = ReviewType;