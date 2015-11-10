function MeasureType(unit, measurementSystem) {

	/**
	  Documentation
	   Basic type for specifying measures and the system of measurement. A decimal value (e.g., 10.25) is meaningful as a measure when accompanied by a definition of the unit of measure (e.g., Pounds), in which case the value specifies the quantity
                    of that unit. A MeasureType expresses both the value (a decimal) and, optionally, the unit and the system of measurement. Details such as shipping weights are specified as measure types.
	 */

	/**
	 * Arrays
	 */
	this.unit = unit;
	this.measurementSystem = measurementSystem;
}
MeasureType.prototype.toJSON = function(with_null) {
	var json = { 
		unit: (this.unit === undefined)? null : this.unit,
		measurementSystem: (this.measurementSystem === undefined)? null : this.measurementSystem
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
module.exports = MeasureType;