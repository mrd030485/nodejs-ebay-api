var GalleryTypeCodeType = require('./GalleryTypeCodeType'),
	PhotoDisplayCodeType = require('./PhotoDisplayCodeType'),
	PictureSourceCodeType = require('./PictureSourceCodeType'),
	GalleryStatusCodeType = require('./GalleryStatusCodeType'),
	ExtendedPictureDetailsType = require('./ExtendedPictureDetailsType');

function PictureDetailsType(GalleryType, GalleryURL, PhotoDisplay, PictureURL, PictureSource, GalleryDuration, GalleryStatus, GalleryErrorInfo, ExternalPictureURL, ExtendedPictureDetails) {

	/**
	  Documentation
	   
                Contains the data for the pictures associated with an item. Not applicable to Half.com.
            
	 */

	/**
	 * Arrays
	 */
	var _GalleryType;
	var _PhotoDisplay;
	var _PictureSource;
	var _GalleryStatus;
	var _ExtendedPictureDetails;
	Object.defineProperty(this, 'GalleryType', {
		 get: function(){
			 return _GalleryType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof GalleryTypeCodeType){ 
					_GalleryType = value; 
				}else{
					console.log('GalleryType expects type GalleryTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PhotoDisplay', {
		 get: function(){
			 return _PhotoDisplay;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PhotoDisplayCodeType){ 
					_PhotoDisplay = value; 
				}else{
					console.log('PhotoDisplay expects type PhotoDisplayCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PictureSource', {
		 get: function(){
			 return _PictureSource;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PictureSourceCodeType){ 
					_PictureSource = value; 
				}else{
					console.log('PictureSource expects type PictureSourceCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'GalleryStatus', {
		 get: function(){
			 return _GalleryStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof GalleryStatusCodeType){ 
					_GalleryStatus = value; 
				}else{
					console.log('GalleryStatus expects type GalleryStatusCodeType');
				}
			}
		}
	});
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
		GalleryType: (this.GalleryType === undefined)? null : this.GalleryType.toJSON(),
		GalleryURL: (this.GalleryURL === undefined)? null : this.GalleryURL,
		PhotoDisplay: (this.PhotoDisplay === undefined)? null : this.PhotoDisplay.toJSON(),
		PictureURL: (this.PictureURL === undefined)? null : this.PictureURL,
		PictureSource: (this.PictureSource === undefined)? null : this.PictureSource.toJSON(),
		GalleryDuration: (this.GalleryDuration === undefined)? null : this.GalleryDuration,
		GalleryStatus: (this.GalleryStatus === undefined)? null : this.GalleryStatus.toJSON(),
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