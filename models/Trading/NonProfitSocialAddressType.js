var SocialAddressTypeCodeType = require('./SocialAddressTypeCodeType');

function NonProfitSocialAddressType(SocialAddressType, SocialAddressId) {

	/**
	  Documentation
	   
                Type defining the <b>NonProfitSocialAddress</b> container, which identifies the nonprofit organization's social networking site account ID. A <b>NonProfitSocialAddress</b> container will exist for each social networking site that
                the charity organization is associated with.
            
	 */

	/**
	 * Arrays
	 */
	var _SocialAddressType;
	Object.defineProperty(this, 'SocialAddressType', {
		 get: function(){
			 return _SocialAddressType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SocialAddressTypeCodeType){ 
					_SocialAddressType = value; 
				}else{
					console.log('SocialAddressType expects type SocialAddressTypeCodeType');
				}
			}
		}
	});
	this.SocialAddressType = SocialAddressType;
	this.SocialAddressId = SocialAddressId;
}
NonProfitSocialAddressType.prototype.toJSON = function(with_null) {
	var json = { 
		SocialAddressType: (this.SocialAddressType === undefined)? null : this.SocialAddressType.toJSON(),
		SocialAddressId: (this.SocialAddressId === undefined)? null : this.SocialAddressId
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
module.exports = NonProfitSocialAddressType;