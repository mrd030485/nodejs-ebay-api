var ItemIDArrayType = require('./ItemIDArrayType'),
	PromotionalSaleStatusCodeType = require('./PromotionalSaleStatusCodeType'),
	DiscountCodeType = require('./DiscountCodeType'),
	PromotionalSaleTypeCodeType = require('./PromotionalSaleTypeCodeType');

function PromotionalSaleType(PromotionalSaleID, PromotionalSaleName, PromotionalSaleItemIDArray, Status, DiscountType, DiscountValue, PromotionalSaleStartTime, PromotionalSaleEndTime, PromotionalSaleType) {

	/**
	  Documentation
	   
                Details for a single promotional sale.
            
	 */

	/**
	 * Arrays
	 */
	var _PromotionalSaleItemIDArray;
	var _Status;
	var _DiscountType;
	var _PromotionalSaleType;
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
	Object.defineProperty(this, 'Status', {
		 get: function(){
			 return _Status;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PromotionalSaleStatusCodeType){ 
					_Status = value; 
				}else{
					console.log('Status expects type PromotionalSaleStatusCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DiscountType', {
		 get: function(){
			 return _DiscountType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DiscountCodeType){ 
					_DiscountType = value; 
				}else{
					console.log('DiscountType expects type DiscountCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PromotionalSaleType', {
		 get: function(){
			 return _PromotionalSaleType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PromotionalSaleTypeCodeType){ 
					_PromotionalSaleType = value; 
				}else{
					console.log('PromotionalSaleType expects type PromotionalSaleTypeCodeType');
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
		Status: (this.Status === undefined)? null : this.Status.toJSON(),
		DiscountType: (this.DiscountType === undefined)? null : this.DiscountType.toJSON(),
		DiscountValue: (this.DiscountValue === undefined)? null : this.DiscountValue,
		PromotionalSaleStartTime: (this.PromotionalSaleStartTime === undefined)? null : this.PromotionalSaleStartTime,
		PromotionalSaleEndTime: (this.PromotionalSaleEndTime === undefined)? null : this.PromotionalSaleEndTime,
		PromotionalSaleType: (this.PromotionalSaleType === undefined)? null : this.PromotionalSaleType.toJSON()
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