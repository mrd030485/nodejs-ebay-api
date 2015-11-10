var AmountType = require('./AmountType');

function PaymentDetailsType(HoursToDeposit, DaysToFullPayment, DepositAmount, DepositType) {

	/**
	  Documentation
	   Type defining the <b>PaymentDetails</b> container, which is used by the seller to specify amounts and due dates for deposits and full payment on motor vehicle listings.
	 */

	/**
	 * Arrays
	 */
	var _DepositAmount;
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
		DepositType: (this.DepositType === undefined)? null : this.DepositType
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