var AddressType = require('./AddressType');

function BuyerType(ShippingAddress, BuyerTaxIdentifier) {

	/**
	  Documentation
	   
                This type is used by various 'Get' calls, including <b>GetItem</b> and <b>GetOrders</b>. Only the order management calls return the <b>BuyerTaxIdentifier</b> container, and each call that uses <b>BuyerType</b>
                uses the <b>ShippingAddress</b> container a little differently.
            
	 */

	/**
	 * Arrays
	 *	BuyerTaxIdentifier: TaxIdentifierType
	 */
	var _ShippingAddress;
	Object.defineProperty(this, 'ShippingAddress', {
		 get: function(){
			 return _ShippingAddress;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AddressType){ 
					_ShippingAddress = value; 
				}else{
					console.log('ShippingAddress expects type AddressType');
				}
			}
		}
	});
	this.ShippingAddress = ShippingAddress;
	this.BuyerTaxIdentifier = BuyerTaxIdentifier;
}
BuyerType.prototype.toJSON = function(with_null) {
	var json = { 
		ShippingAddress: (this.ShippingAddress === undefined)? null : this.ShippingAddress.toJSON(),
		BuyerTaxIdentifier: (this.BuyerTaxIdentifier === undefined)? null : this.BuyerTaxIdentifier
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
module.exports = BuyerType;