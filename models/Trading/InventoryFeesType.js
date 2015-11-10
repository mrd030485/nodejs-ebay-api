var ItemIDType = require('./ItemIDType');

function InventoryFeesType(ItemID, Fee) {

	/**
	  Documentation
	   
                This is used in ReviseInventoryStatus response to provide the set of fees associated with each unique ItemID..
            
	 */

	/**
	 * Arrays
	 *	Fee: FeeType
	 */
	var _ItemID;
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
	this.ItemID = ItemID;
	this.Fee = Fee;
}
InventoryFeesType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		Fee: (this.Fee === undefined)? null : this.Fee
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
module.exports = InventoryFeesType;