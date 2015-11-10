function RecoupmentPolicyConsentType(Site) {

	/**
	  Documentation
	   Container for supported site information
	 */

	/**
	 * Arrays
	 */
	this.Site = Site;
}
RecoupmentPolicyConsentType.prototype.toJSON = function(with_null) {
	var json = { 
		Site: (this.Site === undefined)? null : this.Site
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
module.exports = RecoupmentPolicyConsentType;