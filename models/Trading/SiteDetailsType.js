function SiteDetailsType(Site, SiteID, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   Details about a specific site.
	 */

	/**
	 * Arrays
	 */
	this.Site = Site;
	this.SiteID = SiteID;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
SiteDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		Site: (this.Site === undefined)? null : this.Site,
		SiteID: (this.SiteID === undefined)? null : this.SiteID,
		DetailVersion: (this.DetailVersion === undefined)? null : this.DetailVersion,
		UpdateTime: (this.UpdateTime === undefined)? null : this.UpdateTime
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
module.exports = SiteDetailsType;