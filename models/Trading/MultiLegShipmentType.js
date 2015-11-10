var MultiLegShippingServiceType = require('./MultiLegShippingServiceType'),
	AddressType = require('./AddressType');

function MultiLegShipmentType(ShippingServiceDetails, ShipToAddress, ShippingTimeMin, ShippingTimeMax) {

	/**
	  Documentation
	   This type provides information about the shipping service, cost, address, and delivery estimates for the domestic leg of a Global Shipping Program shipment.
	 */

	/**
	 * Arrays
	 */
	var _ShippingServiceDetails;
	var _ShipToAddress;
	Object.defineProperty(this, 'ShippingServiceDetails', {
		 get: function(){
			 return _ShippingServiceDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MultiLegShippingServiceType){ 
					_ShippingServiceDetails = value; 
				}else{
					console.log('ShippingServiceDetails expects type MultiLegShippingServiceType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ShipToAddress', {
		 get: function(){
			 return _ShipToAddress;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AddressType){ 
					_ShipToAddress = value; 
				}else{
					console.log('ShipToAddress expects type AddressType');
				}
			}
		}
	});
	this.ShippingServiceDetails = ShippingServiceDetails;
	this.ShipToAddress = ShipToAddress;
	this.ShippingTimeMin = ShippingTimeMin;
	this.ShippingTimeMax = ShippingTimeMax;
}
MultiLegShipmentType.prototype.toJSON = function(with_null) {
	var json = { 
		ShippingServiceDetails: (this.ShippingServiceDetails === undefined)? null : this.ShippingServiceDetails.toJSON(),
		ShipToAddress: (this.ShipToAddress === undefined)? null : this.ShipToAddress.toJSON(),
		ShippingTimeMin: (this.ShippingTimeMin === undefined)? null : this.ShippingTimeMin,
		ShippingTimeMax: (this.ShippingTimeMax === undefined)? null : this.ShippingTimeMax
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
module.exports = MultiLegShipmentType;