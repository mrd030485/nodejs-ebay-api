function ReturnPolicyType(RefundOption, Refund, ReturnsWithinOption, ReturnsWithin, ReturnsAcceptedOption, ReturnsAccepted, Description, WarrantyOfferedOption, WarrantyOffered, WarrantyTypeOption, WarrantyType, WarrantyDurationOption, WarrantyDuration, EAN, ShippingCostPaidByOption, ShippingCostPaidBy, RestockingFeeValue, RestockingFeeValueOption, ExtendedHolidayReturns) {

	/**
	  Documentation
	   
                Type used to express the details of the return policy for an item.
            
	 */

	/**
	 * Arrays
	 */
	this.RefundOption = RefundOption;
	this.Refund = Refund;
	this.ReturnsWithinOption = ReturnsWithinOption;
	this.ReturnsWithin = ReturnsWithin;
	this.ReturnsAcceptedOption = ReturnsAcceptedOption;
	this.ReturnsAccepted = ReturnsAccepted;
	this.Description = Description;
	this.WarrantyOfferedOption = WarrantyOfferedOption;
	this.WarrantyOffered = WarrantyOffered;
	this.WarrantyTypeOption = WarrantyTypeOption;
	this.WarrantyType = WarrantyType;
	this.WarrantyDurationOption = WarrantyDurationOption;
	this.WarrantyDuration = WarrantyDuration;
	this.EAN = EAN;
	this.ShippingCostPaidByOption = ShippingCostPaidByOption;
	this.ShippingCostPaidBy = ShippingCostPaidBy;
	this.RestockingFeeValue = RestockingFeeValue;
	this.RestockingFeeValueOption = RestockingFeeValueOption;
	this.ExtendedHolidayReturns = ExtendedHolidayReturns;
}
ReturnPolicyType.prototype.toJSON = function(with_null) {
	var json = { 
		RefundOption: (this.RefundOption === undefined)? null : this.RefundOption,
		Refund: (this.Refund === undefined)? null : this.Refund,
		ReturnsWithinOption: (this.ReturnsWithinOption === undefined)? null : this.ReturnsWithinOption,
		ReturnsWithin: (this.ReturnsWithin === undefined)? null : this.ReturnsWithin,
		ReturnsAcceptedOption: (this.ReturnsAcceptedOption === undefined)? null : this.ReturnsAcceptedOption,
		ReturnsAccepted: (this.ReturnsAccepted === undefined)? null : this.ReturnsAccepted,
		Description: (this.Description === undefined)? null : this.Description,
		WarrantyOfferedOption: (this.WarrantyOfferedOption === undefined)? null : this.WarrantyOfferedOption,
		WarrantyOffered: (this.WarrantyOffered === undefined)? null : this.WarrantyOffered,
		WarrantyTypeOption: (this.WarrantyTypeOption === undefined)? null : this.WarrantyTypeOption,
		WarrantyType: (this.WarrantyType === undefined)? null : this.WarrantyType,
		WarrantyDurationOption: (this.WarrantyDurationOption === undefined)? null : this.WarrantyDurationOption,
		WarrantyDuration: (this.WarrantyDuration === undefined)? null : this.WarrantyDuration,
		EAN: (this.EAN === undefined)? null : this.EAN,
		ShippingCostPaidByOption: (this.ShippingCostPaidByOption === undefined)? null : this.ShippingCostPaidByOption,
		ShippingCostPaidBy: (this.ShippingCostPaidBy === undefined)? null : this.ShippingCostPaidBy,
		RestockingFeeValue: (this.RestockingFeeValue === undefined)? null : this.RestockingFeeValue,
		RestockingFeeValueOption: (this.RestockingFeeValueOption === undefined)? null : this.RestockingFeeValueOption,
		ExtendedHolidayReturns: (this.ExtendedHolidayReturns === undefined)? null : this.ExtendedHolidayReturns
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
module.exports = ReturnPolicyType;