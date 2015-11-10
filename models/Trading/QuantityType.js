function QuantityType(unit) {

	/**
	  Documentation
	   
                Basic type for specifying quantities.
            
	 */

	/**
	 * Arrays
	 */
	this.unit = unit;
}
QuantityType.prototype.toJSON = function(with_null) {
	var json = { 
		unit: (this.unit === undefined)? null : this.unit
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
module.exports = QuantityType;