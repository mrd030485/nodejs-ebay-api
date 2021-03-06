function GeteBayDetailsRequestType(DetailName) {

	/**
	  Documentation
	   Retrieves eBay IDs and codes (e.g., site IDs and shipping service codes), enumerated data (e.g., payment methods), and other common eBay meta-data. This call enables you to keep certain data up to date in your applications without referring
                    to the schema, the documentation, or the eBay online help. Other data is returned for your reference, but you may need to refer to the schema or the documentation for information about valid values and usage. <br><br> In
                    some cases, the data returned in the response will vary according to the site that you use for the request. <br><br> If you use GeteBayDetails in preparation for listing in the US Motors Parts and Accessories categories,
                    use site ID 0 (which is the site ID of the US site) when you call GeteBayDetails. <br><br> Sellers who engage in cross-border trade on sites that require a recoupment agreement, must agree to the recoupment terms before
                    adding items to the site. This agreement allows eBay to reimburse a buyer during a dispute and then recoup the cost from the seller. Information about whether a site is a recoupment site is returned in the GeteBayDetailsResponse.RecoupmentPolicyDetails
                    container.
                
	 */

	/**
	 * Arrays
	 */
	this.DetailName = DetailName;
}
GeteBayDetailsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		DetailName: (this.DetailName === undefined)? null : this.DetailName
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
module.exports = GeteBayDetailsRequestType;