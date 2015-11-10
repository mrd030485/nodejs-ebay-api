var AmountType = require('./AmountType');

function FeeType(Name, Fee, PromotionalDiscount) {

	/**
	  Documentation
	   
                Identifies the name and cost of a listing feature that a member pays to eBay (or an eBay company). These listing feature names, fees, and possible discounts are intended only as an aid to help estimate the fees for a listing. Use GetAccount for an accurate
                final fee breakdown. Returned in AddItemResponseType and related response types.
            
	 */

	/**
	 * Arrays
	 */
	var _Fee;
	var _PromotionalDiscount;
	Object.defineProperty(this, 'Fee', {
		 get: function(){
			 return _Fee;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_Fee = value; 
				}else{
					console.log('Fee expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PromotionalDiscount', {
		 get: function(){
			 return _PromotionalDiscount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_PromotionalDiscount = value; 
				}else{
					console.log('PromotionalDiscount expects type AmountType');
				}
			}
		}
	});
	this.Name = Name;
	this.Fee = Fee;
	this.PromotionalDiscount = PromotionalDiscount;
}
FeeType.prototype.toJSON = function(with_null) {
	var json = { 
		Name: (this.Name === undefined)? null : this.Name,
		Fee: (this.Fee === undefined)? null : this.Fee.toJSON(),
		PromotionalDiscount: (this.PromotionalDiscount === undefined)? null : this.PromotionalDiscount.toJSON()
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
module.exports = FeeType;