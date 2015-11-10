function PictureSetMemberType(MemberURL, PictureHeight, PictureWidth) {

	/**
	  Documentation
	   URL and size information for each generated and stored size. This data is provided for use in application previews of pictures. This data is used for display control for specific pictures in the generated imageset. This container is supplied
                    for all generated pictures.
	 */

	/**
	 * Arrays
	 */
	this.MemberURL = MemberURL;
	this.PictureHeight = PictureHeight;
	this.PictureWidth = PictureWidth;
}
PictureSetMemberType.prototype.toJSON = function(with_null) {
	var json = { 
		MemberURL: (this.MemberURL === undefined)? null : this.MemberURL,
		PictureHeight: (this.PictureHeight === undefined)? null : this.PictureHeight,
		PictureWidth: (this.PictureWidth === undefined)? null : this.PictureWidth
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
module.exports = PictureSetMemberType;