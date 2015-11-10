var UserIDType = require('../../Trading/UserIDType');

function GetBidderListRequestType(ActiveItemsOnly, EndTimeFrom, EndTimeTo, UserID, GranularityLevel) {

	/**
	  Documentation
	   Retrieves all items the user is currently bidding on, and the ones they have won or purchased.
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
	this.ActiveItemsOnly = ActiveItemsOnly;
	this.EndTimeFrom = EndTimeFrom;
	this.EndTimeTo = EndTimeTo;
	this.UserID = UserID;
	this.GranularityLevel = GranularityLevel;
}
GetBidderListRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ActiveItemsOnly: (this.ActiveItemsOnly === undefined)? null : this.ActiveItemsOnly,
		EndTimeFrom: (this.EndTimeFrom === undefined)? null : this.EndTimeFrom,
		EndTimeTo: (this.EndTimeTo === undefined)? null : this.EndTimeTo,
		UserID: (this.UserID === undefined)? null : this.UserID.toJSON(),
		GranularityLevel: (this.GranularityLevel === undefined)? null : this.GranularityLevel
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
module.exports = GetBidderListRequestType;