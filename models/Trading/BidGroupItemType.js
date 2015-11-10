var ItemType = require('./ItemType'),
	BidGroupItemStatusCodeType = require('./BidGroupItemStatusCodeType'),
	AmountType = require('./AmountType');

function BidGroupItemType(Item, BidGroupItemStatus, MaxBidAmount) {

	/**
	  Documentation
	   
                This type is deprecated.
            
	 */

	/**
	 * Arrays
	 */
	var _Item;
	var _BidGroupItemStatus;
	var _MaxBidAmount;
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
	Object.defineProperty(this, 'BidGroupItemStatus', {
		 get: function(){
			 return _BidGroupItemStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BidGroupItemStatusCodeType){ 
					_BidGroupItemStatus = value; 
				}else{
					console.log('BidGroupItemStatus expects type BidGroupItemStatusCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MaxBidAmount', {
		 get: function(){
			 return _MaxBidAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_MaxBidAmount = value; 
				}else{
					console.log('MaxBidAmount expects type AmountType');
				}
			}
		}
	});
	this.Item = Item;
	this.BidGroupItemStatus = BidGroupItemStatus;
	this.MaxBidAmount = MaxBidAmount;
}
BidGroupItemType.prototype.toJSON = function(with_null) {
	var json = { 
		Item: (this.Item === undefined)? null : this.Item.toJSON(),
		BidGroupItemStatus: (this.BidGroupItemStatus === undefined)? null : this.BidGroupItemStatus.toJSON(),
		MaxBidAmount: (this.MaxBidAmount === undefined)? null : this.MaxBidAmount.toJSON()
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
module.exports = BidGroupItemType;