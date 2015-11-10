var AmountType = require('./AmountType'),
	DepositTypeCodeType = require('./DepositTypeCodeType');

function PaymentDetailsType(HoursToDeposit, DaysToFullPayment, DepositAmount, DepositType) {

	/**
	  Documentation
	   
                Type defining the <b>PaymentDetails</b> container, which is used by the seller to specify amounts and due dates for deposits and full payment on motor vehicle listings.
            
	 */

	/**
	 * Arrays
	 */
	var _DepositAmount;
	var _DepositType;
	Object.defineProperty(this, 'DepositAmount', {
		 get: function(){
			 return _DepositAmount;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_DepositAmount = value; 
				}else{
					console.log('DepositAmount expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DepositType', {
		 get: function(){
			 return _DepositType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DepositTypeCodeType){ 
					_DepositType = value; 
				}else{
					console.log('DepositType expects type DepositTypeCodeType');
				}
			}
		}
	});
	this.HoursToDeposit = HoursToDeposit;
	this.DaysToFullPayment = DaysToFullPayment;
	this.DepositAmount = DepositAmount;
	this.DepositType = DepositType;
}
PaymentDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		HoursToDeposit: (this.HoursToDeposit === undefined)? null : this.HoursToDeposit,
		DaysToFullPayment: (this.DaysToFullPayment === undefined)? null : this.DaysToFullPayment,
		DepositAmount: (this.DepositAmount === undefined)? null : this.DepositAmount.toJSON(),
		DepositType: (this.DepositType === undefined)? null : this.DepositType.toJSON()
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
module.exports = PaymentDetailsType;