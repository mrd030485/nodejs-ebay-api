var AmountType = require('./AmountType');

function eBayPaymentMismatchDetailsType(MismatchType, ActionRequiredBy, MismatchAmount) {

	/**
	  Documentation
	   This type is no longer used.
	 */

	/**
	 * Arrays
	 */
	var _MismatchAmount;
	Object.defineProperty(this, 'MismatchAmount', {
		 get: function(){
			 return _MismatchAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_MismatchAmount = value; 
				}else{
					console.log('MismatchAmount expects type AmountType');
				}
			}
		}
	});
	this.MismatchType = MismatchType;
	this.ActionRequiredBy = ActionRequiredBy;
	this.MismatchAmount = MismatchAmount;
}
eBayPaymentMismatchDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		MismatchType: (this.MismatchType === undefined)? null : this.MismatchType,
		ActionRequiredBy: (this.ActionRequiredBy === undefined)? null : this.ActionRequiredBy,
		MismatchAmount: (this.MismatchAmount === undefined)? null : this.MismatchAmount.toJSON()
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
module.exports = eBayPaymentMismatchDetailsType;