function UserIdPasswordType(AppId, DevId, AuthCert, Username, Password) {

	/**
	  Documentation
	   
            
	 */

	/**
	 * Arrays
	 */
	this.AppId = AppId;
	this.DevId = DevId;
	this.AuthCert = AuthCert;
	this.Username = Username;
	this.Password = Password;
}
UserIdPasswordType.prototype.toJSON = function(with_null) {
	var json = { 
		AppId: (this.AppId === undefined)? null : this.AppId,
		DevId: (this.DevId === undefined)? null : this.DevId,
		AuthCert: (this.AuthCert === undefined)? null : this.AuthCert,
		Username: (this.Username === undefined)? null : this.Username,
		Password: (this.Password === undefined)? null : this.Password
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
module.exports = UserIdPasswordType;