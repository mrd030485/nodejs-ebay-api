var ItemIDType = require('./ItemIDType');

function VATRateType(ItemID, TransactionID, VATPercent, OrderLineItemID) {

	/**
	  Documentation
	   
                Type defining the <b>VATRateType</b> container, which is used by <b>ReviseSellingManagerSaleRecord</b> to modify the VAT percentage for an order line item. This container is also retrieved by <b>GetSellingManagerSaleRecord</b>
                if Value-Added Tax has been applied to the order line item.
            
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
	this.TransactionID = TransactionID;
	this.VATPercent = VATPercent;
	this.OrderLineItemID = OrderLineItemID;
}
VATRateType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		TransactionID: (this.TransactionID === undefined)? null : this.TransactionID,
		VATPercent: (this.VATPercent === undefined)? null : this.VATPercent,
		OrderLineItemID: (this.OrderLineItemID === undefined)? null : this.OrderLineItemID
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
module.exports = VATRateType;