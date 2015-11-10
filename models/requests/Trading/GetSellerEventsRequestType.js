var UserIDType = require('../../Trading/UserIDType');

function GetSellerEventsRequestType(UserID, StartTimeFrom, StartTimeTo, EndTimeFrom, EndTimeTo, ModTimeFrom, ModTimeTo, NewItemFilter, IncludeWatchCount, IncludeVariationSpecifics, HideVariations) {

	/**
	  Documentation
	   Retrieves price changes, item revisions, description revisions, and other changes that have occurred within the last 48 hours related to a seller's eBay listings.
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
	this.UserID = UserID;
	this.StartTimeFrom = StartTimeFrom;
	this.StartTimeTo = StartTimeTo;
	this.EndTimeFrom = EndTimeFrom;
	this.EndTimeTo = EndTimeTo;
	this.ModTimeFrom = ModTimeFrom;
	this.ModTimeTo = ModTimeTo;
	this.NewItemFilter = NewItemFilter;
	this.IncludeWatchCount = IncludeWatchCount;
	this.IncludeVariationSpecifics = IncludeVariationSpecifics;
	this.HideVariations = HideVariations;
}
GetSellerEventsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		UserID: (this.UserID === undefined)? null : this.UserID.toJSON(),
		StartTimeFrom: (this.StartTimeFrom === undefined)? null : this.StartTimeFrom,
		StartTimeTo: (this.StartTimeTo === undefined)? null : this.StartTimeTo,
		EndTimeFrom: (this.EndTimeFrom === undefined)? null : this.EndTimeFrom,
		EndTimeTo: (this.EndTimeTo === undefined)? null : this.EndTimeTo,
		ModTimeFrom: (this.ModTimeFrom === undefined)? null : this.ModTimeFrom,
		ModTimeTo: (this.ModTimeTo === undefined)? null : this.ModTimeTo,
		NewItemFilter: (this.NewItemFilter === undefined)? null : this.NewItemFilter,
		IncludeWatchCount: (this.IncludeWatchCount === undefined)? null : this.IncludeWatchCount,
		IncludeVariationSpecifics: (this.IncludeVariationSpecifics === undefined)? null : this.IncludeVariationSpecifics,
		HideVariations: (this.HideVariations === undefined)? null : this.HideVariations
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
module.exports = GetSellerEventsRequestType;