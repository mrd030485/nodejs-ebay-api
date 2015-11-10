function ExtendedPictureDetailsType(PictureURLs) {

	/**
	  Documentation
	   This container returns the URLs of the seller's self-hosted (hosted outside of eBay) pictures and the URL for the corresponding eBay Picture Services (EPS), that was generated when the self-hosted picture was uploaded.
	 */

	/**
	 * Arrays
	 *	PictureURLs: PictureURLsType
	 */
	this.PictureURLs = PictureURLs;
}
ExtendedPictureDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		PictureURLs: (this.PictureURLs === undefined)? null : this.PictureURLs
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
module.exports = ExtendedPictureDetailsType;