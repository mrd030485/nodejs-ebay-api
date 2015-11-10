var AmountType = require('./AmountType');

function SalesTaxType(SalesTaxPercent, SalesTaxState, ShippingIncludedInTax, SalesTaxAmount) {

	/**
	  Documentation
	   
                Type for expressing sales tax data.
            
	 */

	/**
	 * Arrays
	 */
	var _SalesTaxAmount;
	Object.defineProperty(this, 'SalesTaxAmount', {
		 get: function(){
			 return _SalesTaxAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_SalesTaxAmount = value; 
				}else{
					console.log('SalesTaxAmount expects type AmountType');
				}
			}
		}
	});
	this.SalesTaxPercent = SalesTaxPercent;
	this.SalesTaxState = SalesTaxState;
	this.ShippingIncludedInTax = ShippingIncludedInTax;
	this.SalesTaxAmount = SalesTaxAmount;
}
SalesTaxType.prototype.toJSON = function(with_null) {
	var json = { 
		SalesTaxPercent: (this.SalesTaxPercent === undefined)? null : this.SalesTaxPercent,
		SalesTaxState: (this.SalesTaxState === undefined)? null : this.SalesTaxState,
		ShippingIncludedInTax: (this.ShippingIncludedInTax === undefined)? null : this.ShippingIncludedInTax,
		SalesTaxAmount: (this.SalesTaxAmount === undefined)? null : this.SalesTaxAmount.toJSON()
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
module.exports = SalesTaxType;