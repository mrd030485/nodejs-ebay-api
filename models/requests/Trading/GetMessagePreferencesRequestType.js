var UserIDType = require('../../Trading/UserIDType');

function GetMessagePreferencesRequestType(SellerID, IncludeASQPreferences) {

	/**
	  Documentation
	   Returns a seller's Ask Seller a Question (ASQ) subjects, each in its own Subject node.
	 */

	/**
	 * Arrays
	 */
	var _SellerID;
	Object.defineProperty(this, 'SellerID', {
		 get: function(){
			 return _SellerID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIDType){ 
					_SellerID = value; 
				}else{
					console.log('SellerID expects type UserIDType');
				}
			}
		}
	});
	this.SellerID = SellerID;
	this.IncludeASQPreferences = IncludeASQPreferences;
}
GetMessagePreferencesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		SellerID: (this.SellerID === undefined)? null : this.SellerID.toJSON(),
		IncludeASQPreferences: (this.IncludeASQPreferences === undefined)? null : this.IncludeASQPreferences
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
module.exports = GetMessagePreferencesRequestType;