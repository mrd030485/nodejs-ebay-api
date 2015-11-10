var BrandMPNType = require('./BrandMPNType'),
	TicketListingDetailsType = require('./TicketListingDetailsType');

function ProductListingDetailsType(ProductID, IncludeStockPhotoURL, UseStockPhotoURLAsGallery, StockPhotoURL, Copyright, ProductReferenceID, DetailsURL, ProductDetailsURL, ReturnSearchResultOnDuplicates, ISBN, UPC, EAN, BrandMPN, TicketListingDetails, UseFirstProduct, IncludeeBayProductDetails) {

	/**
	  Documentation
	   Contains product information that can be included in a listing. Applicable for listings that use eBay's Pre-filled Item Information feature. See the Developer's Guide for details on working with Pre-filled Item Information.
	 */

	/**
	 * Arrays
	 */
	var _BrandMPN;
	var _TicketListingDetails;
	Object.defineProperty(this, 'BrandMPN', {
		 get: function(){
			 return _BrandMPN;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BrandMPNType){ 
					_BrandMPN = value; 
				}else{
					console.log('BrandMPN expects type BrandMPNType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TicketListingDetails', {
		 get: function(){
			 return _TicketListingDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof TicketListingDetailsType){ 
					_TicketListingDetails = value; 
				}else{
					console.log('TicketListingDetails expects type TicketListingDetailsType');
				}
			}
		}
	});
	this.ProductID = ProductID;
	this.IncludeStockPhotoURL = IncludeStockPhotoURL;
	this.UseStockPhotoURLAsGallery = UseStockPhotoURLAsGallery;
	this.StockPhotoURL = StockPhotoURL;
	this.Copyright = Copyright;
	this.ProductReferenceID = ProductReferenceID;
	this.DetailsURL = DetailsURL;
	this.ProductDetailsURL = ProductDetailsURL;
	this.ReturnSearchResultOnDuplicates = ReturnSearchResultOnDuplicates;
	this.ISBN = ISBN;
	this.UPC = UPC;
	this.EAN = EAN;
	this.BrandMPN = BrandMPN;
	this.TicketListingDetails = TicketListingDetails;
	this.UseFirstProduct = UseFirstProduct;
	this.IncludeeBayProductDetails = IncludeeBayProductDetails;
}
ProductListingDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		ProductID: (this.ProductID === undefined)? null : this.ProductID,
		IncludeStockPhotoURL: (this.IncludeStockPhotoURL === undefined)? null : this.IncludeStockPhotoURL,
		UseStockPhotoURLAsGallery: (this.UseStockPhotoURLAsGallery === undefined)? null : this.UseStockPhotoURLAsGallery,
		StockPhotoURL: (this.StockPhotoURL === undefined)? null : this.StockPhotoURL,
		Copyright: (this.Copyright === undefined)? null : this.Copyright,
		ProductReferenceID: (this.ProductReferenceID === undefined)? null : this.ProductReferenceID,
		DetailsURL: (this.DetailsURL === undefined)? null : this.DetailsURL,
		ProductDetailsURL: (this.ProductDetailsURL === undefined)? null : this.ProductDetailsURL,
		ReturnSearchResultOnDuplicates: (this.ReturnSearchResultOnDuplicates === undefined)? null : this.ReturnSearchResultOnDuplicates,
		ISBN: (this.ISBN === undefined)? null : this.ISBN,
		UPC: (this.UPC === undefined)? null : this.UPC,
		EAN: (this.EAN === undefined)? null : this.EAN,
		BrandMPN: (this.BrandMPN === undefined)? null : this.BrandMPN.toJSON(),
		TicketListingDetails: (this.TicketListingDetails === undefined)? null : this.TicketListingDetails.toJSON(),
		UseFirstProduct: (this.UseFirstProduct === undefined)? null : this.UseFirstProduct,
		IncludeeBayProductDetails: (this.IncludeeBayProductDetails === undefined)? null : this.IncludeeBayProductDetails
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
module.exports = ProductListingDetailsType;