function HistogramEntryType(Count) {

	/**
	  Documentation
	   A generic histogram entry type.
	 */

	/**
	 * Arrays
	 */
	this.Count = Count;
}
HistogramEntryType.prototype.toJSON = function(with_null) {
	var json = { 
		Count: (this.Count === undefined)? null : this.Count
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
module.exports = HistogramEntryType;