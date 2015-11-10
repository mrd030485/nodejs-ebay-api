function ListingEnhancementDurationReferenceType(Duration) {

	/**
	  Documentation
	   
                A container node for a set of durations that apply to a certain listing enhancements.
            
	 */

	/**
	 * Arrays
	 */
	this.Duration = Duration;
}
ListingEnhancementDurationReferenceType.prototype.toJSON = function(with_null) {
	var json = { 
		Duration: (this.Duration === undefined)? null : this.Duration
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
module.exports = ListingEnhancementDurationReferenceType;