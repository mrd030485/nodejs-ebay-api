var SellingManagerAutoSecondChanceOfferTypeCodeType = require('./SellingManagerAutoSecondChanceOfferTypeCodeType'),
	AmountType = require('./AmountType'),
	SecondChanceOfferDurationCodeType = require('./SecondChanceOfferDurationCodeType');

function SellingManagerAutoSecondChanceOfferType(SecondChanceOfferCondition, Amount, ProfitPercent, Duration, ListingHoldInventoryLevel) {

	/**
	  Documentation
	   
                Defines the options available for an automated second chance offer rule.
            
	 */

	/**
	 * Arrays
	 */
	var _SecondChanceOfferCondition;
	var _Amount;
	var _Duration;
	Object.defineProperty(this, 'SecondChanceOfferCondition', {
		 get: function(){
			 return _SecondChanceOfferCondition;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerAutoSecondChanceOfferTypeCodeType){ 
					_SecondChanceOfferCondition = value; 
				}else{
					console.log('SecondChanceOfferCondition expects type SellingManagerAutoSecondChanceOfferTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Amount', {
		 get: function(){
			 return _Amount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_Amount = value; 
				}else{
					console.log('Amount expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Duration', {
		 get: function(){
			 return _Duration;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SecondChanceOfferDurationCodeType){ 
					_Duration = value; 
				}else{
					console.log('Duration expects type SecondChanceOfferDurationCodeType');
				}
			}
		}
	});
	this.SecondChanceOfferCondition = SecondChanceOfferCondition;
	this.Amount = Amount;
	this.ProfitPercent = ProfitPercent;
	this.Duration = Duration;
	this.ListingHoldInventoryLevel = ListingHoldInventoryLevel;
}
SellingManagerAutoSecondChanceOfferType.prototype.toJSON = function(with_null) {
	var json = { 
		SecondChanceOfferCondition: (this.SecondChanceOfferCondition === undefined)? null : this.SecondChanceOfferCondition.toJSON(),
		Amount: (this.Amount === undefined)? null : this.Amount.toJSON(),
		ProfitPercent: (this.ProfitPercent === undefined)? null : this.ProfitPercent,
		Duration: (this.Duration === undefined)? null : this.Duration.toJSON(),
		ListingHoldInventoryLevel: (this.ListingHoldInventoryLevel === undefined)? null : this.ListingHoldInventoryLevel
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
module.exports = SellingManagerAutoSecondChanceOfferType;