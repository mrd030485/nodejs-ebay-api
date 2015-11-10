var AmountType = require('./AmountType');

function ShippingServiceOptionsType(ShippingInsuranceCost, ShippingService, ShippingServiceCost, ShippingServiceAdditionalCost, ShippingServicePriority, ExpeditedService, ShippingTimeMin, ShippingTimeMax, ShippingSurcharge, FreeShipping, LocalPickup, ImportCharge, ShippingPackageInfo, ShippingServiceCutOffTime, LogisticPlanType) {

	/**
	  Documentation
	   Container consisting of shipping costs and other details related to a domestic shipping service. An exception to the domestic shipping service rule is seen in the ShippingServiceSelected container returned under the Order and Transaction
                    containers in order and order line item retrieval calls such as GetOrders or GetItemTransactions. In this scenario, the SelectedShippingService container consists of either domestic or international shipping service data, based on
                    the selected service according to the buyer's shipping address. <br/><br/> If one or more international shipping services are provided, the seller must specify at least one domestic shipping service as well. <br/><br/>
                    <span class="tablenote"> <strong>Note:</strong> For GetItemTransactions and GetSellerTransactions, this container does not return accurate shipping service and cost information for multiple line item orders. Use GetOrders
                    instead, and provide the order's combined <strong>OrderID</strong> to retrieve this information. </span>
	 */

	/**
	 * Arrays
	 *	ShippingPackageInfo: ShippingPackageInfoType
	 */
	var _ShippingInsuranceCost;
	var _ShippingServiceCost;
	var _ShippingServiceAdditionalCost;
	var _ShippingSurcharge;
	var _ImportCharge;
	Object.defineProperty(this, 'ShippingInsuranceCost', {
		 get: function(){
			 return _ShippingInsuranceCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ShippingInsuranceCost = value; 
				}else{
					console.log('ShippingInsuranceCost expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ShippingServiceCost', {
		 get: function(){
			 return _ShippingServiceCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ShippingServiceCost = value; 
				}else{
					console.log('ShippingServiceCost expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ShippingServiceAdditionalCost', {
		 get: function(){
			 return _ShippingServiceAdditionalCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ShippingServiceAdditionalCost = value; 
				}else{
					console.log('ShippingServiceAdditionalCost expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ShippingSurcharge', {
		 get: function(){
			 return _ShippingSurcharge;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ShippingSurcharge = value; 
				}else{
					console.log('ShippingSurcharge expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ImportCharge', {
		 get: function(){
			 return _ImportCharge;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ImportCharge = value; 
				}else{
					console.log('ImportCharge expects type AmountType');
				}
			}
		}
	});
	this.ShippingInsuranceCost = ShippingInsuranceCost;
	this.ShippingService = ShippingService;
	this.ShippingServiceCost = ShippingServiceCost;
	this.ShippingServiceAdditionalCost = ShippingServiceAdditionalCost;
	this.ShippingServicePriority = ShippingServicePriority;
	this.ExpeditedService = ExpeditedService;
	this.ShippingTimeMin = ShippingTimeMin;
	this.ShippingTimeMax = ShippingTimeMax;
	this.ShippingSurcharge = ShippingSurcharge;
	this.FreeShipping = FreeShipping;
	this.LocalPickup = LocalPickup;
	this.ImportCharge = ImportCharge;
	this.ShippingPackageInfo = ShippingPackageInfo;
	this.ShippingServiceCutOffTime = ShippingServiceCutOffTime;
	this.LogisticPlanType = LogisticPlanType;
}
ShippingServiceOptionsType.prototype.toJSON = function(with_null) {
	var json = { 
		ShippingInsuranceCost: (this.ShippingInsuranceCost === undefined)? null : this.ShippingInsuranceCost.toJSON(),
		ShippingService: (this.ShippingService === undefined)? null : this.ShippingService,
		ShippingServiceCost: (this.ShippingServiceCost === undefined)? null : this.ShippingServiceCost.toJSON(),
		ShippingServiceAdditionalCost: (this.ShippingServiceAdditionalCost === undefined)? null : this.ShippingServiceAdditionalCost.toJSON(),
		ShippingServicePriority: (this.ShippingServicePriority === undefined)? null : this.ShippingServicePriority,
		ExpeditedService: (this.ExpeditedService === undefined)? null : this.ExpeditedService,
		ShippingTimeMin: (this.ShippingTimeMin === undefined)? null : this.ShippingTimeMin,
		ShippingTimeMax: (this.ShippingTimeMax === undefined)? null : this.ShippingTimeMax,
		ShippingSurcharge: (this.ShippingSurcharge === undefined)? null : this.ShippingSurcharge.toJSON(),
		FreeShipping: (this.FreeShipping === undefined)? null : this.FreeShipping,
		LocalPickup: (this.LocalPickup === undefined)? null : this.LocalPickup,
		ImportCharge: (this.ImportCharge === undefined)? null : this.ImportCharge.toJSON(),
		ShippingPackageInfo: (this.ShippingPackageInfo === undefined)? null : this.ShippingPackageInfo,
		ShippingServiceCutOffTime: (this.ShippingServiceCutOffTime === undefined)? null : this.ShippingServiceCutOffTime,
		LogisticPlanType: (this.LogisticPlanType === undefined)? null : this.LogisticPlanType
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
module.exports = ShippingServiceOptionsType;