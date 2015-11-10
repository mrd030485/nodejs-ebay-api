function StoreOwnerExtendedListingDurationsType(Duration) {

	/**
	  Documentation
	   Defines the extended listing durations available to store owners. If the field is present, the corresponding feature applies to the category. The field is returned as an empty element (e.g., a boolean value is not returned). Applies to
                    Fixed Price Listings.
	 */

	/**
	 * Arrays
	 */
	this.Duration = Duration;
}
StoreOwnerExtendedListingDurationsType.prototype.toJSON = function(with_null) {
	var json = { 
		Duration: (this.Duration === undefined)? null : this.Duration
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
module.exports = StoreOwnerExtendedListingDurationsType;