var ExternalProductIDType = require('./ExternalProductIDType'),
	NameValueListArrayType = require('./NameValueListArrayType'),
	ReviewDetailsType = require('./ReviewDetailsType'),
	ProductStateCodeType = require('./ProductStateCodeType');

function CatalogProductType(Title, DetailsURL, StockPhotoURL, DisplayStockPhotos, ItemCount, ExternalProductID, ProductReferenceID, AttributeSetID, ItemSpecifics, ReviewCount, ReviewDetails, ProductState) {

	/**
	  Documentation
	   
                This type is deprecated.
            
	 */

	/**
	 * Arrays
	 */
	var _ExternalProductID;
	var _ItemSpecifics;
	var _ReviewDetails;
	var _ProductState;
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
	Object.defineProperty(this, 'ItemSpecifics', {
		 get: function(){
			 return _ItemSpecifics;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof NameValueListArrayType){ 
					_ItemSpecifics = value; 
				}else{
					console.log('ItemSpecifics expects type NameValueListArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ReviewDetails', {
		 get: function(){
			 return _ReviewDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ReviewDetailsType){ 
					_ReviewDetails = value; 
				}else{
					console.log('ReviewDetails expects type ReviewDetailsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ProductState', {
		 get: function(){
			 return _ProductState;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ProductStateCodeType){ 
					_ProductState = value; 
				}else{
					console.log('ProductState expects type ProductStateCodeType');
				}
			}
		}
	});
	this.Title = Title;
	this.DetailsURL = DetailsURL;
	this.StockPhotoURL = StockPhotoURL;
	this.DisplayStockPhotos = DisplayStockPhotos;
	this.ItemCount = ItemCount;
	this.ExternalProductID = ExternalProductID;
	this.ProductReferenceID = ProductReferenceID;
	this.AttributeSetID = AttributeSetID;
	this.ItemSpecifics = ItemSpecifics;
	this.ReviewCount = ReviewCount;
	this.ReviewDetails = ReviewDetails;
	this.ProductState = ProductState;
}
CatalogProductType.prototype.toJSON = function(with_null) {
	var json = { 
		Title: (this.Title === undefined)? null : this.Title,
		DetailsURL: (this.DetailsURL === undefined)? null : this.DetailsURL,
		StockPhotoURL: (this.StockPhotoURL === undefined)? null : this.StockPhotoURL,
		DisplayStockPhotos: (this.DisplayStockPhotos === undefined)? null : this.DisplayStockPhotos,
		ItemCount: (this.ItemCount === undefined)? null : this.ItemCount,
		ExternalProductID: (this.ExternalProductID === undefined)? null : this.ExternalProductID.toJSON(),
		ProductReferenceID: (this.ProductReferenceID === undefined)? null : this.ProductReferenceID,
		AttributeSetID: (this.AttributeSetID === undefined)? null : this.AttributeSetID,
		ItemSpecifics: (this.ItemSpecifics === undefined)? null : this.ItemSpecifics.toJSON(),
		ReviewCount: (this.ReviewCount === undefined)? null : this.ReviewCount,
		ReviewDetails: (this.ReviewDetails === undefined)? null : this.ReviewDetails.toJSON(),
		ProductState: (this.ProductState === undefined)? null : this.ProductState.toJSON()
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
module.exports = CatalogProductType;