function ListingDesignerType(LayoutID, OptimalPictureSize, ThemeID) {

	/**
	  Documentation
	   Contains the IDs for the Listing Designer theme and template (if either are used) associated with an item, which can optionally be used to enhance the appearance of the item's description. Cannot be used with Photo Display.
	 */

	/**
	 * Arrays
	 */
	this.LayoutID = LayoutID;
	this.OptimalPictureSize = OptimalPictureSize;
	this.ThemeID = ThemeID;
}
ListingDesignerType.prototype.toJSON = function(with_null) {
	var json = { 
		LayoutID: (this.LayoutID === undefined)? null : this.LayoutID,
		OptimalPictureSize: (this.OptimalPictureSize === undefined)? null : this.OptimalPictureSize,
		ThemeID: (this.ThemeID === undefined)? null : this.ThemeID
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
module.exports = ListingDesignerType;