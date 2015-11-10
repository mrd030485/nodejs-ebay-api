var UserIDType = require('../../Trading/UserIDType');

function GetStoreRequestType(CategoryStructureOnly, RootCategoryID, LevelLimit, UserID) {

	/**
	  Documentation
	   Retrieves configuration information for the eBay store owned by the specified UserID, or by the caller.
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
	this.CategoryStructureOnly = CategoryStructureOnly;
	this.RootCategoryID = RootCategoryID;
	this.LevelLimit = LevelLimit;
	this.UserID = UserID;
}
GetStoreRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		CategoryStructureOnly: (this.CategoryStructureOnly === undefined)? null : this.CategoryStructureOnly,
		RootCategoryID: (this.RootCategoryID === undefined)? null : this.RootCategoryID,
		LevelLimit: (this.LevelLimit === undefined)? null : this.LevelLimit,
		UserID: (this.UserID === undefined)? null : this.UserID.toJSON()
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
module.exports = GetStoreRequestType;