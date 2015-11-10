function ReturnPolicyDetailsType(Refund, ReturnsWithin, ReturnsAccepted, Description, WarrantyOffered, WarrantyType, WarrantyDuration, EAN, ShippingCostPaidBy, RestockingFeeValue, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   
                Type for the return policy details of an item.
            
	 */

	/**
	 * Arrays
	 *	Refund: RefundDetailsType
	 *	ReturnsWithin: ReturnsWithinDetailsType
	 *	ReturnsAccepted: ReturnsAcceptedDetailsType
	 *	WarrantyOffered: WarrantyOfferedDetailsType
	 *	WarrantyType: WarrantyTypeDetailsType
	 *	WarrantyDuration: WarrantyDurationDetailsType
	 *	ShippingCostPaidBy: ShippingCostPaidByDetailsType
	 *	RestockingFeeValue: RestockingFeeValueDetailsType
	 */
	this.Refund = Refund;
	this.ReturnsWithin = ReturnsWithin;
	this.ReturnsAccepted = ReturnsAccepted;
	this.Description = Description;
	this.WarrantyOffered = WarrantyOffered;
	this.WarrantyType = WarrantyType;
	this.WarrantyDuration = WarrantyDuration;
	this.EAN = EAN;
	this.ShippingCostPaidBy = ShippingCostPaidBy;
	this.RestockingFeeValue = RestockingFeeValue;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
ReturnPolicyDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		Refund: (this.Refund === undefined)? null : this.Refund,
		ReturnsWithin: (this.ReturnsWithin === undefined)? null : this.ReturnsWithin,
		ReturnsAccepted: (this.ReturnsAccepted === undefined)? null : this.ReturnsAccepted,
		Description: (this.Description === undefined)? null : this.Description,
		WarrantyOffered: (this.WarrantyOffered === undefined)? null : this.WarrantyOffered,
		WarrantyType: (this.WarrantyType === undefined)? null : this.WarrantyType,
		WarrantyDuration: (this.WarrantyDuration === undefined)? null : this.WarrantyDuration,
		EAN: (this.EAN === undefined)? null : this.EAN,
		ShippingCostPaidBy: (this.ShippingCostPaidBy === undefined)? null : this.ShippingCostPaidBy,
		RestockingFeeValue: (this.RestockingFeeValue === undefined)? null : this.RestockingFeeValue,
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
module.exports = ReturnPolicyDetailsType;