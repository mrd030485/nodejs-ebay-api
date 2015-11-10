var ShippingServiceType = require('./ShippingServiceType'),
	AmountType = require('./AmountType');

function ShippingServiceCostOverrideType(ShippingServicePriority, ShippingServiceType, ShippingServiceCost, ShippingServiceAdditionalCost, ShippingSurcharge) {

	/**
	  Documentation
	   
                Type defining the <strong>ShippingServiceCostOverride</strong> container, which is used to override the flat shipping costs for each domestic and/or international shipping service that is defined in the <strong>domesticShippingPolicyInfoService</strong>
                and <strong>intlShippingPolicyInfoService</strong> containers of the Business Policies shipping profile. Shipping costs include the cost to ship one item, the cost to ship each additional identical item, and any shipping surcharges
                applicable to domestic shipping services. A <strong>ShippingServiceCostOverride</strong> container is required for every domestic and/or international shipping service that is defined in the Business Policies shipping profile.
                For example, you cannot override the shipping costs for one domestic shipping service but not the other domestic shipping services defined in the Business Policies shipping profile. The same rule applies to international shipping services.
            
	 */

	/**
	 * Arrays
	 */
	var _ShippingServiceType;
	var _ShippingServiceCost;
	var _ShippingServiceAdditionalCost;
	var _ShippingSurcharge;
	Object.defineProperty(this, 'ShippingServiceType', {
		 get: function(){
			 return _ShippingServiceType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ShippingServiceType){ 
					_ShippingServiceType = value; 
				}else{
					console.log('ShippingServiceType expects type ShippingServiceType');
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
	this.ShippingServicePriority = ShippingServicePriority;
	this.ShippingServiceType = ShippingServiceType;
	this.ShippingServiceCost = ShippingServiceCost;
	this.ShippingServiceAdditionalCost = ShippingServiceAdditionalCost;
	this.ShippingSurcharge = ShippingSurcharge;
}
ShippingServiceCostOverrideType.prototype.toJSON = function(with_null) {
	var json = { 
		ShippingServicePriority: (this.ShippingServicePriority === undefined)? null : this.ShippingServicePriority,
		ShippingServiceType: (this.ShippingServiceType === undefined)? null : this.ShippingServiceType.toJSON(),
		ShippingServiceCost: (this.ShippingServiceCost === undefined)? null : this.ShippingServiceCost.toJSON(),
		ShippingServiceAdditionalCost: (this.ShippingServiceAdditionalCost === undefined)? null : this.ShippingServiceAdditionalCost.toJSON(),
		ShippingSurcharge: (this.ShippingSurcharge === undefined)? null : this.ShippingSurcharge.toJSON()
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
module.exports = ShippingServiceCostOverrideType;