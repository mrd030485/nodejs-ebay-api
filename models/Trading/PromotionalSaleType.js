var ItemIDArrayType = require('./ItemIDArrayType');

function PromotionalSaleType(PromotionalSaleID, PromotionalSaleName, PromotionalSaleItemIDArray, Status, DiscountType, DiscountValue, PromotionalSaleStartTime, PromotionalSaleEndTime, PromotionalSaleType) {

	/**
	  Documentation
	   Details for a single promotional sale.
	 */

	/**
	 * Arrays
	 */
	var _PromotionalSaleItemIDArray;
	Object.defineProperty(this, 'PromotionalSaleItemIDArray', {
		 get: function(){
			 return _PromotionalSaleItemIDArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemIDArrayType){ 
					_PromotionalSaleItemIDArray = value; 
				}else{
					console.log('PromotionalSaleItemIDArray expects type ItemIDArrayType');
				}
			}
		}
	});
	this.PromotionalSaleID = PromotionalSaleID;
	this.PromotionalSaleName = PromotionalSaleName;
	this.PromotionalSaleItemIDArray = PromotionalSaleItemIDArray;
	this.Status = Status;
	this.DiscountType = DiscountType;
	this.DiscountValue = DiscountValue;
	this.PromotionalSaleStartTime = PromotionalSaleStartTime;
	this.PromotionalSaleEndTime = PromotionalSaleEndTime;
	this.PromotionalSaleType = PromotionalSaleType;
}
PromotionalSaleType.prototype.toJSON = function(with_null) {
	var json = { 
		PromotionalSaleID: (this.PromotionalSaleID === undefined)? null : this.PromotionalSaleID,
		PromotionalSaleName: (this.PromotionalSaleName === undefined)? null : this.PromotionalSaleName,
		PromotionalSaleItemIDArray: (this.PromotionalSaleItemIDArray === undefined)? null : this.PromotionalSaleItemIDArray.toJSON(),
		Status: (this.Status === undefined)? null : this.Status,
		DiscountType: (this.DiscountType === undefined)? null : this.DiscountType,
		DiscountValue: (this.DiscountValue === undefined)? null : this.DiscountValue,
		PromotionalSaleStartTime: (this.PromotionalSaleStartTime === undefined)? null : this.PromotionalSaleStartTime,
		PromotionalSaleEndTime: (this.PromotionalSaleEndTime === undefined)? null : this.PromotionalSaleEndTime,
		PromotionalSaleType: (this.PromotionalSaleType === undefined)? null : this.PromotionalSaleType
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
module.exports = PromotionalSaleType;