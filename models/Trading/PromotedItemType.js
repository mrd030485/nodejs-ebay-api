var ItemIDType = require('./ItemIDType'),
	PromotionItemSelectionCodeType = require('./PromotionItemSelectionCodeType'),
	ListingTypeCodeType = require('./ListingTypeCodeType');

function PromotedItemType(ItemID, PictureURL, Position, SelectionType, Title, ListingType, PromotionDetails, TimeLeft) {

	/**
	  Documentation
	   
                This type is deprecated as Cross Promotions are no longer supported in the APIs.
            
	 */

	/**
	 * Arrays
	 *	PromotionDetails: PromotionDetailsType
	 */
	var _ItemID;
	var _SelectionType;
	var _ListingType;
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
	Object.defineProperty(this, 'SelectionType', {
		 get: function(){
			 return _SelectionType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PromotionItemSelectionCodeType){ 
					_SelectionType = value; 
				}else{
					console.log('SelectionType expects type PromotionItemSelectionCodeType');
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
	this.ItemID = ItemID;
	this.PictureURL = PictureURL;
	this.Position = Position;
	this.SelectionType = SelectionType;
	this.Title = Title;
	this.ListingType = ListingType;
	this.PromotionDetails = PromotionDetails;
	this.TimeLeft = TimeLeft;
}
PromotedItemType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		PictureURL: (this.PictureURL === undefined)? null : this.PictureURL,
		Position: (this.Position === undefined)? null : this.Position,
		SelectionType: (this.SelectionType === undefined)? null : this.SelectionType.toJSON(),
		Title: (this.Title === undefined)? null : this.Title,
		ListingType: (this.ListingType === undefined)? null : this.ListingType.toJSON(),
		PromotionDetails: (this.PromotionDetails === undefined)? null : this.PromotionDetails,
		TimeLeft: (this.TimeLeft === undefined)? null : this.TimeLeft
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
module.exports = PromotedItemType;