var AddressType = require('./AddressType'),
	ShippingDetailsType = require('./ShippingDetailsType'),
	AmountType = require('./AmountType'),
	SellingManagerOrderStatusType = require('./SellingManagerOrderStatusType'),
	UnpaidItemStatusTypeCodeType = require('./UnpaidItemStatusTypeCodeType');

function SellingManagerSoldOrderType(SellingManagerSoldTransaction, ShippingAddress, ShippingDetails, CashOnDeliveryCost, TotalAmount, TotalQuantity, ItemCost, VATRate, NetInsuranceFee, VATInsuranceFee, VATShippingFee, NetShippingFee, NetTotalAmount, VATTotalAmount, ActualShippingCost, AdjustmentAmount, NotesToBuyer, NotesFromBuyer, NotesToSeller, OrderStatus, UnpaidItemStatus, SalePrice, EmailsSent, DaysSinceSale, BuyerID, BuyerEmail, SaleRecordID, CreationTime, RefundAmount, RefundStatus) {

	/**
	  Documentation
	   
                Contains information about a sale record.
            
	 */

	/**
	 * Arrays
	 *	SellingManagerSoldTransaction: SellingManagerSoldTransactionType
	 *	VATRate: VATRateType
	 */
	var _ShippingAddress;
	var _ShippingDetails;
	var _CashOnDeliveryCost;
	var _TotalAmount;
	var _ItemCost;
	var _NetInsuranceFee;
	var _VATInsuranceFee;
	var _VATShippingFee;
	var _NetShippingFee;
	var _NetTotalAmount;
	var _VATTotalAmount;
	var _ActualShippingCost;
	var _AdjustmentAmount;
	var _OrderStatus;
	var _UnpaidItemStatus;
	var _SalePrice;
	var _RefundAmount;
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
	Object.defineProperty(this, 'ShippingDetails', {
		 get: function(){
			 return _ShippingDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ShippingDetailsType){ 
					_ShippingDetails = value; 
				}else{
					console.log('ShippingDetails expects type ShippingDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CashOnDeliveryCost', {
		 get: function(){
			 return _CashOnDeliveryCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_CashOnDeliveryCost = value; 
				}else{
					console.log('CashOnDeliveryCost expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TotalAmount', {
		 get: function(){
			 return _TotalAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_TotalAmount = value; 
				}else{
					console.log('TotalAmount expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ItemCost', {
		 get: function(){
			 return _ItemCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ItemCost = value; 
				}else{
					console.log('ItemCost expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'NetInsuranceFee', {
		 get: function(){
			 return _NetInsuranceFee;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_NetInsuranceFee = value; 
				}else{
					console.log('NetInsuranceFee expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'VATInsuranceFee', {
		 get: function(){
			 return _VATInsuranceFee;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_VATInsuranceFee = value; 
				}else{
					console.log('VATInsuranceFee expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'VATShippingFee', {
		 get: function(){
			 return _VATShippingFee;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_VATShippingFee = value; 
				}else{
					console.log('VATShippingFee expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'NetShippingFee', {
		 get: function(){
			 return _NetShippingFee;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_NetShippingFee = value; 
				}else{
					console.log('NetShippingFee expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'NetTotalAmount', {
		 get: function(){
			 return _NetTotalAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_NetTotalAmount = value; 
				}else{
					console.log('NetTotalAmount expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'VATTotalAmount', {
		 get: function(){
			 return _VATTotalAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_VATTotalAmount = value; 
				}else{
					console.log('VATTotalAmount expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ActualShippingCost', {
		 get: function(){
			 return _ActualShippingCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ActualShippingCost = value; 
				}else{
					console.log('ActualShippingCost expects type AmountType');
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
	Object.defineProperty(this, 'OrderStatus', {
		 get: function(){
			 return _OrderStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerOrderStatusType){ 
					_OrderStatus = value; 
				}else{
					console.log('OrderStatus expects type SellingManagerOrderStatusType');
				}
			}
		}
	});
	Object.defineProperty(this, 'UnpaidItemStatus', {
		 get: function(){
			 return _UnpaidItemStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UnpaidItemStatusTypeCodeType){ 
					_UnpaidItemStatus = value; 
				}else{
					console.log('UnpaidItemStatus expects type UnpaidItemStatusTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SalePrice', {
		 get: function(){
			 return _SalePrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_SalePrice = value; 
				}else{
					console.log('SalePrice expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'RefundAmount', {
		 get: function(){
			 return _RefundAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_RefundAmount = value; 
				}else{
					console.log('RefundAmount expects type AmountType');
				}
			}
		}
	});
	this.SellingManagerSoldTransaction = SellingManagerSoldTransaction;
	this.ShippingAddress = ShippingAddress;
	this.ShippingDetails = ShippingDetails;
	this.CashOnDeliveryCost = CashOnDeliveryCost;
	this.TotalAmount = TotalAmount;
	this.TotalQuantity = TotalQuantity;
	this.ItemCost = ItemCost;
	this.VATRate = VATRate;
	this.NetInsuranceFee = NetInsuranceFee;
	this.VATInsuranceFee = VATInsuranceFee;
	this.VATShippingFee = VATShippingFee;
	this.NetShippingFee = NetShippingFee;
	this.NetTotalAmount = NetTotalAmount;
	this.VATTotalAmount = VATTotalAmount;
	this.ActualShippingCost = ActualShippingCost;
	this.AdjustmentAmount = AdjustmentAmount;
	this.NotesToBuyer = NotesToBuyer;
	this.NotesFromBuyer = NotesFromBuyer;
	this.NotesToSeller = NotesToSeller;
	this.OrderStatus = OrderStatus;
	this.UnpaidItemStatus = UnpaidItemStatus;
	this.SalePrice = SalePrice;
	this.EmailsSent = EmailsSent;
	this.DaysSinceSale = DaysSinceSale;
	this.BuyerID = BuyerID;
	this.BuyerEmail = BuyerEmail;
	this.SaleRecordID = SaleRecordID;
	this.CreationTime = CreationTime;
	this.RefundAmount = RefundAmount;
	this.RefundStatus = RefundStatus;
}
SellingManagerSoldOrderType.prototype.toJSON = function(with_null) {
	var json = { 
		SellingManagerSoldTransaction: (this.SellingManagerSoldTransaction === undefined)? null : this.SellingManagerSoldTransaction,
		ShippingAddress: (this.ShippingAddress === undefined)? null : this.ShippingAddress.toJSON(),
		ShippingDetails: (this.ShippingDetails === undefined)? null : this.ShippingDetails.toJSON(),
		CashOnDeliveryCost: (this.CashOnDeliveryCost === undefined)? null : this.CashOnDeliveryCost.toJSON(),
		TotalAmount: (this.TotalAmount === undefined)? null : this.TotalAmount.toJSON(),
		TotalQuantity: (this.TotalQuantity === undefined)? null : this.TotalQuantity,
		ItemCost: (this.ItemCost === undefined)? null : this.ItemCost.toJSON(),
		VATRate: (this.VATRate === undefined)? null : this.VATRate,
		NetInsuranceFee: (this.NetInsuranceFee === undefined)? null : this.NetInsuranceFee.toJSON(),
		VATInsuranceFee: (this.VATInsuranceFee === undefined)? null : this.VATInsuranceFee.toJSON(),
		VATShippingFee: (this.VATShippingFee === undefined)? null : this.VATShippingFee.toJSON(),
		NetShippingFee: (this.NetShippingFee === undefined)? null : this.NetShippingFee.toJSON(),
		NetTotalAmount: (this.NetTotalAmount === undefined)? null : this.NetTotalAmount.toJSON(),
		VATTotalAmount: (this.VATTotalAmount === undefined)? null : this.VATTotalAmount.toJSON(),
		ActualShippingCost: (this.ActualShippingCost === undefined)? null : this.ActualShippingCost.toJSON(),
		AdjustmentAmount: (this.AdjustmentAmount === undefined)? null : this.AdjustmentAmount.toJSON(),
		NotesToBuyer: (this.NotesToBuyer === undefined)? null : this.NotesToBuyer,
		NotesFromBuyer: (this.NotesFromBuyer === undefined)? null : this.NotesFromBuyer,
		NotesToSeller: (this.NotesToSeller === undefined)? null : this.NotesToSeller,
		OrderStatus: (this.OrderStatus === undefined)? null : this.OrderStatus.toJSON(),
		UnpaidItemStatus: (this.UnpaidItemStatus === undefined)? null : this.UnpaidItemStatus.toJSON(),
		SalePrice: (this.SalePrice === undefined)? null : this.SalePrice.toJSON(),
		EmailsSent: (this.EmailsSent === undefined)? null : this.EmailsSent,
		DaysSinceSale: (this.DaysSinceSale === undefined)? null : this.DaysSinceSale,
		BuyerID: (this.BuyerID === undefined)? null : this.BuyerID,
		BuyerEmail: (this.BuyerEmail === undefined)? null : this.BuyerEmail,
		SaleRecordID: (this.SaleRecordID === undefined)? null : this.SaleRecordID,
		CreationTime: (this.CreationTime === undefined)? null : this.CreationTime,
		RefundAmount: (this.RefundAmount === undefined)? null : this.RefundAmount.toJSON(),
		RefundStatus: (this.RefundStatus === undefined)? null : this.RefundStatus
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
module.exports = SellingManagerSoldOrderType;