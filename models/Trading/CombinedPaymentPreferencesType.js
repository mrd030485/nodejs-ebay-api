var CalculatedShippingPreferencesType = require('./CalculatedShippingPreferencesType'),
	CombinedPaymentOptionCodeType = require('./CombinedPaymentOptionCodeType'),
	CombinedPaymentPeriodCodeType = require('./CombinedPaymentPeriodCodeType'),
	FlatShippingPreferencesType = require('./FlatShippingPreferencesType');

function CombinedPaymentPreferencesType(CalculatedShippingPreferences, CombinedPaymentOption, CombinedPaymentPeriod, FlatShippingPreferences) {

	/**
	  Documentation
	   
                Type used to define all combined payment preferences, including preferences and rules for Calculated and Flat Rate shipping, a flag to allow or disallow <a href="http://developer.ebay.com/DevZone/guides/ebayfeatures/Development/Listing-AnItem.html#CombinedInvoice">Combined
                Invoice</a> orders, and the time period in which to allow buyers to combine multiple purchases from the seller into a Combined Invoice order.
            
	 */

	/**
	 * Arrays
	 */
	var _CalculatedShippingPreferences;
	var _CombinedPaymentOption;
	var _CombinedPaymentPeriod;
	var _FlatShippingPreferences;
	Object.defineProperty(this, 'CalculatedShippingPreferences', {
		 get: function(){
			 return _CalculatedShippingPreferences;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CalculatedShippingPreferencesType){ 
					_CalculatedShippingPreferences = value; 
				}else{
					console.log('CalculatedShippingPreferences expects type CalculatedShippingPreferencesType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CombinedPaymentOption', {
		 get: function(){
			 return _CombinedPaymentOption;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CombinedPaymentOptionCodeType){ 
					_CombinedPaymentOption = value; 
				}else{
					console.log('CombinedPaymentOption expects type CombinedPaymentOptionCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'CombinedPaymentPeriod', {
		 get: function(){
			 return _CombinedPaymentPeriod;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CombinedPaymentPeriodCodeType){ 
					_CombinedPaymentPeriod = value; 
				}else{
					console.log('CombinedPaymentPeriod expects type CombinedPaymentPeriodCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'FlatShippingPreferences', {
		 get: function(){
			 return _FlatShippingPreferences;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FlatShippingPreferencesType){ 
					_FlatShippingPreferences = value; 
				}else{
					console.log('FlatShippingPreferences expects type FlatShippingPreferencesType');
				}
			}
		}
	});
	this.CalculatedShippingPreferences = CalculatedShippingPreferences;
	this.CombinedPaymentOption = CombinedPaymentOption;
	this.CombinedPaymentPeriod = CombinedPaymentPeriod;
	this.FlatShippingPreferences = FlatShippingPreferences;
}
CombinedPaymentPreferencesType.prototype.toJSON = function(with_null) {
	var json = { 
		CalculatedShippingPreferences: (this.CalculatedShippingPreferences === undefined)? null : this.CalculatedShippingPreferences.toJSON(),
		CombinedPaymentOption: (this.CombinedPaymentOption === undefined)? null : this.CombinedPaymentOption.toJSON(),
		CombinedPaymentPeriod: (this.CombinedPaymentPeriod === undefined)? null : this.CombinedPaymentPeriod.toJSON(),
		FlatShippingPreferences: (this.FlatShippingPreferences === undefined)? null : this.FlatShippingPreferences.toJSON()
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
module.exports = CombinedPaymentPreferencesType;