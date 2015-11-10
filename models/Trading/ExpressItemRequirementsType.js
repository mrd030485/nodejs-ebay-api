function ExpressItemRequirementsType(SellerExpressEligible, ExpressOptOut, ExpressApproved, ExpressEligibleListingType, ExpressEnabledCategory, EligiblePayPalAccount, DomesticShippingCost, EligibleReturnPolicy, Picture, EligibleItemCondition, PriceAboveMinimum, PriceBelowMaximum, EligibleCheckout, NoPreapprovedBidderList, NoCharity, CombinedShippingDiscount, ShipFromEligibleCountry, PayPalAccountAcceptsUnconfirmedAddress) {

	/**
	  Documentation
	   This type is deprecated as the eBay Express is no longer available. 
	 */

	/**
	 * Arrays
	 */
	this.SellerExpressEligible = SellerExpressEligible;
	this.ExpressOptOut = ExpressOptOut;
	this.ExpressApproved = ExpressApproved;
	this.ExpressEligibleListingType = ExpressEligibleListingType;
	this.ExpressEnabledCategory = ExpressEnabledCategory;
	this.EligiblePayPalAccount = EligiblePayPalAccount;
	this.DomesticShippingCost = DomesticShippingCost;
	this.EligibleReturnPolicy = EligibleReturnPolicy;
	this.Picture = Picture;
	this.EligibleItemCondition = EligibleItemCondition;
	this.PriceAboveMinimum = PriceAboveMinimum;
	this.PriceBelowMaximum = PriceBelowMaximum;
	this.EligibleCheckout = EligibleCheckout;
	this.NoPreapprovedBidderList = NoPreapprovedBidderList;
	this.NoCharity = NoCharity;
	this.CombinedShippingDiscount = CombinedShippingDiscount;
	this.ShipFromEligibleCountry = ShipFromEligibleCountry;
	this.PayPalAccountAcceptsUnconfirmedAddress = PayPalAccountAcceptsUnconfirmedAddress;
}
ExpressItemRequirementsType.prototype.toJSON = function(with_null) {
	var json = { 
		SellerExpressEligible: (this.SellerExpressEligible === undefined)? null : this.SellerExpressEligible,
		ExpressOptOut: (this.ExpressOptOut === undefined)? null : this.ExpressOptOut,
		ExpressApproved: (this.ExpressApproved === undefined)? null : this.ExpressApproved,
		ExpressEligibleListingType: (this.ExpressEligibleListingType === undefined)? null : this.ExpressEligibleListingType,
		ExpressEnabledCategory: (this.ExpressEnabledCategory === undefined)? null : this.ExpressEnabledCategory,
		EligiblePayPalAccount: (this.EligiblePayPalAccount === undefined)? null : this.EligiblePayPalAccount,
		DomesticShippingCost: (this.DomesticShippingCost === undefined)? null : this.DomesticShippingCost,
		EligibleReturnPolicy: (this.EligibleReturnPolicy === undefined)? null : this.EligibleReturnPolicy,
		Picture: (this.Picture === undefined)? null : this.Picture,
		EligibleItemCondition: (this.EligibleItemCondition === undefined)? null : this.EligibleItemCondition,
		PriceAboveMinimum: (this.PriceAboveMinimum === undefined)? null : this.PriceAboveMinimum,
		PriceBelowMaximum: (this.PriceBelowMaximum === undefined)? null : this.PriceBelowMaximum,
		EligibleCheckout: (this.EligibleCheckout === undefined)? null : this.EligibleCheckout,
		NoPreapprovedBidderList: (this.NoPreapprovedBidderList === undefined)? null : this.NoPreapprovedBidderList,
		NoCharity: (this.NoCharity === undefined)? null : this.NoCharity,
		CombinedShippingDiscount: (this.CombinedShippingDiscount === undefined)? null : this.CombinedShippingDiscount,
		ShipFromEligibleCountry: (this.ShipFromEligibleCountry === undefined)? null : this.ShipFromEligibleCountry,
		PayPalAccountAcceptsUnconfirmedAddress: (this.PayPalAccountAcceptsUnconfirmedAddress === undefined)? null : this.PayPalAccountAcceptsUnconfirmedAddress
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
module.exports = ExpressItemRequirementsType;