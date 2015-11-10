function PictureURLsType(eBayPictureURL, ExternalPictureURL) {

	/**
	  Documentation
	   
                This container returns the URLs of the seller's self-hosted (hosted outside of eBay) pictures and the URL for the corresponding eBay Picture Services (EPS), that was generated when the picture was uploaded.
            
	 */

	/**
	 * Arrays
	 */
	this.eBayPictureURL = eBayPictureURL;
	this.ExternalPictureURL = ExternalPictureURL;
}
PictureURLsType.prototype.toJSON = function(with_null) {
	var json = { 
		eBayPictureURL: (this.eBayPictureURL === undefined)? null : this.eBayPictureURL,
		ExternalPictureURL: (this.ExternalPictureURL === undefined)? null : this.ExternalPictureURL
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
module.exports = PictureURLsType;