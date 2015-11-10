function SiteLocationType(SiteID) {

	/**
	  Documentation
	   Contains the data that defines a site-based filter (used when searching for items and filtering the search result set).
	 */

	/**
	 * Arrays
	 */
	this.SiteID = SiteID;
}
SiteLocationType.prototype.toJSON = function(with_null) {
	var json = { 
		SiteID: (this.SiteID === undefined)? null : this.SiteID
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
module.exports = SiteLocationType;