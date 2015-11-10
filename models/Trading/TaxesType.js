var AmountType = require('./AmountType');

function TaxesType(TotalTaxAmount, TaxDetails) {

	/**
	  Documentation
	   
                Type defining the Taxes container, which contains detailed sales tax information for an order line item. The Taxes container is only returned if the seller is using the Vertex- based Premium Sales Tax Engine solution. The information in this container
                supercedes/overrides the sales tax information in the ShippingDetails.SalesTax container.
            
	 */

	/**
	 * Arrays
	 *	TaxDetails: TaxDetailsType
	 */
	var _TotalTaxAmount;
	Object.defineProperty(this, 'TotalTaxAmount', {
		 get: function(){
			 return _TotalTaxAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_TotalTaxAmount = value; 
				}else{
					console.log('TotalTaxAmount expects type AmountType');
				}
			}
		}
	});
	this.TotalTaxAmount = TotalTaxAmount;
	this.TaxDetails = TaxDetails;
}
TaxesType.prototype.toJSON = function(with_null) {
	var json = { 
		TotalTaxAmount: (this.TotalTaxAmount === undefined)? null : this.TotalTaxAmount.toJSON(),
		TaxDetails: (this.TaxDetails === undefined)? null : this.TaxDetails
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
module.exports = TaxesType;