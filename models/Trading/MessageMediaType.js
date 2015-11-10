function MessageMediaType(MediaURL, MediaName) {

	/**
	  Documentation
	   Container for the image file that is to be sent in a message, which lets sellers share photos in messages using the API. The photo must be uploaded by the seller or buyer to <a href="http://developer.ebay.com/devzone/xml/docs/reference/ebay/uploadsitehostedpictures.html">EPS
                    (eBay Picture Services)</a> using a separate API call or the web flow. After the image is on the eBay server, you can use <b>AddMemberMessage</b> calls to pass the URL of the image in a message. The uploaded images
                    will be available as part of the email as a thumbnail image. Clicking on the thumbnail, opens a larger version of the image in a filmstrip. The image name will be displayed on the title of the filmstrip component. These uploaded images
                    will also be returned as <b>MessageMediaType</b> arrays in the <b>GetMemberMessages</b> and <b>GetMyMessages</b> API response. It doesn't matter if an image was uploaded using the web flow or using
                    the API, it can be accessed using either the web flow or the API and web.
	 */

	/**
	 * Arrays
	 */
	this.MediaURL = MediaURL;
	this.MediaName = MediaName;
}
MessageMediaType.prototype.toJSON = function(with_null) {
	var json = { 
		MediaURL: (this.MediaURL === undefined)? null : this.MediaURL,
		MediaName: (this.MediaName === undefined)? null : this.MediaName
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
module.exports = MessageMediaType;