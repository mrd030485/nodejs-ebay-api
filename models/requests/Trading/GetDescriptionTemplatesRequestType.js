function GetDescriptionTemplatesRequestType(CategoryID, LastModifiedTime, MotorVehicles) {

	/**
	  Documentation
	   Retrieves Theme and Layout specifications for the display of an item's description.
	 */

	/**
	 * Arrays
	 */
	this.CategoryID = CategoryID;
	this.LastModifiedTime = LastModifiedTime;
	this.MotorVehicles = MotorVehicles;
}
GetDescriptionTemplatesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		CategoryID: (this.CategoryID === undefined)? null : this.CategoryID,
		LastModifiedTime: (this.LastModifiedTime === undefined)? null : this.LastModifiedTime,
		MotorVehicles: (this.MotorVehicles === undefined)? null : this.MotorVehicles
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
module.exports = GetDescriptionTemplatesRequestType;