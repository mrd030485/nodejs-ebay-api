function SellingManagerVendorDetailsType(VendorName, VendorContactInfo) {

	/**
	  Documentation
	   Describes vendor information.
	 */

	/**
	 * Arrays
	 */
	this.VendorName = VendorName;
	this.VendorContactInfo = VendorContactInfo;
}
SellingManagerVendorDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		VendorName: (this.VendorName === undefined)? null : this.VendorName,
		VendorContactInfo: (this.VendorContactInfo === undefined)? null : this.VendorContactInfo
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
module.exports = SellingManagerVendorDetailsType;