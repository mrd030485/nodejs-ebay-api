var CategoryGroupType = require('./CategoryGroupType');

function SupportedSellerProfileType(ProfileID, ProfileType, ProfileName, ShortSummary, CategoryGroup) {

	/**
	  Documentation
	   Type defining the <b>SupportedSellerProfile</b> container, which contains summary information related to specific Business Policies payment, return policy, and shipping profiles. The profile type is found in the <b>ProfileType</b>
                    field.
                
	 */

	/**
	 * Arrays
	 */
	var _CategoryGroup;
	Object.defineProperty(this, 'CategoryGroup', {
		 get: function(){
			 return _CategoryGroup;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CategoryGroupType){ 
					_CategoryGroup = value; 
				}else{
					console.log('CategoryGroup expects type CategoryGroupType');
				}
			}
		}
	});
	this.ProfileID = ProfileID;
	this.ProfileType = ProfileType;
	this.ProfileName = ProfileName;
	this.ShortSummary = ShortSummary;
	this.CategoryGroup = CategoryGroup;
}
SupportedSellerProfileType.prototype.toJSON = function(with_null) {
	var json = { 
		ProfileID: (this.ProfileID === undefined)? null : this.ProfileID,
		ProfileType: (this.ProfileType === undefined)? null : this.ProfileType,
		ProfileName: (this.ProfileName === undefined)? null : this.ProfileName,
		ShortSummary: (this.ShortSummary === undefined)? null : this.ShortSummary,
		CategoryGroup: (this.CategoryGroup === undefined)? null : this.CategoryGroup.toJSON()
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
module.exports = SupportedSellerProfileType;