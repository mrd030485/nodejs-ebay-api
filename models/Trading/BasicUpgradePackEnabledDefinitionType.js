function BasicUpgradePackEnabledDefinitionType() {

	/**
	  Documentation
	   
                This type is deprecated, as the Basic Upgrade Pack feature on the eBay Australia site is deprecated.
            
	 */

	/**
	 * Arrays
	 */
}
BasicUpgradePackEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = BasicUpgradePackEnabledDefinitionType;