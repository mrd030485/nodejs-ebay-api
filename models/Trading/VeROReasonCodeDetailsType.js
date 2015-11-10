function VeROReasonCodeDetailsType(VeROSiteDetail) {

	/**
	  Documentation
	   
                Container for reason code details for all sites.
            
	 */

	/**
	 * Arrays
	 *	VeROSiteDetail: VeROSiteDetailType
	 */
	this.VeROSiteDetail = VeROSiteDetail;
}
VeROReasonCodeDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		VeROSiteDetail: (this.VeROSiteDetail === undefined)? null : this.VeROSiteDetail
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
module.exports = VeROReasonCodeDetailsType;