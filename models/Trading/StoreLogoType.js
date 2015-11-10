function StoreLogoType(LogoID, Name, URL) {

	/**
	  Documentation
	   
                Store logo.
            
	 */

	/**
	 * Arrays
	 */
	this.LogoID = LogoID;
	this.Name = Name;
	this.URL = URL;
}
StoreLogoType.prototype.toJSON = function(with_null) {
	var json = { 
		LogoID: (this.LogoID === undefined)? null : this.LogoID,
		Name: (this.Name === undefined)? null : this.Name,
		URL: (this.URL === undefined)? null : this.URL
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
module.exports = StoreLogoType;