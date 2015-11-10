var AmountType = require('./AmountType');

function PromotionDetailsType(PromotionPrice, PromotionPriceType, BidCount, ConvertedPromotionPrice) {

	/**
	  Documentation
	   This type is deprecated as Cross Promotions are no longer supported in the APIs. 
	 */

	/**
	 * Arrays
	 */
	var _PromotionPrice;
	var _ConvertedPromotionPrice;
	Object.defineProperty(this, 'PromotionPrice', {
		 get: function(){
			 return _PromotionPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_PromotionPrice = value; 
				}else{
					console.log('PromotionPrice expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ConvertedPromotionPrice', {
		 get: function(){
			 return _ConvertedPromotionPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ConvertedPromotionPrice = value; 
				}else{
					console.log('ConvertedPromotionPrice expects type AmountType');
				}
			}
		}
	});
	this.PromotionPrice = PromotionPrice;
	this.PromotionPriceType = PromotionPriceType;
	this.BidCount = BidCount;
	this.ConvertedPromotionPrice = ConvertedPromotionPrice;
}
PromotionDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		PromotionPrice: (this.PromotionPrice === undefined)? null : this.PromotionPrice.toJSON(),
		PromotionPriceType: (this.PromotionPriceType === undefined)? null : this.PromotionPriceType,
		BidCount: (this.BidCount === undefined)? null : this.BidCount,
		ConvertedPromotionPrice: (this.ConvertedPromotionPrice === undefined)? null : this.ConvertedPromotionPrice.toJSON()
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
module.exports = PromotionDetailsType;