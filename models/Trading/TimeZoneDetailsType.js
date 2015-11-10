function TimeZoneDetailsType(TimeZoneID, StandardLabel, StandardOffset, DaylightSavingsLabel, DaylightSavingsOffset, DaylightSavingsInEffect, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   Time zone details about a region or location to which the seller is willing to ship.
	 */

	/**
	 * Arrays
	 */
	this.TimeZoneID = TimeZoneID;
	this.StandardLabel = StandardLabel;
	this.StandardOffset = StandardOffset;
	this.DaylightSavingsLabel = DaylightSavingsLabel;
	this.DaylightSavingsOffset = DaylightSavingsOffset;
	this.DaylightSavingsInEffect = DaylightSavingsInEffect;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
TimeZoneDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		TimeZoneID: (this.TimeZoneID === undefined)? null : this.TimeZoneID,
		StandardLabel: (this.StandardLabel === undefined)? null : this.StandardLabel,
		StandardOffset: (this.StandardOffset === undefined)? null : this.StandardOffset,
		DaylightSavingsLabel: (this.DaylightSavingsLabel === undefined)? null : this.DaylightSavingsLabel,
		DaylightSavingsOffset: (this.DaylightSavingsOffset === undefined)? null : this.DaylightSavingsOffset,
		DaylightSavingsInEffect: (this.DaylightSavingsInEffect === undefined)? null : this.DaylightSavingsInEffect,
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
module.exports = TimeZoneDetailsType;