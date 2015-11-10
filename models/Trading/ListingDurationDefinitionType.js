function ListingDurationDefinitionType(Duration) {

	/**
	  Documentation
	   
                A container node for a set of durations that apply to a certain listing type.
            
	 */

	/**
	 * Arrays
	 */
	this.Duration = Duration;
}
ListingDurationDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = ListingDurationDefinitionType;