function NonProfitSocialAddressType(SocialAddressType, SocialAddressId) {

	/**
	  Documentation
	   Type defining the <b>NonProfitSocialAddress</b> container, which identifies the nonprofit organization's social networking site account ID. A <b>NonProfitSocialAddress</b> container will exist for each social networking
                    site that the charity organization is associated with.
	 */

	/**
	 * Arrays
	 */
	this.SocialAddressType = SocialAddressType;
	this.SocialAddressId = SocialAddressId;
}
NonProfitSocialAddressType.prototype.toJSON = function(with_null) {
	var json = { 
		SocialAddressType: (this.SocialAddressType === undefined)? null : this.SocialAddressType,
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