var ItemIDType = require('./ItemIDType');

function LineItemType(Quantity, CountryOfOrigin, Description, ItemID, TransactionID) {

	/**
	  Documentation
	   This type provides information about one order line item in a Global Shipping package. The package can contain multiple units of a given order line item.
	 */

	/**
	 * Arrays
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
	this.Quantity = Quantity;
	this.CountryOfOrigin = CountryOfOrigin;
	this.Description = Description;
	this.ItemID = ItemID;
	this.TransactionID = TransactionID;
}
LineItemType.prototype.toJSON = function(with_null) {
	var json = { 
		Quantity: (this.Quantity === undefined)? null : this.Quantity,
		CountryOfOrigin: (this.CountryOfOrigin === undefined)? null : this.CountryOfOrigin,
		Description: (this.Description === undefined)? null : this.Description,
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID
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
module.exports = LineItemType;