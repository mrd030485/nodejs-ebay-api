var ShipmentLineItemType = require('./ShipmentLineItemType');

function ShipmentTrackingDetailsType(ShippingCarrierUsed, ShipmentTrackingNumber, ShipmentLineItem) {

	/**
	  Documentation
	   
                This type details the shipping carrier and shipment tracking number associated with a package shipment. It also contains information about the line items shipped through the Global Shipping program.
            
	 */

	/**
	 * Arrays
	 */
	var _ShipmentLineItem;
	Object.defineProperty(this, 'ShipmentLineItem', {
		 get: function(){
			 return _ShipmentLineItem;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ShipmentLineItemType){ 
					_ShipmentLineItem = value; 
				}else{
					console.log('ShipmentLineItem expects type ShipmentLineItemType');
				}
			}
		}
	});
	this.ShippingCarrierUsed = ShippingCarrierUsed;
	this.ShipmentTrackingNumber = ShipmentTrackingNumber;
	this.ShipmentLineItem = ShipmentLineItem;
}
ShipmentTrackingDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		ShippingCarrierUsed: (this.ShippingCarrierUsed === undefined)? null : this.ShippingCarrierUsed,
		ShipmentTrackingNumber: (this.ShipmentTrackingNumber === undefined)? null : this.ShipmentTrackingNumber,
		ShipmentLineItem: (this.ShipmentLineItem === undefined)? null : this.ShipmentLineItem.toJSON()
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
module.exports = ShipmentTrackingDetailsType;