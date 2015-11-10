function ExtendSiteHostedPicturesRequestType(PictureURL, ExtensionInDays) {

	/**
	  Documentation
	   Gives approved sellers the ability to extend the default and ongoing lifetime of pictures uploaded to eBay.
	 */

	/**
	 * Arrays
	 */
	this.PictureURL = PictureURL;
	this.ExtensionInDays = ExtensionInDays;
}
ExtendSiteHostedPicturesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		PictureURL: (this.PictureURL === undefined)? null : this.PictureURL,
		ExtensionInDays: (this.ExtensionInDays === undefined)? null : this.ExtensionInDays
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
module.exports = ExtendSiteHostedPicturesRequestType;