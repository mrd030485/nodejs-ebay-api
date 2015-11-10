var ItemIDType = require('./ItemIDType'),
	EndReasonCodeType = require('./EndReasonCodeType');

function EndItemRequestContainerType(ItemID, EndingReason, MessageID, SellerInventoryID) {

	/**
	  Documentation
	   
                A container to specify a single eBay item to end.
            
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	var _EndingReason;
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
	Object.defineProperty(this, 'EndingReason', {
		 get: function(){
			 return _EndingReason;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof EndReasonCodeType){ 
					_EndingReason = value; 
				}else{
					console.log('EndingReason expects type EndReasonCodeType');
				}
			}
		}
	});
	this.ItemID = ItemID;
	this.EndingReason = EndingReason;
	this.MessageID = MessageID;
	this.SellerInventoryID = SellerInventoryID;
}
EndItemRequestContainerType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		EndingReason: (this.EndingReason === undefined)? null : this.EndingReason.toJSON(),
		MessageID: (this.MessageID === undefined)? null : this.MessageID,
		SellerInventoryID: (this.SellerInventoryID === undefined)? null : this.SellerInventoryID
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
module.exports = EndItemRequestContainerType;