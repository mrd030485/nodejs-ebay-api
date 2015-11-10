function LocalSearchType(MaxDistance, PostalCode) {

	/**
	  Documentation
	   Contains data for filtering a search by proximity.
	 */

	/**
	 * Arrays
	 */
	this.MaxDistance = MaxDistance;
	this.PostalCode = PostalCode;
}
LocalSearchType.prototype.toJSON = function(with_null) {
	var json = { 
		MaxDistance: (this.MaxDistance === undefined)? null : this.MaxDistance,
		PostalCode: (this.PostalCode === undefined)? null : this.PostalCode
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
module.exports = LocalSearchType;