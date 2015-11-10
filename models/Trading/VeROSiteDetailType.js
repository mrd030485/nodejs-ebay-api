function VeROSiteDetailType(Site, ReasonCodeDetail) {

	/**
	  Documentation
	   Container for reason code details for a given site.
	 */

	/**
	 * Arrays
	 *	ReasonCodeDetail: ReasonCodeDetailType
	 */
	this.Site = Site;
	this.ReasonCodeDetail = ReasonCodeDetail;
}
VeROSiteDetailType.prototype.toJSON = function(with_null) {
	var json = { 
		Site: (this.Site === undefined)? null : this.Site,
		ReasonCodeDetail: (this.ReasonCodeDetail === undefined)? null : this.ReasonCodeDetail
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
module.exports = VeROSiteDetailType;