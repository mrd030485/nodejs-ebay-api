var AmountType = require('./AmountType');

function InternationalShippingServiceOptionsType(ShippingService, ShippingServiceCost, ShippingServiceAdditionalCost, ShippingServicePriority, ShipToLocation, ShippingInsuranceCost, ImportCharge, ShippingServiceCutOffTime) {

	/**
	  Documentation
	   
                Container consisting of shipping costs and other details related to an international shipping service. If one or more international shipping services are provided, the seller must specify at least one domestic shipping service as well.
            
	 */

	/**
	 * Arrays
	 */
	var _ShippingServiceCost;
	var _ShippingServiceAdditionalCost;
	var _ShippingInsuranceCost;
	var _ImportCharge;
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
	this.ShippingService = ShippingService;
	this.ShippingServiceCost = ShippingServiceCost;
	this.ShippingServiceAdditionalCost = ShippingServiceAdditionalCost;
	this.ShippingServicePriority = ShippingServicePriority;
	this.ShipToLocation = ShipToLocation;
	this.ShippingInsuranceCost = ShippingInsuranceCost;
	this.ImportCharge = ImportCharge;
	this.ShippingServiceCutOffTime = ShippingServiceCutOffTime;
}
InternationalShippingServiceOptionsType.prototype.toJSON = function(with_null) {
	var json = { 
		ShippingService: (this.ShippingService === undefined)? null : this.ShippingService,
		ShippingServiceCost: (this.ShippingServiceCost === undefined)? null : this.ShippingServiceCost.toJSON(),
		ShippingServiceAdditionalCost: (this.ShippingServiceAdditionalCost === undefined)? null : this.ShippingServiceAdditionalCost.toJSON(),
		ShippingServicePriority: (this.ShippingServicePriority === undefined)? null : this.ShippingServicePriority,
		ShipToLocation: (this.ShipToLocation === undefined)? null : this.ShipToLocation,
		ShippingInsuranceCost: (this.ShippingInsuranceCost === undefined)? null : this.ShippingInsuranceCost.toJSON(),
		ImportCharge: (this.ImportCharge === undefined)? null : this.ImportCharge.toJSON(),
		ShippingServiceCutOffTime: (this.ShippingServiceCutOffTime === undefined)? null : this.ShippingServiceCutOffTime
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
module.exports = InternationalShippingServiceOptionsType;