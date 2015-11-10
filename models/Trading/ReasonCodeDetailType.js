function ReasonCodeDetailType(BriefText, DetailedText) {

	/**
	  Documentation
	   A container for VeRO reason code details.
	 */

	/**
	 * Arrays
	 */
	this.BriefText = BriefText;
	this.DetailedText = DetailedText;
}
ReasonCodeDetailType.prototype.toJSON = function(with_null) {
	var json = { 
		BriefText: (this.BriefText === undefined)? null : this.BriefText,
		DetailedText: (this.DetailedText === undefined)? null : this.DetailedText
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
module.exports = ReasonCodeDetailType;