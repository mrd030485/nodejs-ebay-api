var AddressType = require('./AddressType');

function SellerPaymentPreferencesType(AlwaysUseThisPaymentAddress, DisplayPayNowButton, PayPalPreferred, DefaultPayPalEmailAddress, PayPalAlwaysOn, SellerPaymentAddress, UPSRateOption, FedExRateOption, USPSRateOption) {

	/**
	  Documentation
	   Type defining the <b>SellerPaymentPreferences</b> container, which consists of the seller's payment preferences. Payment preferences specified in a <b>SetUserPreferences</b> call override the settings in My eBay
                    payment preferences.
                
	 */

	/**
	 * Arrays
	 */
	var _SellerPaymentAddress;
	Object.defineProperty(this, 'SellerPaymentAddress', {
		 get: function(){
			 return _SellerPaymentAddress;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AddressType){ 
					_SellerPaymentAddress = value; 
				}else{
					console.log('SellerPaymentAddress expects type AddressType');
				}
			}
		}
	});
	this.AlwaysUseThisPaymentAddress = AlwaysUseThisPaymentAddress;
	this.DisplayPayNowButton = DisplayPayNowButton;
	this.PayPalPreferred = PayPalPreferred;
	this.DefaultPayPalEmailAddress = DefaultPayPalEmailAddress;
	this.PayPalAlwaysOn = PayPalAlwaysOn;
	this.SellerPaymentAddress = SellerPaymentAddress;
	this.UPSRateOption = UPSRateOption;
	this.FedExRateOption = FedExRateOption;
	this.USPSRateOption = USPSRateOption;
}
SellerPaymentPreferencesType.prototype.toJSON = function(with_null) {
	var json = { 
		AlwaysUseThisPaymentAddress: (this.AlwaysUseThisPaymentAddress === undefined)? null : this.AlwaysUseThisPaymentAddress,
		DisplayPayNowButton: (this.DisplayPayNowButton === undefined)? null : this.DisplayPayNowButton,
		PayPalPreferred: (this.PayPalPreferred === undefined)? null : this.PayPalPreferred,
		DefaultPayPalEmailAddress: (this.DefaultPayPalEmailAddress === undefined)? null : this.DefaultPayPalEmailAddress,
		PayPalAlwaysOn: (this.PayPalAlwaysOn === undefined)? null : this.PayPalAlwaysOn,
		SellerPaymentAddress: (this.SellerPaymentAddress === undefined)? null : this.SellerPaymentAddress.toJSON(),
		UPSRateOption: (this.UPSRateOption === undefined)? null : this.UPSRateOption,
		FedExRateOption: (this.FedExRateOption === undefined)? null : this.FedExRateOption,
		USPSRateOption: (this.USPSRateOption === undefined)? null : this.USPSRateOption
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
module.exports = SellerPaymentPreferencesType;