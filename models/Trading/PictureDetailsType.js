var ExtendedPictureDetailsType = require('./ExtendedPictureDetailsType');

function PictureDetailsType(GalleryType, GalleryURL, PhotoDisplay, PictureURL, PictureSource, GalleryDuration, GalleryStatus, GalleryErrorInfo, ExternalPictureURL, ExtendedPictureDetails) {

	/**
	  Documentation
	   Contains the data for the pictures associated with an item. Not applicable to Half.com.
	 */

	/**
	 * Arrays
	 */
	var _ExtendedPictureDetails;
	Object.defineProperty(this, 'ExtendedPictureDetails', {
		 get: function(){
			 return _ExtendedPictureDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ExtendedPictureDetailsType){ 
					_ExtendedPictureDetails = value; 
				}else{
					console.log('ExtendedPictureDetails expects type ExtendedPictureDetailsType');
				}
			}
		}
	});
	this.GalleryType = GalleryType;
	this.GalleryURL = GalleryURL;
	this.PhotoDisplay = PhotoDisplay;
	this.PictureURL = PictureURL;
	this.PictureSource = PictureSource;
	this.GalleryDuration = GalleryDuration;
	this.GalleryStatus = GalleryStatus;
	this.GalleryErrorInfo = GalleryErrorInfo;
	this.ExternalPictureURL = ExternalPictureURL;
	this.ExtendedPictureDetails = ExtendedPictureDetails;
}
PictureDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		GalleryType: (this.GalleryType === undefined)? null : this.GalleryType,
		GalleryURL: (this.GalleryURL === undefined)? null : this.GalleryURL,
		PhotoDisplay: (this.PhotoDisplay === undefined)? null : this.PhotoDisplay,
		PictureURL: (this.PictureURL === undefined)? null : this.PictureURL,
		PictureSource: (this.PictureSource === undefined)? null : this.PictureSource,
		GalleryDuration: (this.GalleryDuration === undefined)? null : this.GalleryDuration,
		GalleryStatus: (this.GalleryStatus === undefined)? null : this.GalleryStatus,
		GalleryErrorInfo: (this.GalleryErrorInfo === undefined)? null : this.GalleryErrorInfo,
		ExternalPictureURL: (this.ExternalPictureURL === undefined)? null : this.ExternalPictureURL,
		ExtendedPictureDetails: (this.ExtendedPictureDetails === undefined)? null : this.ExtendedPictureDetails.toJSON()
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
module.exports = PictureDetailsType;