var ItemIDType = require('./ItemIDType'),
	AmountType = require('./AmountType'),
	ListingTypeCodeType = require('./ListingTypeCodeType'),
	TransactionPlatformCodeType = require('./TransactionPlatformCodeType'),
	ShipmentType = require('./ShipmentType'),
	VariationType = require('./VariationType');

function SellingManagerSoldTransactionType(InvoiceNumber, TransactionID, SaleRecordID, ItemID, QuantitySold, ItemPrice, SubtotalAmount, ItemTitle, ListingType, Relisted, WatchCount, StartPrice, ReservePrice, SecondChanceOfferSent, CustomLabel, SoldOn, ListedOn, Shipment, CharityListing, Variation, OrderLineItemID) {

	/**
	  Documentation
	   
                Contains information about a single line item (transaction) in an order created through Selling Manager.
            
	 */

	/**
	 * Arrays
	 *	ListedOn: TransactionPlatformCodeType
	 */
	var _ItemID;
	var _ItemPrice;
	var _SubtotalAmount;
	var _ListingType;
	var _StartPrice;
	var _ReservePrice;
	var _SoldOn;
	var _Shipment;
	var _Variation;
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
	Object.defineProperty(this, 'ItemPrice', {
		 get: function(){
			 return _ItemPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ItemPrice = value; 
				}else{
					console.log('ItemPrice expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SubtotalAmount', {
		 get: function(){
			 return _SubtotalAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_SubtotalAmount = value; 
				}else{
					console.log('SubtotalAmount expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ListingType', {
		 get: function(){
			 return _ListingType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ListingTypeCodeType){ 
					_ListingType = value; 
				}else{
					console.log('ListingType expects type ListingTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'StartPrice', {
		 get: function(){
			 return _StartPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_StartPrice = value; 
				}else{
					console.log('StartPrice expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ReservePrice', {
		 get: function(){
			 return _ReservePrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ReservePrice = value; 
				}else{
					console.log('ReservePrice expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SoldOn', {
		 get: function(){
			 return _SoldOn;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof TransactionPlatformCodeType){ 
					_SoldOn = value; 
				}else{
					console.log('SoldOn expects type TransactionPlatformCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Shipment', {
		 get: function(){
			 return _Shipment;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ShipmentType){ 
					_Shipment = value; 
				}else{
					console.log('Shipment expects type ShipmentType');
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
	this.InvoiceNumber = InvoiceNumber;
	this.TransactionID = TransactionID;
	this.SaleRecordID = SaleRecordID;
	this.ItemID = ItemID;
	this.QuantitySold = QuantitySold;
	this.ItemPrice = ItemPrice;
	this.SubtotalAmount = SubtotalAmount;
	this.ItemTitle = ItemTitle;
	this.ListingType = ListingType;
	this.Relisted = Relisted;
	this.WatchCount = WatchCount;
	this.StartPrice = StartPrice;
	this.ReservePrice = ReservePrice;
	this.SecondChanceOfferSent = SecondChanceOfferSent;
	this.CustomLabel = CustomLabel;
	this.SoldOn = SoldOn;
	this.ListedOn = ListedOn;
	this.Shipment = Shipment;
	this.CharityListing = CharityListing;
	this.Variation = Variation;
	this.OrderLineItemID = OrderLineItemID;
}
SellingManagerSoldTransactionType.prototype.toJSON = function(with_null) {
	var json = { 
		InvoiceNumber: (this.InvoiceNumber === undefined)? null : this.InvoiceNumber,
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		SaleRecordID: (this.SaleRecordID === undefined)? null : this.SaleRecordID,
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		QuantitySold: (this.QuantitySold === undefined)? null : this.QuantitySold,
		ItemPrice: (this.ItemPrice === undefined)? null : this.ItemPrice.toJSON(),
		SubtotalAmount: (this.SubtotalAmount === undefined)? null : this.SubtotalAmount.toJSON(),
		ItemTitle: (this.ItemTitle === undefined)? null : this.ItemTitle,
		ListingType: (this.ListingType === undefined)? null : this.ListingType.toJSON(),
		Relisted: (this.Relisted === undefined)? null : this.Relisted,
		WatchCount: (this.WatchCount === undefined)? null : this.WatchCount,
		StartPrice: (this.StartPrice === undefined)? null : this.StartPrice.toJSON(),
		ReservePrice: (this.ReservePrice === undefined)? null : this.ReservePrice.toJSON(),
		SecondChanceOfferSent: (this.SecondChanceOfferSent === undefined)? null : this.SecondChanceOfferSent,
		CustomLabel: (this.CustomLabel === undefined)? null : this.CustomLabel,
		SoldOn: (this.SoldOn === undefined)? null : this.SoldOn.toJSON(),
		ListedOn: (this.ListedOn === undefined)? null : this.ListedOn,
		Shipment: (this.Shipment === undefined)? null : this.Shipment.toJSON(),
		CharityListing: (this.CharityListing === undefined)? null : this.CharityListing,
		Variation: (this.Variation === undefined)? null : this.Variation.toJSON(),
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
module.exports = SellingManagerSoldTransactionType;