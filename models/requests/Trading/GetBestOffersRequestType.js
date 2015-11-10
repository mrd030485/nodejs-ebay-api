var ItemIDType = require('../../Trading/ItemIDType'),
	BestOfferIDType = require('../../Trading/BestOfferIDType'),
	PaginationType = require('../../Trading/PaginationType');

function GetBestOffersRequestType(ItemID, BestOfferID, BestOfferStatus, Pagination) {

	/**
	  Documentation
	   Retrieves Best Offers.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	var _BestOfferID;
	var _Pagination;
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
	Object.defineProperty(this, 'BestOfferID', {
		 get: function(){
			 return _BestOfferID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BestOfferIDType){ 
					_BestOfferID = value; 
				}else{
					console.log('BestOfferID expects type BestOfferIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Pagination', {
		 get: function(){
			 return _Pagination;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PaginationType){ 
					_Pagination = value; 
				}else{
					console.log('Pagination expects type PaginationType');
				}
			}
		}
	});
	this.ItemID = ItemID;
	this.BestOfferID = BestOfferID;
	this.BestOfferStatus = BestOfferStatus;
	this.Pagination = Pagination;
}
GetBestOffersRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		BestOfferID: (this.BestOfferID === undefined)? null : this.BestOfferID.toJSON(),
		BestOfferStatus: (this.BestOfferStatus === undefined)? null : this.BestOfferStatus,
		Pagination: (this.Pagination === undefined)? null : this.Pagination.toJSON()
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
module.exports = GetBestOffersRequestType;