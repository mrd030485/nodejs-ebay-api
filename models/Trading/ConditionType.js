function ConditionType(ID, DisplayName) {

	/**
	  Documentation
	   
                Type defining the <b>ConditionValues.Condition</b> container that is returned at the category level in the <b>GetCategoryFeatures</b> response if 'ConditionValues' is specified as a <b>FeatureID</b> value, or if no
                <b>FeatureID</b> values are specified. A <b>ConditionValues.Condition</b> container is returned for each supported item condition value for each eBay category returned in the response.
            
	 */

	/**
	 * Arrays
	 */
	this.ID = ID;
	this.DisplayName = DisplayName;
}
ConditionType.prototype.toJSON = function(with_null) {
	var json = { 
		ID: (this.ID === undefined)? null : this.ID,
		DisplayName: (this.DisplayName === undefined)? null : this.DisplayName
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
module.exports = ConditionType;