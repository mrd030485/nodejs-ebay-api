function SellerReturnPreferencesType(OptedIn) {

	/**
	  Documentation
	   
                Type defining the <b>SellerReturnPreferences</b> container, which consists of the <b>OptedIn</b> flag that indicates whether or not the seller has opted in to eBay Managed Returns. <br><br> eBay Managed Returns are
                currently only available on the US and UK sites.
            
	 */

	/**
	 * Arrays
	 */
	this.OptedIn = OptedIn;
}
SellerReturnPreferencesType.prototype.toJSON = function(with_null) {
	var json = { 
		OptedIn: (this.OptedIn === undefined)? null : this.OptedIn
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
module.exports = SellerReturnPreferencesType;