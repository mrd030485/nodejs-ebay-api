var UserIdPasswordType = require('./UserIdPasswordType');

function CustomSecurityHeaderType(eBayAuthToken, HardExpirationWarning, Credentials, NotificationSignature) {

	/**
	  Documentation
	   
                Security header used for SOAP API calls.
            
	 */

	/**
	 * Arrays
	 */
	var _Credentials;
	Object.defineProperty(this, 'Credentials', {
		 get: function(){
			 return _Credentials;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIdPasswordType){ 
					_Credentials = value; 
				}else{
					console.log('Credentials expects type UserIdPasswordType');
				}
			}
		}
	});
	this.eBayAuthToken = eBayAuthToken;
	this.HardExpirationWarning = HardExpirationWarning;
	this.Credentials = Credentials;
	this.NotificationSignature = NotificationSignature;
}
CustomSecurityHeaderType.prototype.toJSON = function(with_null) {
	var json = { 
		eBayAuthToken: (this.eBayAuthToken === undefined)? null : this.eBayAuthToken,
		HardExpirationWarning: (this.HardExpirationWarning === undefined)? null : this.HardExpirationWarning,
		Credentials: (this.Credentials === undefined)? null : this.Credentials.toJSON(),
		NotificationSignature: (this.NotificationSignature === undefined)? null : this.NotificationSignature
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
module.exports = CustomSecurityHeaderType;