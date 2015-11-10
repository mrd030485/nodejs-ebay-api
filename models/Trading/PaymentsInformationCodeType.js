var PaymentInformationCodeType = require('./PaymentInformationCodeType');

function PaymentsInformationCodeType(Payments) {

	/**
	  Documentation
	   
                Type defining the Contains details payment information
            
	 */

	/**
	 * Arrays
	 */
	var _Payments;
	Object.defineProperty(this, 'Payments', {
		 get: function(){
			 return _Payments;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PaymentInformationCodeType){ 
					_Payments = value; 
				}else{
					console.log('Payments expects type PaymentInformationCodeType');
				}
			}
		}
	});
	this.Payments = Payments;
}
PaymentsInformationCodeType.prototype.toJSON = function(with_null) {
	var json = { 
		Payments: (this.Payments === undefined)? null : this.Payments.toJSON()
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
module.exports = PaymentsInformationCodeType;