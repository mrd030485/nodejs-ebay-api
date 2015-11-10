var ItemIDType = require('../../Trading/ItemIDType'),
	AmountType = require('../../Trading/AmountType'),
	AddressType = require('../../Trading/AddressType'),
	ExternalTransactionType = require('../../Trading/ExternalTransactionType');

function ReviseCheckoutStatusRequestType(ItemID, TransactionID, OrderID, AmountPaid, PaymentMethodUsed, CheckoutStatus, ShippingService, ShippingIncludedInTax, CheckoutMethod, InsuranceType, PaymentStatus, AdjustmentAmount, ShippingAddress, BuyerID, ShippingInsuranceCost, SalesTax, ShippingCost, EncryptedID, ExternalTransaction, MultipleSellerPaymentID, CODCost, OrderLineItemID) {

	/**
	  Documentation
	   Enables a seller to update the payment details, the shipping details, and the status of an order.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	var _AmountPaid;
	var _AdjustmentAmount;
	var _ShippingAddress;
	var _ShippingInsuranceCost;
	var _SalesTax;
	var _ShippingCost;
	var _ExternalTransaction;
	var _CODCost;
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
	Object.defineProperty(this, 'AmountPaid', {
		 get: function(){
			 return _AmountPaid;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_AmountPaid = value; 
				}else{
					console.log('AmountPaid expects type AmountType');
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
	Object.defineProperty(this, 'SalesTax', {
		 get: function(){
			 return _SalesTax;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_SalesTax = value; 
				}else{
					console.log('SalesTax expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ShippingCost', {
		 get: function(){
			 return _ShippingCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ShippingCost = value; 
				}else{
					console.log('ShippingCost expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ExternalTransaction', {
		 get: function(){
			 return _ExternalTransaction;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ExternalTransactionType){ 
					_ExternalTransaction = value; 
				}else{
					console.log('ExternalTransaction expects type ExternalTransactionType');
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
	this.ItemID = ItemID;
	this.TransactionID = TransactionID;
	this.OrderID = OrderID;
	this.AmountPaid = AmountPaid;
	this.PaymentMethodUsed = PaymentMethodUsed;
	this.CheckoutStatus = CheckoutStatus;
	this.ShippingService = ShippingService;
	this.ShippingIncludedInTax = ShippingIncludedInTax;
	this.CheckoutMethod = CheckoutMethod;
	this.InsuranceType = InsuranceType;
	this.PaymentStatus = PaymentStatus;
	this.AdjustmentAmount = AdjustmentAmount;
	this.ShippingAddress = ShippingAddress;
	this.BuyerID = BuyerID;
	this.ShippingInsuranceCost = ShippingInsuranceCost;
	this.SalesTax = SalesTax;
	this.ShippingCost = ShippingCost;
	this.EncryptedID = EncryptedID;
	this.ExternalTransaction = ExternalTransaction;
	this.MultipleSellerPaymentID = MultipleSellerPaymentID;
	this.CODCost = CODCost;
	this.OrderLineItemID = OrderLineItemID;
}
ReviseCheckoutStatusRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		OrderID: (this.OrderID === undefined)? null : this.OrderID,
		AmountPaid: (this.AmountPaid === undefined)? null : this.AmountPaid.toJSON(),
		PaymentMethodUsed: (this.PaymentMethodUsed === undefined)? null : this.PaymentMethodUsed,
		CheckoutStatus: (this.CheckoutStatus === undefined)? null : this.CheckoutStatus,
		ShippingService: (this.ShippingService === undefined)? null : this.ShippingService,
		ShippingIncludedInTax: (this.ShippingIncludedInTax === undefined)? null : this.ShippingIncludedInTax,
		CheckoutMethod: (this.CheckoutMethod === undefined)? null : this.CheckoutMethod,
		InsuranceType: (this.InsuranceType === undefined)? null : this.InsuranceType,
		PaymentStatus: (this.PaymentStatus === undefined)? null : this.PaymentStatus,
		AdjustmentAmount: (this.AdjustmentAmount === undefined)? null : this.AdjustmentAmount.toJSON(),
		ShippingAddress: (this.ShippingAddress === undefined)? null : this.ShippingAddress.toJSON(),
		BuyerID: (this.BuyerID === undefined)? null : this.BuyerID,
		ShippingInsuranceCost: (this.ShippingInsuranceCost === undefined)? null : this.ShippingInsuranceCost.toJSON(),
		SalesTax: (this.SalesTax === undefined)? null : this.SalesTax.toJSON(),
		ShippingCost: (this.ShippingCost === undefined)? null : this.ShippingCost.toJSON(),
		EncryptedID: (this.EncryptedID === undefined)? null : this.EncryptedID,
		ExternalTransaction: (this.ExternalTransaction === undefined)? null : this.ExternalTransaction.toJSON(),
		MultipleSellerPaymentID: (this.MultipleSellerPaymentID === undefined)? null : this.MultipleSellerPaymentID,
		CODCost: (this.CODCost === undefined)? null : this.CODCost.toJSON(),
		OrderLineItemID: (this.OrderLineItemID === undefined)? null : this.OrderLineItemID
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
module.exports = ReviseCheckoutStatusRequestType;