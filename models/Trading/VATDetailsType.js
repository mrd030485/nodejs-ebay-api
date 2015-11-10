function VATDetailsType(BusinessSeller, RestrictedToBusiness, VATPercent, VATSite, VATID) {

	/**
	  Documentation
	   Container for eBay's Business User features. A business seller can choose to offer an item exclusively to bidders and buyers that also represent businesses. Only applicable when the item is listed in a B2B-enabled category. Currently,
                    the eBay Germany (DE), Austria (AT), and Switzerland (CH) sites support B2B business features.
	 */

	/**
	 * Arrays
	 */
	this.BusinessSeller = BusinessSeller;
	this.RestrictedToBusiness = RestrictedToBusiness;
	this.VATPercent = VATPercent;
	this.VATSite = VATSite;
	this.VATID = VATID;
}
VATDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		BusinessSeller: (this.BusinessSeller === undefined)? null : this.BusinessSeller,
		RestrictedToBusiness: (this.RestrictedToBusiness === undefined)? null : this.RestrictedToBusiness,
		VATPercent: (this.VATPercent === undefined)? null : this.VATPercent,
		VATSite: (this.VATSite === undefined)? null : this.VATSite,
		VATID: (this.VATID === undefined)? null : this.VATID
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
module.exports = VATDetailsType;