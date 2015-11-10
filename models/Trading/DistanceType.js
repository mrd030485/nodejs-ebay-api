function DistanceType(DistanceMeasurement, DistanceUnit) {

	/**
	  Documentation
	   
                This type is deprecated as the <b>GetProduct*</b> calls are no longer available.
                
            
	 */

	/**
	 * Arrays
	 */
	this.DistanceMeasurement = DistanceMeasurement;
	this.DistanceUnit = DistanceUnit;
}
DistanceType.prototype.toJSON = function(with_null) {
	var json = { 
		DistanceMeasurement: (this.DistanceMeasurement === undefined)? null : this.DistanceMeasurement,
		DistanceUnit: (this.DistanceUnit === undefined)? null : this.DistanceUnit
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
module.exports = DistanceType;