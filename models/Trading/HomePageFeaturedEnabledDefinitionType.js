function HomePageFeaturedEnabledDefinitionType() {

	/**
	  Documentation
	   
                Defines whether Home Page Featured is available on the site.
            
	 */

	/**
	 * Arrays
	 */
}
HomePageFeaturedEnabledDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = HomePageFeaturedEnabledDefinitionType;