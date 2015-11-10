var AmountType = require('./AmountType');

function MultiLegShippingServiceType(ShippingService, TotalShippingCost) {

	/**
	  Documentation
	   
                This type specifies the shipping service and cost of the domestic leg of a Global Shipping Program shipment.
            
	 */

	/**
	 * Arrays
	 */
	var _TotalShippingCost;
	Object.defineProperty(this, 'TotalShippingCost', {
		 get: function(){
			 return _TotalShippingCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_TotalShippingCost = value; 
				}else{
					console.log('TotalShippingCost expects type AmountType');
				}
			}
		}
	});
	this.ShippingService = ShippingService;
	this.TotalShippingCost = TotalShippingCost;
}
MultiLegShippingServiceType.prototype.toJSON = function(with_null) {
	var json = { 
		ShippingService: (this.ShippingService === undefined)? null : this.ShippingService,
		TotalShippingCost: (this.TotalShippingCost === undefined)? null : this.TotalShippingCost.toJSON()
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
module.exports = MultiLegShippingServiceType;