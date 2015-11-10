var ProductInfoType = require('./ProductInfoType');

function PricingRecommendationsType(ProductInfo) {

	/**
	  Documentation
	   Pricing data returned from the Product Pricing engine.
	 */

	/**
	 * Arrays
	 */
	var _ProductInfo;
	Object.defineProperty(this, 'ProductInfo', {
		 get: function(){
			 return _ProductInfo;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ProductInfoType){ 
					_ProductInfo = value; 
				}else{
					console.log('ProductInfo expects type ProductInfoType');
				}
			}
		}
	});
	this.ProductInfo = ProductInfo;
}
PricingRecommendationsType.prototype.toJSON = function(with_null) {
	var json = { 
		ProductInfo: (this.ProductInfo === undefined)? null : this.ProductInfo.toJSON()
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
module.exports = PricingRecommendationsType;