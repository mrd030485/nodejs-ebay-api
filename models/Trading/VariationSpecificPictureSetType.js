var ExtendedPictureDetailsType = require('./ExtendedPictureDetailsType');

function VariationSpecificPictureSetType(VariationSpecificValue, PictureURL, GalleryURL, ExternalPictureURL, ExtendedPictureDetails) {

	/**
	  Documentation
	   
                Type defining the <b>VariationSpecificPictureSet</b> container, which is used to specify the URL(s) where the picture(s) of the variation specific will be hosted. If the <b>Variations.Pictures</b> container is used, at least one
                <b>VariationSpecificPictureSet</b> container is required.
            
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
	this.VariationSpecificValue = VariationSpecificValue;
	this.PictureURL = PictureURL;
	this.GalleryURL = GalleryURL;
	this.ExternalPictureURL = ExternalPictureURL;
	this.ExtendedPictureDetails = ExtendedPictureDetails;
}
VariationSpecificPictureSetType.prototype.toJSON = function(with_null) {
	var json = { 
		VariationSpecificValue: (this.VariationSpecificValue === undefined)? null : this.VariationSpecificValue,
		PictureURL: (this.PictureURL === undefined)? null : this.PictureURL,
		GalleryURL: (this.GalleryURL === undefined)? null : this.GalleryURL,
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
module.exports = VariationSpecificPictureSetType;