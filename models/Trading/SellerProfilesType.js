var SellerShippingProfileType = require('./SellerShippingProfileType'),
	SellerReturnProfileType = require('./SellerReturnProfileType'),
	SellerPaymentProfileType = require('./SellerPaymentProfileType');

function SellerProfilesType(SellerShippingProfile, SellerReturnProfile, SellerPaymentProfile) {

	/**
	  Documentation
	   Type defining the <b>SellerProfiles</b> container, which consists of references to a seller's payment, shipping, and/or return policy profiles.
	 */

	/**
	 * Arrays
	 */
	var _SellerShippingProfile;
	var _SellerReturnProfile;
	var _SellerPaymentProfile;
	Object.defineProperty(this, 'SellerShippingProfile', {
		 get: function(){
			 return _SellerShippingProfile;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellerShippingProfileType){ 
					_SellerShippingProfile = value; 
				}else{
					console.log('SellerShippingProfile expects type SellerShippingProfileType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellerReturnProfile', {
		 get: function(){
			 return _SellerReturnProfile;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellerReturnProfileType){ 
					_SellerReturnProfile = value; 
				}else{
					console.log('SellerReturnProfile expects type SellerReturnProfileType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellerPaymentProfile', {
		 get: function(){
			 return _SellerPaymentProfile;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellerPaymentProfileType){ 
					_SellerPaymentProfile = value; 
				}else{
					console.log('SellerPaymentProfile expects type SellerPaymentProfileType');
				}
			}
		}
	});
	this.SellerShippingProfile = SellerShippingProfile;
	this.SellerReturnProfile = SellerReturnProfile;
	this.SellerPaymentProfile = SellerPaymentProfile;
}
SellerProfilesType.prototype.toJSON = function(with_null) {
	var json = { 
		SellerShippingProfile: (this.SellerShippingProfile === undefined)? null : this.SellerShippingProfile.toJSON(),
		SellerReturnProfile: (this.SellerReturnProfile === undefined)? null : this.SellerReturnProfile.toJSON(),
		SellerPaymentProfile: (this.SellerPaymentProfile === undefined)? null : this.SellerPaymentProfile.toJSON()
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
module.exports = SellerProfilesType;