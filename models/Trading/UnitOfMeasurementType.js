function UnitOfMeasurementType(AlternateText, SuggestedText) {

	/**
	  Documentation
	   
                Units of measurement are no longer returned in GeteBayDetails, so this type is no longer applicable.
            
	 */

	/**
	 * Arrays
	 */
	this.AlternateText = AlternateText;
	this.SuggestedText = SuggestedText;
}
UnitOfMeasurementType.prototype.toJSON = function(with_null) {
	var json = { 
		AlternateText: (this.AlternateText === undefined)? null : this.AlternateText,
		SuggestedText: (this.SuggestedText === undefined)? null : this.SuggestedText
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
module.exports = UnitOfMeasurementType;