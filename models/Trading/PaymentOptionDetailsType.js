var BuyerPaymentMethodCodeType = require('./BuyerPaymentMethodCodeType');

function PaymentOptionDetailsType(PaymentOption, Description, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   
                This type is deprecated; use <b>GetCategoryFeatures</b> with <b>PaymentMethods</b> as a <b>FeatureID</b> value in the request.
                
            
	 */

	/**
	 * Arrays
	 */
	var _PaymentOption;
	Object.defineProperty(this, 'PaymentOption', {
		 get: function(){
			 return _PaymentOption;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BuyerPaymentMethodCodeType){ 
					_PaymentOption = value; 
				}else{
					console.log('PaymentOption expects type BuyerPaymentMethodCodeType');
				}
			}
		}
	});
	this.PaymentOption = PaymentOption;
	this.Description = Description;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
PaymentOptionDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		PaymentOption: (this.PaymentOption === undefined)? null : this.PaymentOption.toJSON(),
		Description: (this.Description === undefined)? null : this.Description,
		DetailVersion: (this.DetailVersion === undefined)? null : this.DetailVersion,
		UpdateTime: (this.UpdateTime === undefined)? null : this.UpdateTime
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
module.exports = PaymentOptionDetailsType;