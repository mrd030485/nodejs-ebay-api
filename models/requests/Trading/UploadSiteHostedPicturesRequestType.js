var Base64BinaryType = require('../../Trading/Base64BinaryType');

function UploadSiteHostedPicturesRequestType(PictureName, PictureSystemVersion, PictureSet, PictureData, PictureUploadPolicy, ExternalPictureURL, PictureWatermark, ExtensionInDays) {

	/**
	  Documentation
	   Uploads a picture to the eBay Picture Service and returns a URL of the picture. You will use this URL when creating the listing using one of the <b>AddItem</b> calls.
	 */

	/**
	 * Arrays
	 */
	var _PictureData;
	Object.defineProperty(this, 'PictureData', {
		 get: function(){
			 return _PictureData;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof Base64BinaryType){ 
					_PictureData = value; 
				}else{
					console.log('PictureData expects type Base64BinaryType');
				}
			}
		}
	});
	this.PictureName = PictureName;
	this.PictureSystemVersion = PictureSystemVersion;
	this.PictureSet = PictureSet;
	this.PictureData = PictureData;
	this.PictureUploadPolicy = PictureUploadPolicy;
	this.ExternalPictureURL = ExternalPictureURL;
	this.PictureWatermark = PictureWatermark;
	this.ExtensionInDays = ExtensionInDays;
}
UploadSiteHostedPicturesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		PictureName: (this.PictureName === undefined)? null : this.PictureName,
		PictureSystemVersion: (this.PictureSystemVersion === undefined)? null : this.PictureSystemVersion,
		PictureSet: (this.PictureSet === undefined)? null : this.PictureSet,
		PictureData: (this.PictureData === undefined)? null : this.PictureData.toJSON(),
		PictureUploadPolicy: (this.PictureUploadPolicy === undefined)? null : this.PictureUploadPolicy,
		ExternalPictureURL: (this.ExternalPictureURL === undefined)? null : this.ExternalPictureURL,
		PictureWatermark: (this.PictureWatermark === undefined)? null : this.PictureWatermark,
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
module.exports = UploadSiteHostedPicturesRequestType;