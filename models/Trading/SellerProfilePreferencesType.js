var SupportedSellerProfilesType = require('./SupportedSellerProfilesType');

function SellerProfilePreferencesType(SellerProfileOptedIn, SupportedSellerProfiles) {

	/**
	  Documentation
	   Type defining the <b>SellerProfilePreferences</b> container. This container consists of a flag that indicates whether or not the seller has opted into Business Policies, as well as a list of Business Policies profiles that
                    have been set up for the seller's account.
	 */

	/**
	 * Arrays
	 */
	var _SupportedSellerProfiles;
	Object.defineProperty(this, 'SupportedSellerProfiles', {
		 get: function(){
			 return _SupportedSellerProfiles;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SupportedSellerProfilesType){ 
					_SupportedSellerProfiles = value; 
				}else{
					console.log('SupportedSellerProfiles expects type SupportedSellerProfilesType');
				}
			}
		}
	});
	this.SellerProfileOptedIn = SellerProfileOptedIn;
	this.SupportedSellerProfiles = SupportedSellerProfiles;
}
SellerProfilePreferencesType.prototype.toJSON = function(with_null) {
	var json = { 
		SellerProfileOptedIn: (this.SellerProfileOptedIn === undefined)? null : this.SellerProfileOptedIn,
		SupportedSellerProfiles: (this.SupportedSellerProfiles === undefined)? null : this.SupportedSellerProfiles.toJSON()
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
module.exports = SellerProfilePreferencesType;