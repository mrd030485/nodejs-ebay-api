var UserIDType = require('../../Trading/UserIDType'),
	UserIDArrayType = require('../../Trading/UserIDArrayType'),
	PaginationType = require('../../Trading/PaginationType'),
	SKUArrayType = require('../../Trading/SKUArrayType');

function GetSellerListRequestType(UserID, MotorsDealerUsers, EndTimeFrom, EndTimeTo, Sort, StartTimeFrom, StartTimeTo, Pagination, GranularityLevel, SKUArray, IncludeWatchCount, AdminEndedItemsOnly, CategoryID, IncludeVariations) {

	/**
	  Documentation
	   Returns a list of the items posted by the authenticated user, including the related item data.
	 */

	/**
	 * Arrays
	 */
	var _UserID;
	var _MotorsDealerUsers;
	var _Pagination;
	var _SKUArray;
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
	Object.defineProperty(this, 'MotorsDealerUsers', {
		 get: function(){
			 return _MotorsDealerUsers;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIDArrayType){ 
					_MotorsDealerUsers = value; 
				}else{
					console.log('MotorsDealerUsers expects type UserIDArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Pagination', {
		 get: function(){
			 return _Pagination;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PaginationType){ 
					_Pagination = value; 
				}else{
					console.log('Pagination expects type PaginationType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SKUArray', {
		 get: function(){
			 return _SKUArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SKUArrayType){ 
					_SKUArray = value; 
				}else{
					console.log('SKUArray expects type SKUArrayType');
				}
			}
		}
	});
	this.UserID = UserID;
	this.MotorsDealerUsers = MotorsDealerUsers;
	this.EndTimeFrom = EndTimeFrom;
	this.EndTimeTo = EndTimeTo;
	this.Sort = Sort;
	this.StartTimeFrom = StartTimeFrom;
	this.StartTimeTo = StartTimeTo;
	this.Pagination = Pagination;
	this.GranularityLevel = GranularityLevel;
	this.SKUArray = SKUArray;
	this.IncludeWatchCount = IncludeWatchCount;
	this.AdminEndedItemsOnly = AdminEndedItemsOnly;
	this.CategoryID = CategoryID;
	this.IncludeVariations = IncludeVariations;
}
GetSellerListRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		UserID: (this.UserID === undefined)? null : this.UserID.toJSON(),
		MotorsDealerUsers: (this.MotorsDealerUsers === undefined)? null : this.MotorsDealerUsers.toJSON(),
		EndTimeFrom: (this.EndTimeFrom === undefined)? null : this.EndTimeFrom,
		EndTimeTo: (this.EndTimeTo === undefined)? null : this.EndTimeTo,
		Sort: (this.Sort === undefined)? null : this.Sort,
		StartTimeFrom: (this.StartTimeFrom === undefined)? null : this.StartTimeFrom,
		StartTimeTo: (this.StartTimeTo === undefined)? null : this.StartTimeTo,
		Pagination: (this.Pagination === undefined)? null : this.Pagination.toJSON(),
		GranularityLevel: (this.GranularityLevel === undefined)? null : this.GranularityLevel,
		SKUArray: (this.SKUArray === undefined)? null : this.SKUArray.toJSON(),
		IncludeWatchCount: (this.IncludeWatchCount === undefined)? null : this.IncludeWatchCount,
		AdminEndedItemsOnly: (this.AdminEndedItemsOnly === undefined)? null : this.AdminEndedItemsOnly,
		CategoryID: (this.CategoryID === undefined)? null : this.CategoryID,
		IncludeVariations: (this.IncludeVariations === undefined)? null : this.IncludeVariations
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
module.exports = GetSellerListRequestType;