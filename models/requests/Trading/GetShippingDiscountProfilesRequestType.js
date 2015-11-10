function GetShippingDiscountProfilesRequestType() {

	/**
	  Documentation
	   Returns the shipping discount profiles defined by the user, along with other Combined Invoice-related details such as packaging and handling costs.
	 */

	/**
	 * Arrays
	 */
}
GetShippingDiscountProfilesRequestType.prototype.toJSON = function(with_null) {
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
module.exports = GetShippingDiscountProfilesRequestType;