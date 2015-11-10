var TaxTypeCodeType = require('./TaxTypeCodeType'),
	TaxDescriptionCodeType = require('./TaxDescriptionCodeType'),
	AmountType = require('./AmountType');

function TaxDetailsType(Imposition, TaxDescription, TaxAmount, TaxOnSubtotalAmount, TaxOnShippingAmount, TaxOnHandlingAmount, TaxCode) {

	/**
	  Documentation
	   
                Type defining the TaxDetails container, which consists of detailed sales tax information for an order line item, including the tax type and description, sales tax on the item cost, and sales tax related to shipping and handling. The information in this
                container supercedes/overrides the sales tax information in the ShippingDetails.SalesTax container.
            
	 */

	/**
	 * Arrays
	 */
	var _Imposition;
	var _TaxDescription;
	var _TaxAmount;
	var _TaxOnSubtotalAmount;
	var _TaxOnShippingAmount;
	var _TaxOnHandlingAmount;
	Object.defineProperty(this, 'Imposition', {
		 get: function(){
			 return _Imposition;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof TaxTypeCodeType){ 
					_Imposition = value; 
				}else{
					console.log('Imposition expects type TaxTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TaxDescription', {
		 get: function(){
			 return _TaxDescription;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof TaxDescriptionCodeType){ 
					_TaxDescription = value; 
				}else{
					console.log('TaxDescription expects type TaxDescriptionCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TaxAmount', {
		 get: function(){
			 return _TaxAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_TaxAmount = value; 
				}else{
					console.log('TaxAmount expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TaxOnSubtotalAmount', {
		 get: function(){
			 return _TaxOnSubtotalAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_TaxOnSubtotalAmount = value; 
				}else{
					console.log('TaxOnSubtotalAmount expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TaxOnShippingAmount', {
		 get: function(){
			 return _TaxOnShippingAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_TaxOnShippingAmount = value; 
				}else{
					console.log('TaxOnShippingAmount expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TaxOnHandlingAmount', {
		 get: function(){
			 return _TaxOnHandlingAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_TaxOnHandlingAmount = value; 
				}else{
					console.log('TaxOnHandlingAmount expects type AmountType');
				}
			}
		}
	});
	this.Imposition = Imposition;
	this.TaxDescription = TaxDescription;
	this.TaxAmount = TaxAmount;
	this.TaxOnSubtotalAmount = TaxOnSubtotalAmount;
	this.TaxOnShippingAmount = TaxOnShippingAmount;
	this.TaxOnHandlingAmount = TaxOnHandlingAmount;
	this.TaxCode = TaxCode;
}
TaxDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		Imposition: (this.Imposition === undefined)? null : this.Imposition.toJSON(),
		TaxDescription: (this.TaxDescription === undefined)? null : this.TaxDescription.toJSON(),
		TaxAmount: (this.TaxAmount === undefined)? null : this.TaxAmount.toJSON(),
		TaxOnSubtotalAmount: (this.TaxOnSubtotalAmount === undefined)? null : this.TaxOnSubtotalAmount.toJSON(),
		TaxOnShippingAmount: (this.TaxOnShippingAmount === undefined)? null : this.TaxOnShippingAmount.toJSON(),
		TaxOnHandlingAmount: (this.TaxOnHandlingAmount === undefined)? null : this.TaxOnHandlingAmount.toJSON(),
		TaxCode: (this.TaxCode === undefined)? null : this.TaxCode
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
module.exports = TaxDetailsType;