function PickupInStoreDetailsType(EligibleForPickupInStore, EligibleForPickupDropOff) {

	/**
	  Documentation
	   
                Complex type defining the <b>PickupInStoreDetails</b> container, that is used in Add/Revise/Relist calls to enable the listing for In-Store Pickup or Click and Collect. <br/><br/> <span class="tablenote"> <strong>Note:</strong>
                At this time, the In-Store Pickup feature is generally only available to large retail merchants, and can only be applied to multi-quantity, fixed-price listings. The Click and Collect feature is only available to large merchants on the
                eBay UK (site ID - 3) and eBay Australia (Site ID - 15) sites. </span>
            
	 */

	/**
	 * Arrays
	 */
	this.EligibleForPickupInStore = EligibleForPickupInStore;
	this.EligibleForPickupDropOff = EligibleForPickupDropOff;
}
PickupInStoreDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		EligibleForPickupInStore: (this.EligibleForPickupInStore === undefined)? null : this.EligibleForPickupInStore,
		EligibleForPickupDropOff: (this.EligibleForPickupDropOff === undefined)? null : this.EligibleForPickupDropOff
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
module.exports = PickupInStoreDetailsType;