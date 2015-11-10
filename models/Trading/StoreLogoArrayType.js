function StoreLogoArrayType(Logo) {

	/**
	  Documentation
	   
                Set of Store logos.
            
	 */

	/**
	 * Arrays
	 *	Logo: StoreLogoType
	 */
	this.Logo = Logo;
}
StoreLogoArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		Logo: (this.Logo === undefined)? null : this.Logo
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
module.exports = StoreLogoArrayType;