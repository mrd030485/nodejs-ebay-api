var CurrencyCodeType = require('./CurrencyCodeType');

function CurrencyDetailsType(Currency, Description, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   
                Type defining the <b>CurrencyDetails</b> container that is returned in the <b>GeteBayDetails</b> response if 'CurrencyDetails' is used as a <b>DetailName</b> value in the request, or no <b>DetailName</b>
                values are used in the request. A <b>CurrencyDetails</b> container is returned for each currency value that is available to use in the <b>Item.Currency</b> field in an Add/Revise/Relist call.
            
	 */

	/**
	 * Arrays
	 */
	var _Currency;
	Object.defineProperty(this, 'Currency', {
		 get: function(){
			 return _Currency;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CurrencyCodeType){ 
					_Currency = value; 
				}else{
					console.log('Currency expects type CurrencyCodeType');
				}
			}
		}
	});
	this.Currency = Currency;
	this.Description = Description;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
CurrencyDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		Currency: (this.Currency === undefined)? null : this.Currency.toJSON(),
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
module.exports = CurrencyDetailsType;