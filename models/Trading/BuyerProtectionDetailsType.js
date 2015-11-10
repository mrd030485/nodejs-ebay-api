function BuyerProtectionDetailsType(BuyerProtectionSource, BuyerProtectionStatus) {

	/**
	  Documentation
	   Type defining the <strong>ApplyBuyerProtection</strong> container, which consists of details related to whether or not the item is eligible for buyer protection and which of the buyer protection programs will cover the item.
	 */

	/**
	 * Arrays
	 */
	this.BuyerProtectionSource = BuyerProtectionSource;
	this.BuyerProtectionStatus = BuyerProtectionStatus;
}
BuyerProtectionDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		BuyerProtectionSource: (this.BuyerProtectionSource === undefined)? null : this.BuyerProtectionSource,
		BuyerProtectionStatus: (this.BuyerProtectionStatus === undefined)? null : this.BuyerProtectionStatus
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
module.exports = BuyerProtectionDetailsType;