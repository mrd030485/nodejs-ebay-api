var ItemIDType = require('../../Trading/ItemIDType');

function GetItemShippingRequestType(ItemID, QuantitySold, DestinationPostalCode, DestinationCountryCode) {

	/**
	  Documentation
	   Returns shipping cost estimates for an item for every calculated shipping service that the seller has offered with the listing. This is analogous to the Shipping Calculator seen in both the buyer and seller web pages.
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
	this.ItemID = ItemID;
	this.QuantitySold = QuantitySold;
	this.DestinationPostalCode = DestinationPostalCode;
	this.DestinationCountryCode = DestinationCountryCode;
}
GetItemShippingRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		QuantitySold: (this.QuantitySold === undefined)? null : this.QuantitySold,
		DestinationPostalCode: (this.DestinationPostalCode === undefined)? null : this.DestinationPostalCode,
		DestinationCountryCode: (this.DestinationCountryCode === undefined)? null : this.DestinationCountryCode
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
module.exports = GetItemShippingRequestType;