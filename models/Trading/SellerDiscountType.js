var AmountType = require('./AmountType');

function SellerDiscountType(CampaignID, CampaignDisplayName, ItemDiscountAmount, ShippingDiscountAmount) {

	/**
	  Documentation
	   Type that defines the <b>SellerDiscount</b> container, which contains the ID, name, and amount of the seller discount.
	 */

	/**
	 * Arrays
	 */
	var _ItemDiscountAmount;
	var _ShippingDiscountAmount;
	Object.defineProperty(this, 'ItemDiscountAmount', {
		 get: function(){
			 return _ItemDiscountAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ItemDiscountAmount = value; 
				}else{
					console.log('ItemDiscountAmount expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ShippingDiscountAmount', {
		 get: function(){
			 return _ShippingDiscountAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ShippingDiscountAmount = value; 
				}else{
					console.log('ShippingDiscountAmount expects type AmountType');
				}
			}
		}
	});
	this.CampaignID = CampaignID;
	this.CampaignDisplayName = CampaignDisplayName;
	this.ItemDiscountAmount = ItemDiscountAmount;
	this.ShippingDiscountAmount = ShippingDiscountAmount;
}
SellerDiscountType.prototype.toJSON = function(with_null) {
	var json = { 
		CampaignID: (this.CampaignID === undefined)? null : this.CampaignID,
		CampaignDisplayName: (this.CampaignDisplayName === undefined)? null : this.CampaignDisplayName,
		ItemDiscountAmount: (this.ItemDiscountAmount === undefined)? null : this.ItemDiscountAmount.toJSON(),
		ShippingDiscountAmount: (this.ShippingDiscountAmount === undefined)? null : this.ShippingDiscountAmount.toJSON()
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
module.exports = SellerDiscountType;