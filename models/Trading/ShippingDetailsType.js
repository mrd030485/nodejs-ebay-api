var CalculatedShippingRateType = require('./CalculatedShippingRateType'),
	AmountType = require('./AmountType'),
	InsuranceOptionCodeType = require('./InsuranceOptionCodeType'),
	SalesTaxType = require('./SalesTaxType'),
	ShippingRateTypeCodeType = require('./ShippingRateTypeCodeType'),
	ShippingTypeCodeType = require('./ShippingTypeCodeType'),
	TaxTableType = require('./TaxTableType'),
	InsuranceDetailsType = require('./InsuranceDetailsType'),
	FlatShippingDiscountType = require('./FlatShippingDiscountType'),
	CalculatedShippingDiscountType = require('./CalculatedShippingDiscountType'),
	PromotionalShippingDiscountDetailsType = require('./PromotionalShippingDiscountDetailsType'),
	RateTableDetailsType = require('./RateTableDetailsType');

function ShippingDetailsType(AllowPaymentEdit, ApplyShippingDiscount, GlobalShipping, CalculatedShippingRate, ChangePaymentInstructions, InsuranceFee, InsuranceOption, InsuranceWanted, PaymentEdited, PaymentInstructions, SalesTax, ShippingRateErrorMessage, ShippingRateType, ShippingServiceOptions, InternationalShippingServiceOption, ShippingType, SellingManagerSalesRecordNumber, ThirdPartyCheckout, TaxTable, GetItFast, ShippingServiceUsed, DefaultShippingCost, InsuranceDetails, InternationalInsuranceDetails, ShippingDiscountProfileID, FlatShippingDiscount, CalculatedShippingDiscount, PromotionalShippingDiscount, InternationalShippingDiscountProfileID, InternationalFlatShippingDiscount, InternationalCalculatedShippingDiscount, InternationalPromotionalShippingDiscount, PromotionalShippingDiscountDetails, CODCost, ExcludeShipToLocation, SellerExcludeShipToLocationsPreference, ShipmentTrackingDetails, RateTableDetails) {

	/**
	  Documentation
	   
                Type defining the ShippingDetails container, which contains the shipping-related details for an item (pre-checkout) or order (post-checkout). <br/><br/> <span class="tablenote"> <strong>IMPORTANT:</strong> To avoid loss of
                shipping details when revising a listing, you must include all <strong>ShippingDetails</strong> fields that were originally provided. Do not omit any tag, even if its value does not change. Omitting a shipping field when revising
                an item will remove that detail from the listing. </span>
            
	 */

	/**
	 * Arrays
	 *	ShippingServiceOptions: ShippingServiceOptionsType
	 *	InternationalShippingServiceOption: InternationalShippingServiceOptionsType
	 *	ShipmentTrackingDetails: ShipmentTrackingDetailsType
	 */
	var _CalculatedShippingRate;
	var _InsuranceFee;
	var _InsuranceOption;
	var _SalesTax;
	var _ShippingRateType;
	var _ShippingType;
	var _TaxTable;
	var _DefaultShippingCost;
	var _InsuranceDetails;
	var _InternationalInsuranceDetails;
	var _FlatShippingDiscount;
	var _CalculatedShippingDiscount;
	var _InternationalFlatShippingDiscount;
	var _InternationalCalculatedShippingDiscount;
	var _PromotionalShippingDiscountDetails;
	var _CODCost;
	var _RateTableDetails;
	Object.defineProperty(this, 'CalculatedShippingRate', {
		 get: function(){
			 return _CalculatedShippingRate;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CalculatedShippingRateType){ 
					_CalculatedShippingRate = value; 
				}else{
					console.log('CalculatedShippingRate expects type CalculatedShippingRateType');
				}
			}
		}
	});
	Object.defineProperty(this, 'InsuranceFee', {
		 get: function(){
			 return _InsuranceFee;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_InsuranceFee = value; 
				}else{
					console.log('InsuranceFee expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'InsuranceOption', {
		 get: function(){
			 return _InsuranceOption;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof InsuranceOptionCodeType){ 
					_InsuranceOption = value; 
				}else{
					console.log('InsuranceOption expects type InsuranceOptionCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SalesTax', {
		 get: function(){
			 return _SalesTax;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SalesTaxType){ 
					_SalesTax = value; 
				}else{
					console.log('SalesTax expects type SalesTaxType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ShippingRateType', {
		 get: function(){
			 return _ShippingRateType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ShippingRateTypeCodeType){ 
					_ShippingRateType = value; 
				}else{
					console.log('ShippingRateType expects type ShippingRateTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ShippingType', {
		 get: function(){
			 return _ShippingType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ShippingTypeCodeType){ 
					_ShippingType = value; 
				}else{
					console.log('ShippingType expects type ShippingTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TaxTable', {
		 get: function(){
			 return _TaxTable;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof TaxTableType){ 
					_TaxTable = value; 
				}else{
					console.log('TaxTable expects type TaxTableType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DefaultShippingCost', {
		 get: function(){
			 return _DefaultShippingCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_DefaultShippingCost = value; 
				}else{
					console.log('DefaultShippingCost expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'InsuranceDetails', {
		 get: function(){
			 return _InsuranceDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof InsuranceDetailsType){ 
					_InsuranceDetails = value; 
				}else{
					console.log('InsuranceDetails expects type InsuranceDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'InternationalInsuranceDetails', {
		 get: function(){
			 return _InternationalInsuranceDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof InsuranceDetailsType){ 
					_InternationalInsuranceDetails = value; 
				}else{
					console.log('InternationalInsuranceDetails expects type InsuranceDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'FlatShippingDiscount', {
		 get: function(){
			 return _FlatShippingDiscount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FlatShippingDiscountType){ 
					_FlatShippingDiscount = value; 
				}else{
					console.log('FlatShippingDiscount expects type FlatShippingDiscountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CalculatedShippingDiscount', {
		 get: function(){
			 return _CalculatedShippingDiscount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CalculatedShippingDiscountType){ 
					_CalculatedShippingDiscount = value; 
				}else{
					console.log('CalculatedShippingDiscount expects type CalculatedShippingDiscountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'InternationalFlatShippingDiscount', {
		 get: function(){
			 return _InternationalFlatShippingDiscount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FlatShippingDiscountType){ 
					_InternationalFlatShippingDiscount = value; 
				}else{
					console.log('InternationalFlatShippingDiscount expects type FlatShippingDiscountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'InternationalCalculatedShippingDiscount', {
		 get: function(){
			 return _InternationalCalculatedShippingDiscount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CalculatedShippingDiscountType){ 
					_InternationalCalculatedShippingDiscount = value; 
				}else{
					console.log('InternationalCalculatedShippingDiscount expects type CalculatedShippingDiscountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PromotionalShippingDiscountDetails', {
		 get: function(){
			 return _PromotionalShippingDiscountDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PromotionalShippingDiscountDetailsType){ 
					_PromotionalShippingDiscountDetails = value; 
				}else{
					console.log('PromotionalShippingDiscountDetails expects type PromotionalShippingDiscountDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CODCost', {
		 get: function(){
			 return _CODCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_CODCost = value; 
				}else{
					console.log('CODCost expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'RateTableDetails', {
		 get: function(){
			 return _RateTableDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof RateTableDetailsType){ 
					_RateTableDetails = value; 
				}else{
					console.log('RateTableDetails expects type RateTableDetailsType');
				}
			}
		}
	});
	this.AllowPaymentEdit = AllowPaymentEdit;
	this.ApplyShippingDiscount = ApplyShippingDiscount;
	this.GlobalShipping = GlobalShipping;
	this.CalculatedShippingRate = CalculatedShippingRate;
	this.ChangePaymentInstructions = ChangePaymentInstructions;
	this.InsuranceFee = InsuranceFee;
	this.InsuranceOption = InsuranceOption;
	this.InsuranceWanted = InsuranceWanted;
	this.PaymentEdited = PaymentEdited;
	this.PaymentInstructions = PaymentInstructions;
	this.SalesTax = SalesTax;
	this.ShippingRateErrorMessage = ShippingRateErrorMessage;
	this.ShippingRateType = ShippingRateType;
	this.ShippingServiceOptions = ShippingServiceOptions;
	this.InternationalShippingServiceOption = InternationalShippingServiceOption;
	this.ShippingType = ShippingType;
	this.SellingManagerSalesRecordNumber = SellingManagerSalesRecordNumber;
	this.ThirdPartyCheckout = ThirdPartyCheckout;
	this.TaxTable = TaxTable;
	this.GetItFast = GetItFast;
	this.ShippingServiceUsed = ShippingServiceUsed;
	this.DefaultShippingCost = DefaultShippingCost;
	this.InsuranceDetails = InsuranceDetails;
	this.InternationalInsuranceDetails = InternationalInsuranceDetails;
	this.ShippingDiscountProfileID = ShippingDiscountProfileID;
	this.FlatShippingDiscount = FlatShippingDiscount;
	this.CalculatedShippingDiscount = CalculatedShippingDiscount;
	this.PromotionalShippingDiscount = PromotionalShippingDiscount;
	this.InternationalShippingDiscountProfileID = InternationalShippingDiscountProfileID;
	this.InternationalFlatShippingDiscount = InternationalFlatShippingDiscount;
	this.InternationalCalculatedShippingDiscount = InternationalCalculatedShippingDiscount;
	this.InternationalPromotionalShippingDiscount = InternationalPromotionalShippingDiscount;
	this.PromotionalShippingDiscountDetails = PromotionalShippingDiscountDetails;
	this.CODCost = CODCost;
	this.ExcludeShipToLocation = ExcludeShipToLocation;
	this.SellerExcludeShipToLocationsPreference = SellerExcludeShipToLocationsPreference;
	this.ShipmentTrackingDetails = ShipmentTrackingDetails;
	this.RateTableDetails = RateTableDetails;
}
ShippingDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		AllowPaymentEdit: (this.AllowPaymentEdit === undefined)? null : this.AllowPaymentEdit,
		ApplyShippingDiscount: (this.ApplyShippingDiscount === undefined)? null : this.ApplyShippingDiscount,
		GlobalShipping: (this.GlobalShipping === undefined)? null : this.GlobalShipping,
		CalculatedShippingRate: (this.CalculatedShippingRate === undefined)? null : this.CalculatedShippingRate.toJSON(),
		ChangePaymentInstructions: (this.ChangePaymentInstructions === undefined)? null : this.ChangePaymentInstructions,
		InsuranceFee: (this.InsuranceFee === undefined)? null : this.InsuranceFee.toJSON(),
		InsuranceOption: (this.InsuranceOption === undefined)? null : this.InsuranceOption.toJSON(),
		InsuranceWanted: (this.InsuranceWanted === undefined)? null : this.InsuranceWanted,
		PaymentEdited: (this.PaymentEdited === undefined)? null : this.PaymentEdited,
		PaymentInstructions: (this.PaymentInstructions === undefined)? null : this.PaymentInstructions,
		SalesTax: (this.SalesTax === undefined)? null : this.SalesTax.toJSON(),
		ShippingRateErrorMessage: (this.ShippingRateErrorMessage === undefined)? null : this.ShippingRateErrorMessage,
		ShippingRateType: (this.ShippingRateType === undefined)? null : this.ShippingRateType.toJSON(),
		ShippingServiceOptions: (this.ShippingServiceOptions === undefined)? null : this.ShippingServiceOptions,
		InternationalShippingServiceOption: (this.InternationalShippingServiceOption === undefined)? null : this.InternationalShippingServiceOption,
		ShippingType: (this.ShippingType === undefined)? null : this.ShippingType.toJSON(),
		SellingManagerSalesRecordNumber: (this.SellingManagerSalesRecordNumber === undefined)? null : this.SellingManagerSalesRecordNumber,
		ThirdPartyCheckout: (this.ThirdPartyCheckout === undefined)? null : this.ThirdPartyCheckout,
		TaxTable: (this.TaxTable === undefined)? null : this.TaxTable.toJSON(),
		GetItFast: (this.GetItFast === undefined)? null : this.GetItFast,
		ShippingServiceUsed: (this.ShippingServiceUsed === undefined)? null : this.ShippingServiceUsed,
		DefaultShippingCost: (this.DefaultShippingCost === undefined)? null : this.DefaultShippingCost.toJSON(),
		InsuranceDetails: (this.InsuranceDetails === undefined)? null : this.InsuranceDetails.toJSON(),
		InternationalInsuranceDetails: (this.InternationalInsuranceDetails === undefined)? null : this.InternationalInsuranceDetails.toJSON(),
		ShippingDiscountProfileID: (this.ShippingDiscountProfileID === undefined)? null : this.ShippingDiscountProfileID,
		FlatShippingDiscount: (this.FlatShippingDiscount === undefined)? null : this.FlatShippingDiscount.toJSON(),
		CalculatedShippingDiscount: (this.CalculatedShippingDiscount === undefined)? null : this.CalculatedShippingDiscount.toJSON(),
		PromotionalShippingDiscount: (this.PromotionalShippingDiscount === undefined)? null : this.PromotionalShippingDiscount,
		InternationalShippingDiscountProfileID: (this.InternationalShippingDiscountProfileID === undefined)? null : this.InternationalShippingDiscountProfileID,
		InternationalFlatShippingDiscount: (this.InternationalFlatShippingDiscount === undefined)? null : this.InternationalFlatShippingDiscount.toJSON(),
		InternationalCalculatedShippingDiscount: (this.InternationalCalculatedShippingDiscount === undefined)? null : this.InternationalCalculatedShippingDiscount.toJSON(),
		InternationalPromotionalShippingDiscount: (this.InternationalPromotionalShippingDiscount === undefined)? null : this.InternationalPromotionalShippingDiscount,
		PromotionalShippingDiscountDetails: (this.PromotionalShippingDiscountDetails === undefined)? null : this.PromotionalShippingDiscountDetails.toJSON(),
		CODCost: (this.CODCost === undefined)? null : this.CODCost.toJSON(),
		ExcludeShipToLocation: (this.ExcludeShipToLocation === undefined)? null : this.ExcludeShipToLocation,
		SellerExcludeShipToLocationsPreference: (this.SellerExcludeShipToLocationsPreference === undefined)? null : this.SellerExcludeShipToLocationsPreference,
		ShipmentTrackingDetails: (this.ShipmentTrackingDetails === undefined)? null : this.ShipmentTrackingDetails,
		RateTableDetails: (this.RateTableDetails === undefined)? null : this.RateTableDetails.toJSON()
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
module.exports = ShippingDetailsType;