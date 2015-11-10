function DisputeFilterCountType(DisputeFilterType, TotalAvailable) {

	/**
	  Documentation
	   The number of disputes that match a given filter.
	 */

	/**
	 * Arrays
	 */
	this.DisputeFilterType = DisputeFilterType;
	this.TotalAvailable = TotalAvailable;
}
DisputeFilterCountType.prototype.toJSON = function(with_null) {
	var json = { 
		DisputeFilterType: (this.DisputeFilterType === undefined)? null : this.DisputeFilterType,
		TotalAvailable: (this.TotalAvailable === undefined)? null : this.TotalAvailable
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
module.exports = DisputeFilterCountType;