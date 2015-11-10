var SKUType = require('./SKUType'),
	AmountType = require('./AmountType'),
	NameValueListArrayType = require('./NameValueListArrayType'),
	SellingStatusType = require('./SellingStatusType'),
	SellingManagerProductInventoryStatusType = require('./SellingManagerProductInventoryStatusType'),
	DiscountPriceInfoType = require('./DiscountPriceInfoType'),
	VariationProductListingDetailsType = require('./VariationProductListingDetailsType');

function VariationType(SKU, StartPrice, Quantity, VariationSpecifics, UnitsAvailable, UnitCost, SellingStatus, VariationTitle, VariationViewItemURL, Delete, SellingManagerProductInventoryStatus, WatchCount, PrivateNotes, DiscountPriceInfo, VariationProductListingDetails) {

	/**
	  Documentation
	   
                This type defines the <b>Variation</b> container, which provides full details on each item variation in a multi-variation listing.
            
	 */

	/**
	 * Arrays
	 */
	var _SKU;
	var _StartPrice;
	var _VariationSpecifics;
	var _UnitCost;
	var _SellingStatus;
	var _SellingManagerProductInventoryStatus;
	var _DiscountPriceInfo;
	var _VariationProductListingDetails;
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
	Object.defineProperty(this, 'VariationSpecifics', {
		 get: function(){
			 return _VariationSpecifics;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof NameValueListArrayType){ 
					_VariationSpecifics = value; 
				}else{
					console.log('VariationSpecifics expects type NameValueListArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'UnitCost', {
		 get: function(){
			 return _UnitCost;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_UnitCost = value; 
				}else{
					console.log('UnitCost expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellingStatus', {
		 get: function(){
			 return _SellingStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingStatusType){ 
					_SellingStatus = value; 
				}else{
					console.log('SellingStatus expects type SellingStatusType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellingManagerProductInventoryStatus', {
		 get: function(){
			 return _SellingManagerProductInventoryStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerProductInventoryStatusType){ 
					_SellingManagerProductInventoryStatus = value; 
				}else{
					console.log('SellingManagerProductInventoryStatus expects type SellingManagerProductInventoryStatusType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DiscountPriceInfo', {
		 get: function(){
			 return _DiscountPriceInfo;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DiscountPriceInfoType){ 
					_DiscountPriceInfo = value; 
				}else{
					console.log('DiscountPriceInfo expects type DiscountPriceInfoType');
				}
			}
		}
	});
	Object.defineProperty(this, 'VariationProductListingDetails', {
		 get: function(){
			 return _VariationProductListingDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof VariationProductListingDetailsType){ 
					_VariationProductListingDetails = value; 
				}else{
					console.log('VariationProductListingDetails expects type VariationProductListingDetailsType');
				}
			}
		}
	});
	this.SKU = SKU;
	this.StartPrice = StartPrice;
	this.Quantity = Quantity;
	this.VariationSpecifics = VariationSpecifics;
	this.UnitsAvailable = UnitsAvailable;
	this.UnitCost = UnitCost;
	this.SellingStatus = SellingStatus;
	this.VariationTitle = VariationTitle;
	this.VariationViewItemURL = VariationViewItemURL;
	this.Delete = Delete;
	this.SellingManagerProductInventoryStatus = SellingManagerProductInventoryStatus;
	this.WatchCount = WatchCount;
	this.PrivateNotes = PrivateNotes;
	this.DiscountPriceInfo = DiscountPriceInfo;
	this.VariationProductListingDetails = VariationProductListingDetails;
}
VariationType.prototype.toJSON = function(with_null) {
	var json = { 
		SKU: (this.SKU === undefined)? null : this.SKU.toJSON(),
		StartPrice: (this.StartPrice === undefined)? null : this.StartPrice.toJSON(),
		Quantity: (this.Quantity === undefined)? null : this.Quantity,
		VariationSpecifics: (this.VariationSpecifics === undefined)? null : this.VariationSpecifics.toJSON(),
		UnitsAvailable: (this.UnitsAvailable === undefined)? null : this.UnitsAvailable,
		UnitCost: (this.UnitCost === undefined)? null : this.UnitCost.toJSON(),
		SellingStatus: (this.SellingStatus === undefined)? null : this.SellingStatus.toJSON(),
		VariationTitle: (this.VariationTitle === undefined)? null : this.VariationTitle,
		VariationViewItemURL: (this.VariationViewItemURL === undefined)? null : this.VariationViewItemURL,
		Delete: (this.Delete === undefined)? null : this.Delete,
		SellingManagerProductInventoryStatus: (this.SellingManagerProductInventoryStatus === undefined)? null : this.SellingManagerProductInventoryStatus.toJSON(),
		WatchCount: (this.WatchCount === undefined)? null : this.WatchCount,
		PrivateNotes: (this.PrivateNotes === undefined)? null : this.PrivateNotes,
		DiscountPriceInfo: (this.DiscountPriceInfo === undefined)? null : this.DiscountPriceInfo.toJSON(),
		VariationProductListingDetails: (this.VariationProductListingDetails === undefined)? null : this.VariationProductListingDetails.toJSON()
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
module.exports = VariationType;