var AmountType = require('./AmountType'),
	ProductStateCodeType = require('./ProductStateCodeType');

function ProductInfoType(AverageStartPrice, AverageSoldPrice, Title, ProductState) {
	/**
	 * Arrays
	 */
	var _AverageStartPrice;
	var _AverageSoldPrice;
	var _ProductState;
	Object.defineProperty(this, 'AverageStartPrice', {
		 get: function(){
			 return _AverageStartPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_AverageStartPrice = value; 
				}else{
					console.log('AverageStartPrice expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'AverageSoldPrice', {
		 get: function(){
			 return _AverageSoldPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_AverageSoldPrice = value; 
				}else{
					console.log('AverageSoldPrice expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ProductState', {
		 get: function(){
			 return _ProductState;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ProductStateCodeType){ 
					_ProductState = value; 
				}else{
					console.log('ProductState expects type ProductStateCodeType');
				}
			}
		}
	});
	this.AverageStartPrice = AverageStartPrice;
	this.AverageSoldPrice = AverageSoldPrice;
	this.Title = Title;
	this.ProductState = ProductState;
}
ProductInfoType.prototype.toJSON = function(with_null) {
	var json = { 
		AverageStartPrice: (this.AverageStartPrice === undefined)? null : this.AverageStartPrice.toJSON(),
		AverageSoldPrice: (this.AverageSoldPrice === undefined)? null : this.AverageSoldPrice.toJSON(),
		Title: (this.Title === undefined)? null : this.Title,
		ProductState: (this.ProductState === undefined)? null : this.ProductState.toJSON()
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
module.exports = ProductInfoType;