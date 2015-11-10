var AmountType = require('./AmountType'),
	UserType = require('./UserType'),
	ShippingDetailsType = require('./ShippingDetailsType'),
	ItemType = require('./ItemType'),
	TransactionStatusType = require('./TransactionStatusType'),
	SellingManagerProductDetailsType = require('./SellingManagerProductDetailsType'),
	ShippingServiceOptionsType = require('./ShippingServiceOptionsType'),
	FeedbackInfoType = require('./FeedbackInfoType'),
	OrderType = require('./OrderType'),
	ListingCheckoutRedirectPreferenceType = require('./ListingCheckoutRedirectPreferenceType'),
	RefundArrayType = require('./RefundArrayType'),
	VariationType = require('./VariationType'),
	TaxesType = require('./TaxesType'),
	PaymentHoldDetailType = require('./PaymentHoldDetailType'),
	SellerDiscountsType = require('./SellerDiscountsType'),
	MultiLegShippingDetailsType = require('./MultiLegShippingDetailsType'),
	UnpaidItemType = require('./UnpaidItemType'),
	PaymentsInformationType = require('./PaymentsInformationType'),
	PickupDetailsType = require('./PickupDetailsType'),
	PickupMethodSelectedType = require('./PickupMethodSelectedType'),
	BuyerPackageEnclosuresType = require('./BuyerPackageEnclosuresType'),
	GiftSummaryType = require('./GiftSummaryType'),
	DigitalDeliverySelectedType = require('./DigitalDeliverySelectedType');

function TransactionType(AmountPaid, AdjustmentAmount, ConvertedAdjustmentAmount, Buyer, ShippingDetails, ConvertedAmountPaid, ConvertedTransactionPrice, CreatedDate, DepositType, Item, QuantityPurchased, Status, TransactionID, TransactionPrice, BestOfferSale, VATPercent, ExternalTransaction, SellingManagerProductDetails, ShippingServiceSelected, BuyerMessage, DutchAuctionBid, BuyerPaidStatus, SellerPaidStatus, PaidTime, ShippedTime, TotalPrice, FeedbackLeft, FeedbackReceived, ContainingOrder, FinalValueFee, ListingCheckoutRedirectPreference, RefundArray, TransactionSiteID, Platform, CartID, SellerContactBuyerByEmail, PayPalEmailAddress, PaisaPayID, BuyerGuaranteePrice, Variation, BuyerCheckoutMessage, Taxes, BundlePurchase, ActualShippingCost, ActualHandlingCost, OrderLineItemID, PaymentHoldDetails, SellerDiscounts, RefundAmount, RefundStatus, CodiceFiscale, IsMultiLegShipping, MultiLegShippingDetails, InvoiceSentTime, UnpaidItem, IntangibleItem, MonetaryDetails, PickupDetails, PickupMethodSelected, ShippingConvenienceCharge, LogisticsPlanType, BuyerPackageEnclosures, InventoryReservationID, ExtendedOrderID, eBayPlusTransaction, GiftSummary, DigitalDeliverySelected, Gift) {

	/**
	  Documentation
	   Contains information about a single order line item (transaction). An order line item contains information about the sale of one or multiple items from a single listing to a single buyer. The eBay system creates an order line item when
                    a buyer has committed to make a purchase in an auction or fixed-price listing. A fixed-priced listing (with multiple identical items or a similar item with variations) can spawn one or more order line items. Auction listings and single-item,
                    fixed-price listings can only spawn one order line item.
	 */

	/**
	 * Arrays
	 *	ExternalTransaction: ExternalTransactionType
	 */
	var _AmountPaid;
	var _AdjustmentAmount;
	var _ConvertedAdjustmentAmount;
	var _Buyer;
	var _ShippingDetails;
	var _ConvertedAmountPaid;
	var _ConvertedTransactionPrice;
	var _Item;
	var _Status;
	var _TransactionPrice;
	var _SellingManagerProductDetails;
	var _ShippingServiceSelected;
	var _DutchAuctionBid;
	var _TotalPrice;
	var _FeedbackLeft;
	var _FeedbackReceived;
	var _ContainingOrder;
	var _FinalValueFee;
	var _ListingCheckoutRedirectPreference;
	var _RefundArray;
	var _BuyerGuaranteePrice;
	var _Variation;
	var _Taxes;
	var _ActualShippingCost;
	var _ActualHandlingCost;
	var _PaymentHoldDetails;
	var _SellerDiscounts;
	var _RefundAmount;
	var _MultiLegShippingDetails;
	var _UnpaidItem;
	var _MonetaryDetails;
	var _PickupDetails;
	var _PickupMethodSelected;
	var _ShippingConvenienceCharge;
	var _BuyerPackageEnclosures;
	var _GiftSummary;
	var _DigitalDeliverySelected;
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
	Object.defineProperty(this, 'ConvertedAdjustmentAmount', {
		 get: function(){
			 return _ConvertedAdjustmentAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ConvertedAdjustmentAmount = value; 
				}else{
					console.log('ConvertedAdjustmentAmount expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Buyer', {
		 get: function(){
			 return _Buyer;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserType){ 
					_Buyer = value; 
				}else{
					console.log('Buyer expects type UserType');
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
	Object.defineProperty(this, 'ConvertedAmountPaid', {
		 get: function(){
			 return _ConvertedAmountPaid;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ConvertedAmountPaid = value; 
				}else{
					console.log('ConvertedAmountPaid expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ConvertedTransactionPrice', {
		 get: function(){
			 return _ConvertedTransactionPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ConvertedTransactionPrice = value; 
				}else{
					console.log('ConvertedTransactionPrice expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Item', {
		 get: function(){
			 return _Item;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemType){ 
					_Item = value; 
				}else{
					console.log('Item expects type ItemType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Status', {
		 get: function(){
			 return _Status;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof TransactionStatusType){ 
					_Status = value; 
				}else{
					console.log('Status expects type TransactionStatusType');
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
	Object.defineProperty(this, 'SellingManagerProductDetails', {
		 get: function(){
			 return _SellingManagerProductDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerProductDetailsType){ 
					_SellingManagerProductDetails = value; 
				}else{
					console.log('SellingManagerProductDetails expects type SellingManagerProductDetailsType');
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
	Object.defineProperty(this, 'DutchAuctionBid', {
		 get: function(){
			 return _DutchAuctionBid;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_DutchAuctionBid = value; 
				}else{
					console.log('DutchAuctionBid expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TotalPrice', {
		 get: function(){
			 return _TotalPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_TotalPrice = value; 
				}else{
					console.log('TotalPrice expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'FeedbackLeft', {
		 get: function(){
			 return _FeedbackLeft;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FeedbackInfoType){ 
					_FeedbackLeft = value; 
				}else{
					console.log('FeedbackLeft expects type FeedbackInfoType');
				}
			}
		}
	});
	Object.defineProperty(this, 'FeedbackReceived', {
		 get: function(){
			 return _FeedbackReceived;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FeedbackInfoType){ 
					_FeedbackReceived = value; 
				}else{
					console.log('FeedbackReceived expects type FeedbackInfoType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ContainingOrder', {
		 get: function(){
			 return _ContainingOrder;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof OrderType){ 
					_ContainingOrder = value; 
				}else{
					console.log('ContainingOrder expects type OrderType');
				}
			}
		}
	});
	Object.defineProperty(this, 'FinalValueFee', {
		 get: function(){
			 return _FinalValueFee;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_FinalValueFee = value; 
				}else{
					console.log('FinalValueFee expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ListingCheckoutRedirectPreference', {
		 get: function(){
			 return _ListingCheckoutRedirectPreference;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ListingCheckoutRedirectPreferenceType){ 
					_ListingCheckoutRedirectPreference = value; 
				}else{
					console.log('ListingCheckoutRedirectPreference expects type ListingCheckoutRedirectPreferenceType');
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
	Object.defineProperty(this, 'BuyerGuaranteePrice', {
		 get: function(){
			 return _BuyerGuaranteePrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_BuyerGuaranteePrice = value; 
				}else{
					console.log('BuyerGuaranteePrice expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Variation', {
		 get: function(){
			 return _Variation;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof VariationType){ 
					_Variation = value; 
				}else{
					console.log('Variation expects type VariationType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Taxes', {
		 get: function(){
			 return _Taxes;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof TaxesType){ 
					_Taxes = value; 
				}else{
					console.log('Taxes expects type TaxesType');
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
	Object.defineProperty(this, 'ActualHandlingCost', {
		 get: function(){
			 return _ActualHandlingCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ActualHandlingCost = value; 
				}else{
					console.log('ActualHandlingCost expects type AmountType');
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
	Object.defineProperty(this, 'SellerDiscounts', {
		 get: function(){
			 return _SellerDiscounts;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellerDiscountsType){ 
					_SellerDiscounts = value; 
				}else{
					console.log('SellerDiscounts expects type SellerDiscountsType');
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
	Object.defineProperty(this, 'UnpaidItem', {
		 get: function(){
			 return _UnpaidItem;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UnpaidItemType){ 
					_UnpaidItem = value; 
				}else{
					console.log('UnpaidItem expects type UnpaidItemType');
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
	Object.defineProperty(this, 'GiftSummary', {
		 get: function(){
			 return _GiftSummary;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof GiftSummaryType){ 
					_GiftSummary = value; 
				}else{
					console.log('GiftSummary expects type GiftSummaryType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DigitalDeliverySelected', {
		 get: function(){
			 return _DigitalDeliverySelected;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DigitalDeliverySelectedType){ 
					_DigitalDeliverySelected = value; 
				}else{
					console.log('DigitalDeliverySelected expects type DigitalDeliverySelectedType');
				}
			}
		}
	});
	this.AmountPaid = AmountPaid;
	this.AdjustmentAmount = AdjustmentAmount;
	this.ConvertedAdjustmentAmount = ConvertedAdjustmentAmount;
	this.Buyer = Buyer;
	this.ShippingDetails = ShippingDetails;
	this.ConvertedAmountPaid = ConvertedAmountPaid;
	this.ConvertedTransactionPrice = ConvertedTransactionPrice;
	this.CreatedDate = CreatedDate;
	this.DepositType = DepositType;
	this.Item = Item;
	this.QuantityPurchased = QuantityPurchased;
	this.Status = Status;
	this.TransactionID = TransactionID;
	this.TransactionPrice = TransactionPrice;
	this.BestOfferSale = BestOfferSale;
	this.VATPercent = VATPercent;
	this.ExternalTransaction = ExternalTransaction;
	this.SellingManagerProductDetails = SellingManagerProductDetails;
	this.ShippingServiceSelected = ShippingServiceSelected;
	this.BuyerMessage = BuyerMessage;
	this.DutchAuctionBid = DutchAuctionBid;
	this.BuyerPaidStatus = BuyerPaidStatus;
	this.SellerPaidStatus = SellerPaidStatus;
	this.PaidTime = PaidTime;
	this.ShippedTime = ShippedTime;
	this.TotalPrice = TotalPrice;
	this.FeedbackLeft = FeedbackLeft;
	this.FeedbackReceived = FeedbackReceived;
	this.ContainingOrder = ContainingOrder;
	this.FinalValueFee = FinalValueFee;
	this.ListingCheckoutRedirectPreference = ListingCheckoutRedirectPreference;
	this.RefundArray = RefundArray;
	this.TransactionSiteID = TransactionSiteID;
	this.Platform = Platform;
	this.CartID = CartID;
	this.SellerContactBuyerByEmail = SellerContactBuyerByEmail;
	this.PayPalEmailAddress = PayPalEmailAddress;
	this.PaisaPayID = PaisaPayID;
	this.BuyerGuaranteePrice = BuyerGuaranteePrice;
	this.Variation = Variation;
	this.BuyerCheckoutMessage = BuyerCheckoutMessage;
	this.Taxes = Taxes;
	this.BundlePurchase = BundlePurchase;
	this.ActualShippingCost = ActualShippingCost;
	this.ActualHandlingCost = ActualHandlingCost;
	this.OrderLineItemID = OrderLineItemID;
	this.PaymentHoldDetails = PaymentHoldDetails;
	this.SellerDiscounts = SellerDiscounts;
	this.RefundAmount = RefundAmount;
	this.RefundStatus = RefundStatus;
	this.CodiceFiscale = CodiceFiscale;
	this.IsMultiLegShipping = IsMultiLegShipping;
	this.MultiLegShippingDetails = MultiLegShippingDetails;
	this.InvoiceSentTime = InvoiceSentTime;
	this.UnpaidItem = UnpaidItem;
	this.IntangibleItem = IntangibleItem;
	this.MonetaryDetails = MonetaryDetails;
	this.PickupDetails = PickupDetails;
	this.PickupMethodSelected = PickupMethodSelected;
	this.ShippingConvenienceCharge = ShippingConvenienceCharge;
	this.LogisticsPlanType = LogisticsPlanType;
	this.BuyerPackageEnclosures = BuyerPackageEnclosures;
	this.InventoryReservationID = InventoryReservationID;
	this.ExtendedOrderID = ExtendedOrderID;
	this.eBayPlusTransaction = eBayPlusTransaction;
	this.GiftSummary = GiftSummary;
	this.DigitalDeliverySelected = DigitalDeliverySelected;
	this.Gift = Gift;
}
TransactionType.prototype.toJSON = function(with_null) {
	var json = { 
		AmountPaid: (this.AmountPaid === undefined)? null : this.AmountPaid.toJSON(),
		AdjustmentAmount: (this.AdjustmentAmount === undefined)? null : this.AdjustmentAmount.toJSON(),
		ConvertedAdjustmentAmount: (this.ConvertedAdjustmentAmount === undefined)? null : this.ConvertedAdjustmentAmount.toJSON(),
		Buyer: (this.Buyer === undefined)? null : this.Buyer.toJSON(),
		ShippingDetails: (this.ShippingDetails === undefined)? null : this.ShippingDetails.toJSON(),
		ConvertedAmountPaid: (this.ConvertedAmountPaid === undefined)? null : this.ConvertedAmountPaid.toJSON(),
		ConvertedTransactionPrice: (this.ConvertedTransactionPrice === undefined)? null : this.ConvertedTransactionPrice.toJSON(),
		CreatedDate: (this.CreatedDate === undefined)? null : this.CreatedDate,
		DepositType: (this.DepositType === undefined)? null : this.DepositType,
		Item: (this.Item === undefined)? null : this.Item.toJSON(),
		QuantityPurchased: (this.QuantityPurchased === undefined)? null : this.QuantityPurchased,
		Status: (this.Status === undefined)? null : this.Status.toJSON(),
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		TransactionPrice: (this.TransactionPrice === undefined)? null : this.TransactionPrice.toJSON(),
		BestOfferSale: (this.BestOfferSale === undefined)? null : this.BestOfferSale,
		VATPercent: (this.VATPercent === undefined)? null : this.VATPercent,
		ExternalTransaction: (this.ExternalTransaction === undefined)? null : this.ExternalTransaction,
		SellingManagerProductDetails: (this.SellingManagerProductDetails === undefined)? null : this.SellingManagerProductDetails.toJSON(),
		ShippingServiceSelected: (this.ShippingServiceSelected === undefined)? null : this.ShippingServiceSelected.toJSON(),
		BuyerMessage: (this.BuyerMessage === undefined)? null : this.BuyerMessage,
		DutchAuctionBid: (this.DutchAuctionBid === undefined)? null : this.DutchAuctionBid.toJSON(),
		BuyerPaidStatus: (this.BuyerPaidStatus === undefined)? null : this.BuyerPaidStatus,
		SellerPaidStatus: (this.SellerPaidStatus === undefined)? null : this.SellerPaidStatus,
		PaidTime: (this.PaidTime === undefined)? null : this.PaidTime,
		ShippedTime: (this.ShippedTime === undefined)? null : this.ShippedTime,
		TotalPrice: (this.TotalPrice === undefined)? null : this.TotalPrice.toJSON(),
		FeedbackLeft: (this.FeedbackLeft === undefined)? null : this.FeedbackLeft.toJSON(),
		FeedbackReceived: (this.FeedbackReceived === undefined)? null : this.FeedbackReceived.toJSON(),
		ContainingOrder: (this.ContainingOrder === undefined)? null : this.ContainingOrder.toJSON(),
		FinalValueFee: (this.FinalValueFee === undefined)? null : this.FinalValueFee.toJSON(),
		ListingCheckoutRedirectPreference: (this.ListingCheckoutRedirectPreference === undefined)? null : this.ListingCheckoutRedirectPreference.toJSON(),
		RefundArray: (this.RefundArray === undefined)? null : this.RefundArray.toJSON(),
		TransactionSiteID: (this.TransactionSiteID === undefined)? null : this.TransactionSiteID,
		Platform: (this.Platform === undefined)? null : this.Platform,
		CartID: (this.CartID === undefined)? null : this.CartID,
		SellerContactBuyerByEmail: (this.SellerContactBuyerByEmail === undefined)? null : this.SellerContactBuyerByEmail,
		PayPalEmailAddress: (this.PayPalEmailAddress === undefined)? null : this.PayPalEmailAddress,
		PaisaPayID: (this.PaisaPayID === undefined)? null : this.PaisaPayID,
		BuyerGuaranteePrice: (this.BuyerGuaranteePrice === undefined)? null : this.BuyerGuaranteePrice.toJSON(),
		Variation: (this.Variation === undefined)? null : this.Variation.toJSON(),
		BuyerCheckoutMessage: (this.BuyerCheckoutMessage === undefined)? null : this.BuyerCheckoutMessage,
		Taxes: (this.Taxes === undefined)? null : this.Taxes.toJSON(),
		BundlePurchase: (this.BundlePurchase === undefined)? null : this.BundlePurchase,
		ActualShippingCost: (this.ActualShippingCost === undefined)? null : this.ActualShippingCost.toJSON(),
		ActualHandlingCost: (this.ActualHandlingCost === undefined)? null : this.ActualHandlingCost.toJSON(),
		OrderLineItemID: (this.OrderLineItemID === undefined)? null : this.OrderLineItemID,
		PaymentHoldDetails: (this.PaymentHoldDetails === undefined)? null : this.PaymentHoldDetails.toJSON(),
		SellerDiscounts: (this.SellerDiscounts === undefined)? null : this.SellerDiscounts.toJSON(),
		RefundAmount: (this.RefundAmount === undefined)? null : this.RefundAmount.toJSON(),
		RefundStatus: (this.RefundStatus === undefined)? null : this.RefundStatus,
		CodiceFiscale: (this.CodiceFiscale === undefined)? null : this.CodiceFiscale,
		IsMultiLegShipping: (this.IsMultiLegShipping === undefined)? null : this.IsMultiLegShipping,
		MultiLegShippingDetails: (this.MultiLegShippingDetails === undefined)? null : this.MultiLegShippingDetails.toJSON(),
		InvoiceSentTime: (this.InvoiceSentTime === undefined)? null : this.InvoiceSentTime,
		UnpaidItem: (this.UnpaidItem === undefined)? null : this.UnpaidItem.toJSON(),
		IntangibleItem: (this.IntangibleItem === undefined)? null : this.IntangibleItem,
		MonetaryDetails: (this.MonetaryDetails === undefined)? null : this.MonetaryDetails.toJSON(),
		PickupDetails: (this.PickupDetails === undefined)? null : this.PickupDetails.toJSON(),
		PickupMethodSelected: (this.PickupMethodSelected === undefined)? null : this.PickupMethodSelected.toJSON(),
		ShippingConvenienceCharge: (this.ShippingConvenienceCharge === undefined)? null : this.ShippingConvenienceCharge.toJSON(),
		LogisticsPlanType: (this.LogisticsPlanType === undefined)? null : this.LogisticsPlanType,
		BuyerPackageEnclosures: (this.BuyerPackageEnclosures === undefined)? null : this.BuyerPackageEnclosures.toJSON(),
		InventoryReservationID: (this.InventoryReservationID === undefined)? null : this.InventoryReservationID,
		ExtendedOrderID: (this.ExtendedOrderID === undefined)? null : this.ExtendedOrderID,
		eBayPlusTransaction: (this.eBayPlusTransaction === undefined)? null : this.eBayPlusTransaction,
		GiftSummary: (this.GiftSummary === undefined)? null : this.GiftSummary.toJSON(),
		DigitalDeliverySelected: (this.DigitalDeliverySelected === undefined)? null : this.DigitalDeliverySelected.toJSON(),
		Gift: (this.Gift === undefined)? null : this.Gift
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
module.exports = TransactionType;