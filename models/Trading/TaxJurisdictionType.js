function TaxJurisdictionType(JurisdictionID, SalesTaxPercent, ShippingIncludedInTax, JurisdictionName, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   Tax-related details for a region or jurisdiction.
	 */

	/**
	 * Arrays
	 */
	this.JurisdictionID = JurisdictionID;
	this.SalesTaxPercent = SalesTaxPercent;
	this.ShippingIncludedInTax = ShippingIncludedInTax;
	this.JurisdictionName = JurisdictionName;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
TaxJurisdictionType.prototype.toJSON = function(with_null) {
	var json = { 
		JurisdictionID: (this.JurisdictionID === undefined)? null : this.JurisdictionID,
		SalesTaxPercent: (this.SalesTaxPercent === undefined)? null : this.SalesTaxPercent,
		ShippingIncludedInTax: (this.ShippingIncludedInTax === undefined)? null : this.ShippingIncludedInTax,
		JurisdictionName: (this.JurisdictionName === undefined)? null : this.JurisdictionName,
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
module.exports = TaxJurisdictionType;