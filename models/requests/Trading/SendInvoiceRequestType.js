var ItemIDType = require('../../Trading/ItemIDType'),
	OrderIDType = require('../../Trading/OrderIDType'),
	SalesTaxType = require('../../Trading/SalesTaxType'),
	AmountType = require('../../Trading/AmountType'),
	SKUType = require('../../Trading/SKUType');

function SendInvoiceRequestType(ItemID, TransactionID, OrderID, InternationalShippingServiceOptions, ShippingServiceOptions, SalesTax, InsuranceOption, InsuranceFee, PaymentMethods, PayPalEmailAddress, CheckoutInstructions, EmailCopyToSeller, CODCost, SKU, OrderLineItemID, AdjustmentAmount) {

	/**
	  Documentation
	   Enables a seller to send an order invoice to a buyer. Where applicable, updates to shipping, payment methods, and sales tax made in this request are applied to the specified order as a whole and to the individual order line items whose
                    data are stored in individual <b>Transaction</b> objects.
	 */

	/**
	 * Arrays
	 *	InternationalShippingServiceOptions: InternationalShippingServiceOptionsType
	 *	ShippingServiceOptions: ShippingServiceOptionsType
	 */
	var _ItemID;
	var _OrderID;
	var _SalesTax;
	var _InsuranceFee;
	var _CODCost;
	var _SKU;
	var _AdjustmentAmount;
	Object.defineProperty(this, 'ItemID', {
		 get: function(){
			 return _ItemID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemIDType){ 
					_ItemID = value; 
				}else{
					console.log('ItemID expects type ItemIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'OrderID', {
		 get: function(){
			 return _OrderID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof OrderIDType){ 
					_OrderID = value; 
				}else{
					console.log('OrderID expects type OrderIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SalesTax', {
		 get: function(){
			 return _SalesTax;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SalesTaxType){ 
					_SalesTax = value; 
				}else{
					console.log('SalesTax expects type SalesTaxType');
				}
			}
		}
	});
	Object.defineProperty(this, 'InsuranceFee', {
		 get: function(){
			 return _InsuranceFee;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_InsuranceFee = value; 
				}else{
					console.log('InsuranceFee expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CODCost', {
		 get: function(){
			 return _CODCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_CODCost = value; 
				}else{
					console.log('CODCost expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SKU', {
		 get: function(){
			 return _SKU;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SKUType){ 
					_SKU = value; 
				}else{
					console.log('SKU expects type SKUType');
				}
			}
		}
	});
	Object.defineProperty(this, 'AdjustmentAmount', {
		 get: function(){
			 return _AdjustmentAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_AdjustmentAmount = value; 
				}else{
					console.log('AdjustmentAmount expects type AmountType');
				}
			}
		}
	});
	this.ItemID = ItemID;
	this.TransactionID = TransactionID;
	this.OrderID = OrderID;
	this.InternationalShippingServiceOptions = InternationalShippingServiceOptions;
	this.ShippingServiceOptions = ShippingServiceOptions;
	this.SalesTax = SalesTax;
	this.InsuranceOption = InsuranceOption;
	this.InsuranceFee = InsuranceFee;
	this.PaymentMethods = PaymentMethods;
	this.PayPalEmailAddress = PayPalEmailAddress;
	this.CheckoutInstructions = CheckoutInstructions;
	this.EmailCopyToSeller = EmailCopyToSeller;
	this.CODCost = CODCost;
	this.SKU = SKU;
	this.OrderLineItemID = OrderLineItemID;
	this.AdjustmentAmount = AdjustmentAmount;
}
SendInvoiceRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		OrderID: (this.OrderID === undefined)? null : this.OrderID.toJSON(),
		InternationalShippingServiceOptions: (this.InternationalShippingServiceOptions === undefined)? null : this.InternationalShippingServiceOptions,
		ShippingServiceOptions: (this.ShippingServiceOptions === undefined)? null : this.ShippingServiceOptions,
		SalesTax: (this.SalesTax === undefined)? null : this.SalesTax.toJSON(),
		InsuranceOption: (this.InsuranceOption === undefined)? null : this.InsuranceOption,
		InsuranceFee: (this.InsuranceFee === undefined)? null : this.InsuranceFee.toJSON(),
		PaymentMethods: (this.PaymentMethods === undefined)? null : this.PaymentMethods,
		PayPalEmailAddress: (this.PayPalEmailAddress === undefined)? null : this.PayPalEmailAddress,
		CheckoutInstructions: (this.CheckoutInstructions === undefined)? null : this.CheckoutInstructions,
		EmailCopyToSeller: (this.EmailCopyToSeller === undefined)? null : this.EmailCopyToSeller,
		CODCost: (this.CODCost === undefined)? null : this.CODCost.toJSON(),
		SKU: (this.SKU === undefined)? null : this.SKU.toJSON(),
		OrderLineItemID: (this.OrderLineItemID === undefined)? null : this.OrderLineItemID,
		AdjustmentAmount: (this.AdjustmentAmount === undefined)? null : this.AdjustmentAmount.toJSON()
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
module.exports = SendInvoiceRequestType;