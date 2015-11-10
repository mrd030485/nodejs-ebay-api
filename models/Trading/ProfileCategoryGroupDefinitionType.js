function ProfileCategoryGroupDefinitionType() {

	/**
	  Documentation
	   
                Type defining the <b>PaymentProfileCategoryGroup</b>, <b> ReturnPolicyProfileCategoryGroup</b>, and <b>ShippingProfileCategoryGroup</b> fields, which are all returned in the <b>GetCategoryFeature</b> response
                if these Business Policies profile types apply to the category. Each of these fields is returned as an empty element.
            
	 */

	/**
	 * Arrays
	 */
}
ProfileCategoryGroupDefinitionType.prototype.toJSON = function(with_null) {
	var json = { 
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
module.exports = ProfileCategoryGroupDefinitionType;