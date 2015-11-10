var ItemIDType = require('../../Trading/ItemIDType');

function GetUserRequestType(ItemID, UserID, IncludeExpressRequirements, IncludeFeatureEligibility) {

	/**
	  Documentation
	   Retrieves data pertaining to a single eBay user. Callers can use this call to return their own user data or the data of another eBay user. Unless the caller passes in an ItemID that identifies a current or past common order, not all data
                    (like email addresses) will be returned in the User object.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	Object.defineProperty(this, 'ItemID', {
		 get: function(){
			 return _ItemID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemIDType){ 
					_ItemID = value; 
				}else{
					console.log('ItemID expects type ItemIDType');
				}
			}
		}
	});
	this.ItemID = ItemID;
	this.UserID = UserID;
	this.IncludeExpressRequirements = IncludeExpressRequirements;
	this.IncludeFeatureEligibility = IncludeFeatureEligibility;
}
GetUserRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		UserID: (this.UserID === undefined)? null : this.UserID,
		IncludeExpressRequirements: (this.IncludeExpressRequirements === undefined)? null : this.IncludeExpressRequirements,
		IncludeFeatureEligibility: (this.IncludeFeatureEligibility === undefined)? null : this.IncludeFeatureEligibility
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
module.exports = GetUserRequestType;