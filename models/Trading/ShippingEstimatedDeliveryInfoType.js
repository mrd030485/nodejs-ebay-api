function ShippingEstimatedDeliveryInfoType(OriginalDeliveryEstimatedTimeMin, OriginalDeliveryEstimatedTimeMax) {

	/**
	  Documentation
	   
                This type is not currently in use.
                
            
	 */

	/**
	 * Arrays
	 */
	this.OriginalDeliveryEstimatedTimeMin = OriginalDeliveryEstimatedTimeMin;
	this.OriginalDeliveryEstimatedTimeMax = OriginalDeliveryEstimatedTimeMax;
}
ShippingEstimatedDeliveryInfoType.prototype.toJSON = function(with_null) {
	var json = { 
		OriginalDeliveryEstimatedTimeMin: (this.OriginalDeliveryEstimatedTimeMin === undefined)? null : this.OriginalDeliveryEstimatedTimeMin,
		OriginalDeliveryEstimatedTimeMax: (this.OriginalDeliveryEstimatedTimeMax === undefined)? null : this.OriginalDeliveryEstimatedTimeMax
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
module.exports = ShippingEstimatedDeliveryInfoType;