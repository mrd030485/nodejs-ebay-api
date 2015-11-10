function StoreFontType(NameFace, NameSize, NameColor, TitleFace, TitleSize, TitleColor, DescFace, DescSize, DescColor) {

	/**
	  Documentation
	   Store font set.
	 */

	/**
	 * Arrays
	 */
	this.NameFace = NameFace;
	this.NameSize = NameSize;
	this.NameColor = NameColor;
	this.TitleFace = TitleFace;
	this.TitleSize = TitleSize;
	this.TitleColor = TitleColor;
	this.DescFace = DescFace;
	this.DescSize = DescSize;
	this.DescColor = DescColor;
}
StoreFontType.prototype.toJSON = function(with_null) {
	var json = { 
		NameFace: (this.NameFace === undefined)? null : this.NameFace,
		NameSize: (this.NameSize === undefined)? null : this.NameSize,
		NameColor: (this.NameColor === undefined)? null : this.NameColor,
		TitleFace: (this.TitleFace === undefined)? null : this.TitleFace,
		TitleSize: (this.TitleSize === undefined)? null : this.TitleSize,
		TitleColor: (this.TitleColor === undefined)? null : this.TitleColor,
		DescFace: (this.DescFace === undefined)? null : this.DescFace,
		DescSize: (this.DescSize === undefined)? null : this.DescSize,
		DescColor: (this.DescColor === undefined)? null : this.DescColor
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
module.exports = StoreFontType;