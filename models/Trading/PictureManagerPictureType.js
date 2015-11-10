function PictureManagerPictureType(PictureURL, Name, Date, DisplayFormat) {

	/**
	  Documentation
	   
                This type is deprecated as Pictures Manager was retired.
                
            
	 */

	/**
	 * Arrays
	 *	DisplayFormat: PictureManagerPictureDisplayType
	 */
	this.PictureURL = PictureURL;
	this.Name = Name;
	this.Date = Date;
	this.DisplayFormat = DisplayFormat;
}
PictureManagerPictureType.prototype.toJSON = function(with_null) {
	var json = { 
		PictureURL: (this.PictureURL === undefined)? null : this.PictureURL,
		Name: (this.Name === undefined)? null : this.Name,
		Date: (this.Date === undefined)? null : this.Date,
		DisplayFormat: (this.DisplayFormat === undefined)? null : this.DisplayFormat
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
module.exports = PictureManagerPictureType;