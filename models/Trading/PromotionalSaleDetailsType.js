var AmountType = require('./AmountType');

function PromotionalSaleDetailsType(OriginalPrice, StartTime, EndTime) {

	/**
	  Documentation
	   If a seller has reduced the price of a listed item with the Promotional Price Display feature, this type contains the original price of the discounted item and other information.
	 */

	/**
	 * Arrays
	 */
	var _OriginalPrice;
	Object.defineProperty(this, 'OriginalPrice', {
		 get: function(){
			 return _OriginalPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_OriginalPrice = value; 
				}else{
					console.log('OriginalPrice expects type AmountType');
				}
			}
		}
	});
	this.OriginalPrice = OriginalPrice;
	this.StartTime = StartTime;
	this.EndTime = EndTime;
}
PromotionalSaleDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		OriginalPrice: (this.OriginalPrice === undefined)? null : this.OriginalPrice.toJSON(),
		StartTime: (this.StartTime === undefined)? null : this.StartTime,
		EndTime: (this.EndTime === undefined)? null : this.EndTime
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
module.exports = PromotionalSaleDetailsType;