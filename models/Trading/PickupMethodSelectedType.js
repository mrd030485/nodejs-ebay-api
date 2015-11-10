function PickupMethodSelectedType(PickupMethod, PickupStoreID, PickupStatus, MerchantPickupCode, PickupFulfillmentTime, PickupLocationUUID) {

	/**
	  Documentation
	   Type defining the <strong>PickupMethodSelected</strong> container, which consists of details related to the selected local pickup method (In-Store Pickup or "Click and Collect"), including the pickup method, the merchant's
                    store ID, the status of the pickup, and the pickup reference code (if provided by merchant). <br/><br/> <span class="tablenote"> <strong>Note:</strong> At this time, the In-Store Pickup feature is generally
                    only available to large retail merchants, and can only be applied to multi-quantity, fixed-price listings. The "Click and Collect" feature is only available to large merchants on the eBay UK (site ID - 3) and eBay Australia (Site ID
                    - 15) sites. </span>
                
	 */

	/**
	 * Arrays
	 */
	this.PickupMethod = PickupMethod;
	this.PickupStoreID = PickupStoreID;
	this.PickupStatus = PickupStatus;
	this.MerchantPickupCode = MerchantPickupCode;
	this.PickupFulfillmentTime = PickupFulfillmentTime;
	this.PickupLocationUUID = PickupLocationUUID;
}
PickupMethodSelectedType.prototype.toJSON = function(with_null) {
	var json = { 
		PickupMethod: (this.PickupMethod === undefined)? null : this.PickupMethod,
		PickupStoreID: (this.PickupStoreID === undefined)? null : this.PickupStoreID,
		PickupStatus: (this.PickupStatus === undefined)? null : this.PickupStatus,
		MerchantPickupCode: (this.MerchantPickupCode === undefined)? null : this.MerchantPickupCode,
		PickupFulfillmentTime: (this.PickupFulfillmentTime === undefined)? null : this.PickupFulfillmentTime,
		PickupLocationUUID: (this.PickupLocationUUID === undefined)? null : this.PickupLocationUUID
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
module.exports = PickupMethodSelectedType;