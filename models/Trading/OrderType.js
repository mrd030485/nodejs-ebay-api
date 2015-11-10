var OrderIDType = require('./OrderIDType'),
	OrderStatusCodeType = require('./OrderStatusCodeType'),
	AmountType = require('./AmountType'),
	CheckoutStatusType = require('./CheckoutStatusType'),
	ShippingDetailsType = require('./ShippingDetailsType'),
	TradingRoleCodeType = require('./TradingRoleCodeType'),
	AddressType = require('./AddressType'),
	ShippingServiceOptionsType = require('./ShippingServiceOptionsType'),
	TransactionArrayType = require('./TransactionArrayType'),
	UserIDType = require('./UserIDType'),
	PaymentHoldStatusCodeType = require('./PaymentHoldStatusCodeType'),
	PaymentHoldDetailType = require('./PaymentHoldDetailType'),
	RefundArrayType = require('./RefundArrayType'),
	MultiLegShippingDetailsType = require('./MultiLegShippingDetailsType'),
	PaymentsInformationType = require('./PaymentsInformationType'),
	PickupDetailsType = require('./PickupDetailsType'),
	PickupMethodSelectedType = require('./PickupMethodSelectedType'),
	CancelStatusCodeType = require('./CancelStatusCodeType'),
	BuyerPackageEnclosuresType = require('./BuyerPackageEnclosuresType');

function OrderType(OrderID, OrderStatus, AdjustmentAmount, AmountPaid, AmountSaved, CheckoutStatus, ShippingDetails, CreatingUserRole, CreatedTime, PaymentMethods, SellerEmail, ShippingAddress, ShippingServiceSelected, Subtotal, Total, ExternalTransaction, TransactionArray, BuyerUserID, PaidTime, ShippedTime, IntegratedMerchantCreditCardEnabled, BundlePurchase, BuyerCheckoutMessage, EIASToken, PaymentHoldStatus, PaymentHoldDetails, RefundAmount, RefundStatus, RefundArray, IsMultiLegShipping, MultiLegShippingDetails, MonetaryDetails, PickupDetails, PickupMethodSelected, SellerUserID, SellerEIASToken, CancelReason, CancelStatus, CancelReasonDetails, ShippingConvenienceCharge, CancelDetail, LogisticsPlanType, BuyerTaxIdentifier, BuyerPackageEnclosures, ExtendedOrderID, ContainseBayPlusTransaction) {

	/**
	  Documentation
	   
                There are single line item and multiple line item orders. A single payment is made for both order types. <br> <br> We strongly recommend that you avoid mixing digital and non-digital listings in the same <a href="http://developer.ebay.com/DevZone/guides/ebayfeatures/Development/Listing-AnItem.html#CombinedInvoice">Combined
                Invoice</a> order.
            
	 */

	/**
	 * Arrays
	 *	PaymentMethods: BuyerPaymentMethodCodeType
	 *	ExternalTransaction: ExternalTransactionType
	 *	CancelDetail: CancelDetailType
	 *	BuyerTaxIdentifier: TaxIdentifierType
	 */
	var _OrderID;
	var _OrderStatus;
	var _AdjustmentAmount;
	var _AmountPaid;
	var _AmountSaved;
	var _CheckoutStatus;
	var _ShippingDetails;
	var _CreatingUserRole;
	var _ShippingAddress;
	var _ShippingServiceSelected;
	var _Subtotal;
	var _Total;
	var _TransactionArray;
	var _BuyerUserID;
	var _PaymentHoldStatus;
	var _PaymentHoldDetails;
	var _RefundAmount;
	var _RefundArray;
	var _MultiLegShippingDetails;
	var _MonetaryDetails;
	var _PickupDetails;
	var _PickupMethodSelected;
	var _SellerUserID;
	var _CancelStatus;
	var _ShippingConvenienceCharge;
	var _BuyerPackageEnclosures;
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
	Object.defineProperty(this, 'OrderStatus', {
		 get: function(){
			 return _OrderStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof OrderStatusCodeType){ 
					_OrderStatus = value; 
				}else{
					console.log('OrderStatus expects type OrderStatusCodeType');
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
	Object.defineProperty(this, 'AmountSaved', {
		 get: function(){
			 return _AmountSaved;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_AmountSaved = value; 
				}else{
					console.log('AmountSaved expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CheckoutStatus', {
		 get: function(){
			 return _CheckoutStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CheckoutStatusType){ 
					_CheckoutStatus = value; 
				}else{
					console.log('CheckoutStatus expects type CheckoutStatusType');
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
	Object.defineProperty(this, 'CreatingUserRole', {
		 get: function(){
			 return _CreatingUserRole;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof TradingRoleCodeType){ 
					_CreatingUserRole = value; 
				}else{
					console.log('CreatingUserRole expects type TradingRoleCodeType');
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
	Object.defineProperty(this, 'ShippingServiceSelected', {
		 get: function(){
			 return _ShippingServiceSelected;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ShippingServiceOptionsType){ 
					_ShippingServiceSelected = value; 
				}else{
					console.log('ShippingServiceSelected expects type ShippingServiceOptionsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Subtotal', {
		 get: function(){
			 return _Subtotal;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_Subtotal = value; 
				}else{
					console.log('Subtotal expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Total', {
		 get: function(){
			 return _Total;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_Total = value; 
				}else{
					console.log('Total expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TransactionArray', {
		 get: function(){
			 return _TransactionArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof TransactionArrayType){ 
					_TransactionArray = value; 
				}else{
					console.log('TransactionArray expects type TransactionArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BuyerUserID', {
		 get: function(){
			 return _BuyerUserID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIDType){ 
					_BuyerUserID = value; 
				}else{
					console.log('BuyerUserID expects type UserIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PaymentHoldStatus', {
		 get: function(){
			 return _PaymentHoldStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PaymentHoldStatusCodeType){ 
					_PaymentHoldStatus = value; 
				}else{
					console.log('PaymentHoldStatus expects type PaymentHoldStatusCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PaymentHoldDetails', {
		 get: function(){
			 return _PaymentHoldDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PaymentHoldDetailType){ 
					_PaymentHoldDetails = value; 
				}else{
					console.log('PaymentHoldDetails expects type PaymentHoldDetailType');
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
	Object.defineProperty(this, 'RefundArray', {
		 get: function(){
			 return _RefundArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof RefundArrayType){ 
					_RefundArray = value; 
				}else{
					console.log('RefundArray expects type RefundArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MultiLegShippingDetails', {
		 get: function(){
			 return _MultiLegShippingDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MultiLegShippingDetailsType){ 
					_MultiLegShippingDetails = value; 
				}else{
					console.log('MultiLegShippingDetails expects type MultiLegShippingDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MonetaryDetails', {
		 get: function(){
			 return _MonetaryDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PaymentsInformationType){ 
					_MonetaryDetails = value; 
				}else{
					console.log('MonetaryDetails expects type PaymentsInformationType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PickupDetails', {
		 get: function(){
			 return _PickupDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PickupDetailsType){ 
					_PickupDetails = value; 
				}else{
					console.log('PickupDetails expects type PickupDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PickupMethodSelected', {
		 get: function(){
			 return _PickupMethodSelected;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PickupMethodSelectedType){ 
					_PickupMethodSelected = value; 
				}else{
					console.log('PickupMethodSelected expects type PickupMethodSelectedType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellerUserID', {
		 get: function(){
			 return _SellerUserID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIDType){ 
					_SellerUserID = value; 
				}else{
					console.log('SellerUserID expects type UserIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CancelStatus', {
		 get: function(){
			 return _CancelStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CancelStatusCodeType){ 
					_CancelStatus = value; 
				}else{
					console.log('CancelStatus expects type CancelStatusCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ShippingConvenienceCharge', {
		 get: function(){
			 return _ShippingConvenienceCharge;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ShippingConvenienceCharge = value; 
				}else{
					console.log('ShippingConvenienceCharge expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'BuyerPackageEnclosures', {
		 get: function(){
			 return _BuyerPackageEnclosures;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BuyerPackageEnclosuresType){ 
					_BuyerPackageEnclosures = value; 
				}else{
					console.log('BuyerPackageEnclosures expects type BuyerPackageEnclosuresType');
				}
			}
		}
	});
	this.OrderID = OrderID;
	this.OrderStatus = OrderStatus;
	this.AdjustmentAmount = AdjustmentAmount;
	this.AmountPaid = AmountPaid;
	this.AmountSaved = AmountSaved;
	this.CheckoutStatus = CheckoutStatus;
	this.ShippingDetails = ShippingDetails;
	this.CreatingUserRole = CreatingUserRole;
	this.CreatedTime = CreatedTime;
	this.PaymentMethods = PaymentMethods;
	this.SellerEmail = SellerEmail;
	this.ShippingAddress = ShippingAddress;
	this.ShippingServiceSelected = ShippingServiceSelected;
	this.Subtotal = Subtotal;
	this.Total = Total;
	this.ExternalTransaction = ExternalTransaction;
	this.TransactionArray = TransactionArray;
	this.BuyerUserID = BuyerUserID;
	this.PaidTime = PaidTime;
	this.ShippedTime = ShippedTime;
	this.IntegratedMerchantCreditCardEnabled = IntegratedMerchantCreditCardEnabled;
	this.BundlePurchase = BundlePurchase;
	this.BuyerCheckoutMessage = BuyerCheckoutMessage;
	this.EIASToken = EIASToken;
	this.PaymentHoldStatus = PaymentHoldStatus;
	this.PaymentHoldDetails = PaymentHoldDetails;
	this.RefundAmount = RefundAmount;
	this.RefundStatus = RefundStatus;
	this.RefundArray = RefundArray;
	this.IsMultiLegShipping = IsMultiLegShipping;
	this.MultiLegShippingDetails = MultiLegShippingDetails;
	this.MonetaryDetails = MonetaryDetails;
	this.PickupDetails = PickupDetails;
	this.PickupMethodSelected = PickupMethodSelected;
	this.SellerUserID = SellerUserID;
	this.SellerEIASToken = SellerEIASToken;
	this.CancelReason = CancelReason;
	this.CancelStatus = CancelStatus;
	this.CancelReasonDetails = CancelReasonDetails;
	this.ShippingConvenienceCharge = ShippingConvenienceCharge;
	this.CancelDetail = CancelDetail;
	this.LogisticsPlanType = LogisticsPlanType;
	this.BuyerTaxIdentifier = BuyerTaxIdentifier;
	this.BuyerPackageEnclosures = BuyerPackageEnclosures;
	this.ExtendedOrderID = ExtendedOrderID;
	this.ContainseBayPlusTransaction = ContainseBayPlusTransaction;
}
OrderType.prototype.toJSON = function(with_null) {
	var json = { 
		OrderID: (this.OrderID === undefined)? null : this.OrderID.toJSON(),
		OrderStatus: (this.OrderStatus === undefined)? null : this.OrderStatus.toJSON(),
		AdjustmentAmount: (this.AdjustmentAmount === undefined)? null : this.AdjustmentAmount.toJSON(),
		AmountPaid: (this.AmountPaid === undefined)? null : this.AmountPaid.toJSON(),
		AmountSaved: (this.AmountSaved === undefined)? null : this.AmountSaved.toJSON(),
		CheckoutStatus: (this.CheckoutStatus === undefined)? null : this.CheckoutStatus.toJSON(),
		ShippingDetails: (this.ShippingDetails === undefined)? null : this.ShippingDetails.toJSON(),
		CreatingUserRole: (this.CreatingUserRole === undefined)? null : this.CreatingUserRole.toJSON(),
		CreatedTime: (this.CreatedTime === undefined)? null : this.CreatedTime,
		PaymentMethods: (this.PaymentMethods === undefined)? null : this.PaymentMethods,
		SellerEmail: (this.SellerEmail === undefined)? null : this.SellerEmail,
		ShippingAddress: (this.ShippingAddress === undefined)? null : this.ShippingAddress.toJSON(),
		ShippingServiceSelected: (this.ShippingServiceSelected === undefined)? null : this.ShippingServiceSelected.toJSON(),
		Subtotal: (this.Subtotal === undefined)? null : this.Subtotal.toJSON(),
		Total: (this.Total === undefined)? null : this.Total.toJSON(),
		ExternalTransaction: (this.ExternalTransaction === undefined)? null : this.ExternalTransaction,
		TransactionArray: (this.TransactionArray === undefined)? null : this.TransactionArray.toJSON(),
		BuyerUserID: (this.BuyerUserID === undefined)? null : this.BuyerUserID.toJSON(),
		PaidTime: (this.PaidTime === undefined)? null : this.PaidTime,
		ShippedTime: (this.ShippedTime === undefined)? null : this.ShippedTime,
		IntegratedMerchantCreditCardEnabled: (this.IntegratedMerchantCreditCardEnabled === undefined)? null : this.IntegratedMerchantCreditCardEnabled,
		BundlePurchase: (this.BundlePurchase === undefined)? null : this.BundlePurchase,
		BuyerCheckoutMessage: (this.BuyerCheckoutMessage === undefined)? null : this.BuyerCheckoutMessage,
		EIASToken: (this.EIASToken === undefined)? null : this.EIASToken,
		PaymentHoldStatus: (this.PaymentHoldStatus === undefined)? null : this.PaymentHoldStatus.toJSON(),
		PaymentHoldDetails: (this.PaymentHoldDetails === undefined)? null : this.PaymentHoldDetails.toJSON(),
		RefundAmount: (this.RefundAmount === undefined)? null : this.RefundAmount.toJSON(),
		RefundStatus: (this.RefundStatus === undefined)? null : this.RefundStatus,
		RefundArray: (this.RefundArray === undefined)? null : this.RefundArray.toJSON(),
		IsMultiLegShipping: (this.IsMultiLegShipping === undefined)? null : this.IsMultiLegShipping,
		MultiLegShippingDetails: (this.MultiLegShippingDetails === undefined)? null : this.MultiLegShippingDetails.toJSON(),
		MonetaryDetails: (this.MonetaryDetails === undefined)? null : this.MonetaryDetails.toJSON(),
		PickupDetails: (this.PickupDetails === undefined)? null : this.PickupDetails.toJSON(),
		PickupMethodSelected: (this.PickupMethodSelected === undefined)? null : this.PickupMethodSelected.toJSON(),
		SellerUserID: (this.SellerUserID === undefined)? null : this.SellerUserID.toJSON(),
		SellerEIASToken: (this.SellerEIASToken === undefined)? null : this.SellerEIASToken,
		CancelReason: (this.CancelReason === undefined)? null : this.CancelReason,
		CancelStatus: (this.CancelStatus === undefined)? null : this.CancelStatus.toJSON(),
		CancelReasonDetails: (this.CancelReasonDetails === undefined)? null : this.CancelReasonDetails,
		ShippingConvenienceCharge: (this.ShippingConvenienceCharge === undefined)? null : this.ShippingConvenienceCharge.toJSON(),
		CancelDetail: (this.CancelDetail === undefined)? null : this.CancelDetail,
		LogisticsPlanType: (this.LogisticsPlanType === undefined)? null : this.LogisticsPlanType,
		BuyerTaxIdentifier: (this.BuyerTaxIdentifier === undefined)? null : this.BuyerTaxIdentifier,
		BuyerPackageEnclosures: (this.BuyerPackageEnclosures === undefined)? null : this.BuyerPackageEnclosures.toJSON(),
		ExtendedOrderID: (this.ExtendedOrderID === undefined)? null : this.ExtendedOrderID,
		ContainseBayPlusTransaction: (this.ContainseBayPlusTransaction === undefined)? null : this.ContainseBayPlusTransaction
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
module.exports = OrderType;