var AmountType = require('./AmountType'),
	MeasureType = require('./MeasureType');

function DiscountProfileType(DiscountProfileID, DiscountProfileName, EachAdditionalAmount, EachAdditionalAmountOff, EachAdditionalPercentOff, WeightOff, MappedDiscountProfileID) {

	/**
	  Documentation
	   
                Details of a flat or calculated shipping discount profile.
            
	 */

	/**
	 * Arrays
	 */
	var _EachAdditionalAmount;
	var _EachAdditionalAmountOff;
	var _WeightOff;
	Object.defineProperty(this, 'EachAdditionalAmount', {
		 get: function(){
			 return _EachAdditionalAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_EachAdditionalAmount = value; 
				}else{
					console.log('EachAdditionalAmount expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'EachAdditionalAmountOff', {
		 get: function(){
			 return _EachAdditionalAmountOff;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_EachAdditionalAmountOff = value; 
				}else{
					console.log('EachAdditionalAmountOff expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'WeightOff', {
		 get: function(){
			 return _WeightOff;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MeasureType){ 
					_WeightOff = value; 
				}else{
					console.log('WeightOff expects type MeasureType');
				}
			}
		}
	});
	this.DiscountProfileID = DiscountProfileID;
	this.DiscountProfileName = DiscountProfileName;
	this.EachAdditionalAmount = EachAdditionalAmount;
	this.EachAdditionalAmountOff = EachAdditionalAmountOff;
	this.EachAdditionalPercentOff = EachAdditionalPercentOff;
	this.WeightOff = WeightOff;
	this.MappedDiscountProfileID = MappedDiscountProfileID;
}
DiscountProfileType.prototype.toJSON = function(with_null) {
	var json = { 
		DiscountProfileID: (this.DiscountProfileID === undefined)? null : this.DiscountProfileID,
		DiscountProfileName: (this.DiscountProfileName === undefined)? null : this.DiscountProfileName,
		EachAdditionalAmount: (this.EachAdditionalAmount === undefined)? null : this.EachAdditionalAmount.toJSON(),
		EachAdditionalAmountOff: (this.EachAdditionalAmountOff === undefined)? null : this.EachAdditionalAmountOff.toJSON(),
		EachAdditionalPercentOff: (this.EachAdditionalPercentOff === undefined)? null : this.EachAdditionalPercentOff,
		WeightOff: (this.WeightOff === undefined)? null : this.WeightOff.toJSON(),
		MappedDiscountProfileID: (this.MappedDiscountProfileID === undefined)? null : this.MappedDiscountProfileID
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
module.exports = DiscountProfileType;