var ItemIDType = require('../../Trading/ItemIDType');

function RespondToWantItNowPostRequestType(ItemID, PostID) {

	/**
	  Documentation
	   Enables a seller to respond to a Want It Now post with an item listed on the eBay site. Responses appear on the Want It Now post page, with the item title, the price of the item, the number of bids on the item, and the time left before
                    the listing ends. If the item has a picture, the picture is also included on the Want It Now post page.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	var _PostID;
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
	Object.defineProperty(this, 'PostID', {
		 get: function(){
			 return _PostID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemIDType){ 
					_PostID = value; 
				}else{
					console.log('PostID expects type ItemIDType');
				}
			}
		}
	});
	this.ItemID = ItemID;
	this.PostID = PostID;
}
RespondToWantItNowPostRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		PostID: (this.PostID === undefined)? null : this.PostID.toJSON()
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
module.exports = RespondToWantItNowPostRequestType;