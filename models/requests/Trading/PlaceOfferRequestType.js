var OfferType = require('../../Trading/OfferType'),
	ItemIDType = require('../../Trading/ItemIDType'),
	AffiliateTrackingDetailsType = require('../../Trading/AffiliateTrackingDetailsType'),
	NameValueListArrayType = require('../../Trading/NameValueListArrayType');

function PlaceOfferRequestType(Offer, ItemID, BlockOnWarning, AffiliateTrackingDetails, VariationSpecifics) {

	/**
	  Documentation
	   Enables the authenticated user to make a bid, a Best Offer, or a purchase on the item specified by the ItemID input field.
	 */

	/**
	 * Arrays
	 */
	var _Offer;
	var _ItemID;
	var _AffiliateTrackingDetails;
	var _VariationSpecifics;
	Object.defineProperty(this, 'Offer', {
		 get: function(){
			 return _Offer;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof OfferType){ 
					_Offer = value; 
				}else{
					console.log('Offer expects type OfferType');
				}
			}
		}
	});
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
	Object.defineProperty(this, 'AffiliateTrackingDetails', {
		 get: function(){
			 return _AffiliateTrackingDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AffiliateTrackingDetailsType){ 
					_AffiliateTrackingDetails = value; 
				}else{
					console.log('AffiliateTrackingDetails expects type AffiliateTrackingDetailsType');
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
	this.Offer = Offer;
	this.ItemID = ItemID;
	this.BlockOnWarning = BlockOnWarning;
	this.AffiliateTrackingDetails = AffiliateTrackingDetails;
	this.VariationSpecifics = VariationSpecifics;
}
PlaceOfferRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		Offer: (this.Offer === undefined)? null : this.Offer.toJSON(),
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		BlockOnWarning: (this.BlockOnWarning === undefined)? null : this.BlockOnWarning,
		AffiliateTrackingDetails: (this.AffiliateTrackingDetails === undefined)? null : this.AffiliateTrackingDetails.toJSON(),
		VariationSpecifics: (this.VariationSpecifics === undefined)? null : this.VariationSpecifics.toJSON()
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
module.exports = PlaceOfferRequestType;