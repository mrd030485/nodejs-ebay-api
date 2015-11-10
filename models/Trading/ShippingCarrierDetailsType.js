function ShippingCarrierDetailsType(ShippingCarrierID, Description, ShippingCarrier, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   Details about type of Carrier used to ship an item.
	 */

	/**
	 * Arrays
	 */
	this.ShippingCarrierID = ShippingCarrierID;
	this.Description = Description;
	this.ShippingCarrier = ShippingCarrier;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
ShippingCarrierDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		ShippingCarrierID: (this.ShippingCarrierID === undefined)? null : this.ShippingCarrierID,
		Description: (this.Description === undefined)? null : this.Description,
		ShippingCarrier: (this.ShippingCarrier === undefined)? null : this.ShippingCarrier,
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
module.exports = ShippingCarrierDetailsType;