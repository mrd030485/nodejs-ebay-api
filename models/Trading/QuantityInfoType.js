function QuantityInfoType(MinimumRemnantSet) {

	/**
	  Documentation
	   Currently applies to tickets. May apply to other categories in the future.
	 */

	/**
	 * Arrays
	 */
	this.MinimumRemnantSet = MinimumRemnantSet;
}
QuantityInfoType.prototype.toJSON = function(with_null) {
	var json = { 
		MinimumRemnantSet: (this.MinimumRemnantSet === undefined)? null : this.MinimumRemnantSet
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
module.exports = QuantityInfoType;