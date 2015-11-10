function ListingDurationReferenceType(type) {

	/**
	  Documentation
	   
                Identifies the type of listing as an attribute on the ListingDuration node.
            
	 */

	/**
	 * Arrays
	 */
	this.type = type;
}
ListingDurationReferenceType.prototype.toJSON = function(with_null) {
	var json = { 
		type: (this.type === undefined)? null : this.type
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
module.exports = ListingDurationReferenceType;