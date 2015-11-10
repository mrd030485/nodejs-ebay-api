function SellerExcludeShipToLocationPreferencesType(ExcludeShipToLocation) {

	/**
	  Documentation
	   
                Container consisting for the list of locations to where the seller will not ship items.
            
	 */

	/**
	 * Arrays
	 */
	this.ExcludeShipToLocation = ExcludeShipToLocation;
}
SellerExcludeShipToLocationPreferencesType.prototype.toJSON = function(with_null) {
	var json = { 
		ExcludeShipToLocation: (this.ExcludeShipToLocation === undefined)? null : this.ExcludeShipToLocation
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
module.exports = SellerExcludeShipToLocationPreferencesType;