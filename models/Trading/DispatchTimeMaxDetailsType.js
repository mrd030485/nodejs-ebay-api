function DispatchTimeMaxDetailsType(DispatchTimeMax, Description, DetailVersion, UpdateTime, ExtendedHandling) {

	/**
	  Documentation
	   
                Details about the maximum number of business days required to ship an item to domestic buyers after receiving a cleared payment.
            
	 */

	/**
	 * Arrays
	 */
	this.DispatchTimeMax = DispatchTimeMax;
	this.Description = Description;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
	this.ExtendedHandling = ExtendedHandling;
}
DispatchTimeMaxDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		DispatchTimeMax: (this.DispatchTimeMax === undefined)? null : this.DispatchTimeMax,
		Description: (this.Description === undefined)? null : this.Description,
		DetailVersion: (this.DetailVersion === undefined)? null : this.DetailVersion,
		UpdateTime: (this.UpdateTime === undefined)? null : this.UpdateTime,
		ExtendedHandling: (this.ExtendedHandling === undefined)? null : this.ExtendedHandling
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
module.exports = DispatchTimeMaxDetailsType;