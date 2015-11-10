function ListingDurationDefinitionsType(ListingDuration) {

	/**
	  Documentation
	   A container node for sets of durations, each set describing the durations allowed for one listing type.
	 */

	/**
	 * Arrays
	 *	ListingDuration: ListingDurationDefinitionType
	 */
	this.ListingDuration = ListingDuration;
}
ListingDurationDefinitionsType.prototype.toJSON = function(with_null) {
	var json = { 
		ListingDuration: (this.ListingDuration === undefined)? null : this.ListingDuration
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
module.exports = ListingDurationDefinitionsType;