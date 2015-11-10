var MismatchTypeCodeType = require('./MismatchTypeCodeType'),
	AmountType = require('./AmountType');

function eBayPaymentMismatchDetailsType(MismatchType, ActionRequiredBy, MismatchAmount) {

	/**
	  Documentation
	   
                This type is no longer used.
            
	 */

	/**
	 * Arrays
	 */
	var _MismatchType;
	var _MismatchAmount;
	Object.defineProperty(this, 'MismatchType', {
		 get: function(){
			 return _MismatchType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MismatchTypeCodeType){ 
					_MismatchType = value; 
				}else{
					console.log('MismatchType expects type MismatchTypeCodeType');
				}
			}
		}
	});
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
		MismatchType: (this.MismatchType === undefined)? null : this.MismatchType.toJSON(),
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