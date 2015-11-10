function ReturnPolicyEnabledDefinitionType() {

	/**
	  Documentation
	   
                Defines the feature that specifies whether a return policy could be enabled on the site.
            
	 */

	/**
	 * Arrays
	 */
}
ReturnPolicyEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = ReturnPolicyEnabledDefinitionType;