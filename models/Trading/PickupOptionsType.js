function PickupOptionsType(PickupMethod, PickupPriority) {

	/**
	  Documentation
	   Type defining the <strong>PickupOptions</strong> container, which consists of a pickup method and the priority of the pickup method. <br/><br/> <span class="tablenote"> <strong>Note:</strong> At
                    this time, the In-Store Pickup and Click and Collect features are generally only available to large retail merchants, and can only be applied to multi-quantity, fixed-price listings. </span>
	 */

	/**
	 * Arrays
	 */
	this.PickupMethod = PickupMethod;
	this.PickupPriority = PickupPriority;
}
PickupOptionsType.prototype.toJSON = function(with_null) {
	var json = { 
		PickupMethod: (this.PickupMethod === undefined)? null : this.PickupMethod,
		PickupPriority: (this.PickupPriority === undefined)? null : this.PickupPriority
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
module.exports = PickupOptionsType;