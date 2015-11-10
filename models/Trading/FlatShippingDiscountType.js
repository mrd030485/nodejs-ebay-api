var DiscountNameCodeType = require('./DiscountNameCodeType');

function FlatShippingDiscountType(DiscountName, DiscountProfile) {

	/**
	  Documentation
	   
                Details of an individual discount profile defined by the user for flat rate shipping.
            
	 */

	/**
	 * Arrays
	 *	DiscountProfile: DiscountProfileType
	 */
	var _DiscountName;
	Object.defineProperty(this, 'DiscountName', {
		 get: function(){
			 return _DiscountName;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DiscountNameCodeType){ 
					_DiscountName = value; 
				}else{
					console.log('DiscountName expects type DiscountNameCodeType');
				}
			}
		}
	});
	this.DiscountName = DiscountName;
	this.DiscountProfile = DiscountProfile;
}
FlatShippingDiscountType.prototype.toJSON = function(with_null) {
	var json = { 
		DiscountName: (this.DiscountName === undefined)? null : this.DiscountName.toJSON(),
		DiscountProfile: (this.DiscountProfile === undefined)? null : this.DiscountProfile
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
module.exports = FlatShippingDiscountType;