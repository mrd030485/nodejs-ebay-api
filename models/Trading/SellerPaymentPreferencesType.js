var DisplayPayNowButtonCodeType = require('./DisplayPayNowButtonCodeType'),
	AddressType = require('./AddressType'),
	UPSRateOptionCodeType = require('./UPSRateOptionCodeType'),
	FedExRateOptionCodeType = require('./FedExRateOptionCodeType'),
	USPSRateOptionCodeType = require('./USPSRateOptionCodeType');

function SellerPaymentPreferencesType(AlwaysUseThisPaymentAddress, DisplayPayNowButton, PayPalPreferred, DefaultPayPalEmailAddress, PayPalAlwaysOn, SellerPaymentAddress, UPSRateOption, FedExRateOption, USPSRateOption) {

	/**
	  Documentation
	   
                Type defining the <b>SellerPaymentPreferences</b> container, which consists of the seller's payment preferences. Payment preferences specified in a <b>SetUserPreferences</b> call override the settings in My eBay payment preferences.
            
	 */

	/**
	 * Arrays
	 */
	var _DisplayPayNowButton;
	var _SellerPaymentAddress;
	var _UPSRateOption;
	var _FedExRateOption;
	var _USPSRateOption;
	Object.defineProperty(this, 'DisplayPayNowButton', {
		 get: function(){
			 return _DisplayPayNowButton;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DisplayPayNowButtonCodeType){ 
					_DisplayPayNowButton = value; 
				}else{
					console.log('DisplayPayNowButton expects type DisplayPayNowButtonCodeType');
				}
			}
		}
	});
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
	Object.defineProperty(this, 'UPSRateOption', {
		 get: function(){
			 return _UPSRateOption;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UPSRateOptionCodeType){ 
					_UPSRateOption = value; 
				}else{
					console.log('UPSRateOption expects type UPSRateOptionCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'FedExRateOption', {
		 get: function(){
			 return _FedExRateOption;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FedExRateOptionCodeType){ 
					_FedExRateOption = value; 
				}else{
					console.log('FedExRateOption expects type FedExRateOptionCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'USPSRateOption', {
		 get: function(){
			 return _USPSRateOption;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof USPSRateOptionCodeType){ 
					_USPSRateOption = value; 
				}else{
					console.log('USPSRateOption expects type USPSRateOptionCodeType');
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
		DisplayPayNowButton: (this.DisplayPayNowButton === undefined)? null : this.DisplayPayNowButton.toJSON(),
		PayPalPreferred: (this.PayPalPreferred === undefined)? null : this.PayPalPreferred,
		DefaultPayPalEmailAddress: (this.DefaultPayPalEmailAddress === undefined)? null : this.DefaultPayPalEmailAddress,
		PayPalAlwaysOn: (this.PayPalAlwaysOn === undefined)? null : this.PayPalAlwaysOn,
		SellerPaymentAddress: (this.SellerPaymentAddress === undefined)? null : this.SellerPaymentAddress.toJSON(),
		UPSRateOption: (this.UPSRateOption === undefined)? null : this.UPSRateOption.toJSON(),
		FedExRateOption: (this.FedExRateOption === undefined)? null : this.FedExRateOption.toJSON(),
		USPSRateOption: (this.USPSRateOption === undefined)? null : this.USPSRateOption.toJSON()
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