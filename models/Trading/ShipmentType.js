var AmountType = require('./AmountType'),
	MeasureType = require('./MeasureType'),
	AddressType = require('./AddressType'),
	ShipmentLineItemType = require('./ShipmentLineItemType');

function ShipmentType(EstimatedDeliveryDate, InsuredValue, PackageDepth, PackageLength, PackageWidth, PayPalShipmentID, ShipmentID, PostageTotal, PrintedTime, ShipFromAddress, ShippingAddress, ShippingCarrierUsed, ShippingFeature, ShippingPackage, ShippingServiceUsed, ShipmentTrackingNumber, WeightMajor, WeightMinor, ItemTransactionID, DeliveryDate, DeliveryStatus, RefundGrantedTime, RefundRequestedTime, Status, ShippedTime, Notes, ShipmentTrackingDetails, ShipmentLineItem) {

	/**
	  Documentation
	   Type defining the <b>Shipment</b> container, which is used by the seller in <b>CompleteSale</b> to provide shipping information. The <b>Shipment</b> container is also returned in the <b>GetSellingManagerSaleRecord</b>
                    response.
                
	 */

	/**
	 * Arrays
	 *	ItemTransactionID: ItemTransactionIDType
	 *	ShipmentTrackingDetails: ShipmentTrackingDetailsType
	 */
	var _InsuredValue;
	var _PackageDepth;
	var _PackageLength;
	var _PackageWidth;
	var _PostageTotal;
	var _ShipFromAddress;
	var _ShippingAddress;
	var _WeightMajor;
	var _WeightMinor;
	var _ShipmentLineItem;
	Object.defineProperty(this, 'ShipFromAddress', {
		 get: function(){
			 return _ShipFromAddress;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AddressType){ 
					_ShipFromAddress = value; 
				}else{
					console.log('ShipFromAddress expects type AddressType');
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
	Object.defineProperty(this, 'ShipmentLineItem', {
		 get: function(){
			 return _ShipmentLineItem;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ShipmentLineItemType){ 
					_ShipmentLineItem = value; 
				}else{
					console.log('ShipmentLineItem expects type ShipmentLineItemType');
				}
			}
		}
	});
	this.EstimatedDeliveryDate = EstimatedDeliveryDate;
	this.InsuredValue = InsuredValue;
	this.PackageDepth = PackageDepth;
	this.PackageLength = PackageLength;
	this.PackageWidth = PackageWidth;
	this.PayPalShipmentID = PayPalShipmentID;
	this.ShipmentID = ShipmentID;
	this.PostageTotal = PostageTotal;
	this.PrintedTime = PrintedTime;
	this.ShipFromAddress = ShipFromAddress;
	this.ShippingAddress = ShippingAddress;
	this.ShippingCarrierUsed = ShippingCarrierUsed;
	this.ShippingFeature = ShippingFeature;
	this.ShippingPackage = ShippingPackage;
	this.ShippingServiceUsed = ShippingServiceUsed;
	this.ShipmentTrackingNumber = ShipmentTrackingNumber;
	this.WeightMajor = WeightMajor;
	this.WeightMinor = WeightMinor;
	this.ItemTransactionID = ItemTransactionID;
	this.DeliveryDate = DeliveryDate;
	this.DeliveryStatus = DeliveryStatus;
	this.RefundGrantedTime = RefundGrantedTime;
	this.RefundRequestedTime = RefundRequestedTime;
	this.Status = Status;
	this.ShippedTime = ShippedTime;
	this.Notes = Notes;
	this.ShipmentTrackingDetails = ShipmentTrackingDetails;
	this.ShipmentLineItem = ShipmentLineItem;
}
ShipmentType.prototype.toJSON = function(with_null) {
	var json = { 
		EstimatedDeliveryDate: (this.EstimatedDeliveryDate === undefined)? null : this.EstimatedDeliveryDate,
		InsuredValue: (this.InsuredValue === undefined)? null : this.InsuredValue,
		PackageDepth: (this.PackageDepth === undefined)? null : this.PackageDepth,
		PackageLength: (this.PackageLength === undefined)? null : this.PackageLength,
		PackageWidth: (this.PackageWidth === undefined)? null : this.PackageWidth,
		PayPalShipmentID: (this.PayPalShipmentID === undefined)? null : this.PayPalShipmentID,
		ShipmentID: (this.ShipmentID === undefined)? null : this.ShipmentID,
		PostageTotal: (this.PostageTotal === undefined)? null : this.PostageTotal,
		PrintedTime: (this.PrintedTime === undefined)? null : this.PrintedTime,
		ShipFromAddress: (this.ShipFromAddress === undefined)? null : this.ShipFromAddress.toJSON(),
		ShippingAddress: (this.ShippingAddress === undefined)? null : this.ShippingAddress.toJSON(),
		ShippingCarrierUsed: (this.ShippingCarrierUsed === undefined)? null : this.ShippingCarrierUsed,
		ShippingFeature: (this.ShippingFeature === undefined)? null : this.ShippingFeature,
		ShippingPackage: (this.ShippingPackage === undefined)? null : this.ShippingPackage,
		ShippingServiceUsed: (this.ShippingServiceUsed === undefined)? null : this.ShippingServiceUsed,
		ShipmentTrackingNumber: (this.ShipmentTrackingNumber === undefined)? null : this.ShipmentTrackingNumber,
		WeightMajor: (this.WeightMajor === undefined)? null : this.WeightMajor,
		WeightMinor: (this.WeightMinor === undefined)? null : this.WeightMinor,
		ItemTransactionID: (this.ItemTransactionID === undefined)? null : this.ItemTransactionID,
		DeliveryDate: (this.DeliveryDate === undefined)? null : this.DeliveryDate,
		DeliveryStatus: (this.DeliveryStatus === undefined)? null : this.DeliveryStatus,
		RefundGrantedTime: (this.RefundGrantedTime === undefined)? null : this.RefundGrantedTime,
		RefundRequestedTime: (this.RefundRequestedTime === undefined)? null : this.RefundRequestedTime,
		Status: (this.Status === undefined)? null : this.Status,
		ShippedTime: (this.ShippedTime === undefined)? null : this.ShippedTime,
		Notes: (this.Notes === undefined)? null : this.Notes,
		ShipmentTrackingDetails: (this.ShipmentTrackingDetails === undefined)? null : this.ShipmentTrackingDetails,
		ShipmentLineItem: (this.ShipmentLineItem === undefined)? null : this.ShipmentLineItem.toJSON()
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
module.exports = ShipmentType;
