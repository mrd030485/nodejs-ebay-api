function UnitOfMeasurementDetailsType(UnitOfMeasurement, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   Units of measurement are no longer returned in GeteBayDetails, so this type is no longer applicable.
	 */

	/**
	 * Arrays
	 *	UnitOfMeasurement: UnitOfMeasurementType
	 */
	this.UnitOfMeasurement = UnitOfMeasurement;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
UnitOfMeasurementDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		UnitOfMeasurement: (this.UnitOfMeasurement === undefined)? null : this.UnitOfMeasurement,
		DetailVersion: (this.DetailVersion === undefined)? null : this.DetailVersion,
		UpdateTime: (this.UpdateTime === undefined)? null : this.UpdateTime
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
module.exports = UnitOfMeasurementDetailsType;