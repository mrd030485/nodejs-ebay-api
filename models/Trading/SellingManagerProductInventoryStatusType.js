var AmountType = require('./AmountType');

function SellingManagerProductInventoryStatusType(QuantityScheduled, QuantityActive, QuantitySold, QuantityUnsold, SuccessPercent, AverageSellingPrice) {

	/**
	  Documentation
	   Describes the inventory status of a specific Selling Manager Product
	 */

	/**
	 * Arrays
	 */
	var _AverageSellingPrice;
	Object.defineProperty(this, 'AverageSellingPrice', {
		 get: function(){
			 return _AverageSellingPrice;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_AverageSellingPrice = value; 
				}else{
					console.log('AverageSellingPrice expects type AmountType');
				}
			}
		}
	});
	this.QuantityScheduled = QuantityScheduled;
	this.QuantityActive = QuantityActive;
	this.QuantitySold = QuantitySold;
	this.QuantityUnsold = QuantityUnsold;
	this.SuccessPercent = SuccessPercent;
	this.AverageSellingPrice = AverageSellingPrice;
}
SellingManagerProductInventoryStatusType.prototype.toJSON = function(with_null) {
	var json = { 
		QuantityScheduled: (this.QuantityScheduled === undefined)? null : this.QuantityScheduled,
		QuantityActive: (this.QuantityActive === undefined)? null : this.QuantityActive,
		QuantitySold: (this.QuantitySold === undefined)? null : this.QuantitySold,
		QuantityUnsold: (this.QuantityUnsold === undefined)? null : this.QuantityUnsold,
		SuccessPercent: (this.SuccessPercent === undefined)? null : this.SuccessPercent,
		AverageSellingPrice: (this.AverageSellingPrice === undefined)? null : this.AverageSellingPrice.toJSON()
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
module.exports = SellingManagerProductInventoryStatusType;