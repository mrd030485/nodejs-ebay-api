function PickupDetailsType(PickupOptions) {

	/**
	  Documentation
	   This type defines the <strong>PickupDetails</strong> container, which contains an array of <strong>PickupOptions</strong> containers. Each <strong>PickupOptions</strong> container consists of the pickup
                    method and its priority. <br/><br/> <span class="tablenote"> <strong>Note:</strong> At this time, the In-Store Pickup and Click and Collect features are generally only available to large retail merchants,
                    and can only be applied to multi-quantity, fixed-price listings. </span>
	 */

	/**
	 * Arrays
	 *	PickupOptions: PickupOptionsType
	 */
	this.PickupOptions = PickupOptions;
}
PickupDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		PickupOptions: (this.PickupOptions === undefined)? null : this.PickupOptions
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
module.exports = PickupDetailsType;