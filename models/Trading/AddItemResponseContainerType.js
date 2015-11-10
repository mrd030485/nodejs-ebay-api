var ItemIDType = require('./ItemIDType'),
	FeesType = require('./FeesType'),
	ListingRecommendationsType = require('./ListingRecommendationsType');

function AddItemResponseContainerType(ItemID, StartTime, EndTime, Fees, CategoryID, Category2ID, CorrelationID, Errors, Message, DiscountReason, ListingRecommendations) {

	/**
	  Documentation
	   Type defining the <b>AddItemResponseContainer</b> containers that are returned in an <b>AddItems</b> call. An <b>AddItemResponseContainer</b> container is returned for each item created through an <b>AddItems</b>
                    call. Each item being created through an <b>AddItems</b> call is identified through a unique <b>AddItemRequestContainer.MessageID</b> value that is defined by the seller. To match up the <b>AddItemResponseContainer</b>
                    to the <b>AddItemRequestContainer</b>, look for a <b>AddItemResponseContainer.CorrelationID</b> value that matches the <b>AddItemRequestContainer.MessageID</b> value in the request.
	 */

	/**
	 * Arrays
	 *	Errors: ErrorType
	 */
	var _ItemID;
	var _Fees;
	var _ListingRecommendations;
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
	Object.defineProperty(this, 'Fees', {
		 get: function(){
			 return _Fees;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FeesType){ 
					_Fees = value; 
				}else{
					console.log('Fees expects type FeesType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ListingRecommendations', {
		 get: function(){
			 return _ListingRecommendations;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ListingRecommendationsType){ 
					_ListingRecommendations = value; 
				}else{
					console.log('ListingRecommendations expects type ListingRecommendationsType');
				}
			}
		}
	});
	this.ItemID = ItemID;
	this.StartTime = StartTime;
	this.EndTime = EndTime;
	this.Fees = Fees;
	this.CategoryID = CategoryID;
	this.Category2ID = Category2ID;
	this.CorrelationID = CorrelationID;
	this.Errors = Errors;
	this.Message = Message;
	this.DiscountReason = DiscountReason;
	this.ListingRecommendations = ListingRecommendations;
}
AddItemResponseContainerType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		StartTime: (this.StartTime === undefined)? null : this.StartTime,
		EndTime: (this.EndTime === undefined)? null : this.EndTime,
		Fees: (this.Fees === undefined)? null : this.Fees.toJSON(),
		CategoryID: (this.CategoryID === undefined)? null : this.CategoryID,
		Category2ID: (this.Category2ID === undefined)? null : this.Category2ID,
		CorrelationID: (this.CorrelationID === undefined)? null : this.CorrelationID,
		Errors: (this.Errors === undefined)? null : this.Errors,
		Message: (this.Message === undefined)? null : this.Message,
		DiscountReason: (this.DiscountReason === undefined)? null : this.DiscountReason,
		ListingRecommendations: (this.ListingRecommendations === undefined)? null : this.ListingRecommendations.toJSON()
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
module.exports = AddItemResponseContainerType;