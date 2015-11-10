var ItemIDType = require('./ItemIDType'),
	OrderIDType = require('./OrderIDType'),
	ExternalProductIDType = require('./ExternalProductIDType'),
	PaymentTypeCodeType = require('./PaymentTypeCodeType'),
	AmountType = require('./AmountType');

function SellerPaymentType(ItemID, TransactionID, OrderID, SellerInventoryID, PrivateNotes, ExternalProductID, Title, PaymentType, TransactionPrice, ShippingReimbursement, Commission, AmountPaid, PaidTime, OrderLineItemID) {

	/**
	  Documentation
	   
                A payment between Half.com and a seller. The financial value of a payment is typically based on an amount that a buyer paid to Half.com for one order line item, plus the buyer's shipping cost, minus Half.com's commission.
            
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	var _OrderID;
	var _ExternalProductID;
	var _PaymentType;
	var _TransactionPrice;
	var _ShippingReimbursement;
	var _Commission;
	var _AmountPaid;
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
	Object.defineProperty(this, 'ExternalProductID', {
		 get: function(){
			 return _ExternalProductID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ExternalProductIDType){ 
					_ExternalProductID = value; 
				}else{
					console.log('ExternalProductID expects type ExternalProductIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PaymentType', {
		 get: function(){
			 return _PaymentType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PaymentTypeCodeType){ 
					_PaymentType = value; 
				}else{
					console.log('PaymentType expects type PaymentTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TransactionPrice', {
		 get: function(){
			 return _TransactionPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_TransactionPrice = value; 
				}else{
					console.log('TransactionPrice expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ShippingReimbursement', {
		 get: function(){
			 return _ShippingReimbursement;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ShippingReimbursement = value; 
				}else{
					console.log('ShippingReimbursement expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Commission', {
		 get: function(){
			 return _Commission;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_Commission = value; 
				}else{
					console.log('Commission expects type AmountType');
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
	this.ItemID = ItemID;
	this.TransactionID = TransactionID;
	this.OrderID = OrderID;
	this.SellerInventoryID = SellerInventoryID;
	this.PrivateNotes = PrivateNotes;
	this.ExternalProductID = ExternalProductID;
	this.Title = Title;
	this.PaymentType = PaymentType;
	this.TransactionPrice = TransactionPrice;
	this.ShippingReimbursement = ShippingReimbursement;
	this.Commission = Commission;
	this.AmountPaid = AmountPaid;
	this.PaidTime = PaidTime;
	this.OrderLineItemID = OrderLineItemID;
}
SellerPaymentType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		OrderID: (this.OrderID === undefined)? null : this.OrderID.toJSON(),
		SellerInventoryID: (this.SellerInventoryID === undefined)? null : this.SellerInventoryID,
		PrivateNotes: (this.PrivateNotes === undefined)? null : this.PrivateNotes,
		ExternalProductID: (this.ExternalProductID === undefined)? null : this.ExternalProductID.toJSON(),
		Title: (this.Title === undefined)? null : this.Title,
		PaymentType: (this.PaymentType === undefined)? null : this.PaymentType.toJSON(),
		TransactionPrice: (this.TransactionPrice === undefined)? null : this.TransactionPrice.toJSON(),
		ShippingReimbursement: (this.ShippingReimbursement === undefined)? null : this.ShippingReimbursement.toJSON(),
		Commission: (this.Commission === undefined)? null : this.Commission.toJSON(),
		AmountPaid: (this.AmountPaid === undefined)? null : this.AmountPaid.toJSON(),
		PaidTime: (this.PaidTime === undefined)? null : this.PaidTime,
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
module.exports = SellerPaymentType;