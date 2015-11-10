function SiteHostedPictureDetailsType(PictureName, PictureSet, PictureFormat, FullURL, BaseURL, PictureSetMember, ExternalPictureURL, UseByDate) {

	/**
	  Documentation
	   Type defining the <b>SiteHostedPictureDetails</b> container that is returned in an <b>UploadSiteHostedPictures</b> call.
	 */

	/**
	 * Arrays
	 *	PictureSetMember: PictureSetMemberType
	 */
	this.PictureName = PictureName;
	this.PictureSet = PictureSet;
	this.PictureFormat = PictureFormat;
	this.FullURL = FullURL;
	this.BaseURL = BaseURL;
	this.PictureSetMember = PictureSetMember;
	this.ExternalPictureURL = ExternalPictureURL;
	this.UseByDate = UseByDate;
}
SiteHostedPictureDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		PictureName: (this.PictureName === undefined)? null : this.PictureName,
		PictureSet: (this.PictureSet === undefined)? null : this.PictureSet,
		PictureFormat: (this.PictureFormat === undefined)? null : this.PictureFormat,
		FullURL: (this.FullURL === undefined)? null : this.FullURL,
		BaseURL: (this.BaseURL === undefined)? null : this.BaseURL,
		PictureSetMember: (this.PictureSetMember === undefined)? null : this.PictureSetMember,
		ExternalPictureURL: (this.ExternalPictureURL === undefined)? null : this.ExternalPictureURL,
		UseByDate: (this.UseByDate === undefined)? null : this.UseByDate
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
module.exports = SiteHostedPictureDetailsType;