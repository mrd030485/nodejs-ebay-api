function PicturesType(VariationSpecificName, VariationSpecificPictureSet) {

	/**
	  Documentation
	   
                Defines variation-specific pictures associated with one VariationSpecificName (e.g., Color) whose values differ across variations.
            
	 */

	/**
	 * Arrays
	 *	VariationSpecificPictureSet: VariationSpecificPictureSetType
	 */
	this.VariationSpecificName = VariationSpecificName;
	this.VariationSpecificPictureSet = VariationSpecificPictureSet;
}
PicturesType.prototype.toJSON = function(with_null) {
	var json = { 
		VariationSpecificName: (this.VariationSpecificName === undefined)? null : this.VariationSpecificName,
		VariationSpecificPictureSet: (this.VariationSpecificPictureSet === undefined)? null : this.VariationSpecificPictureSet
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
module.exports = PicturesType;