function TaxTableType(TaxJurisdiction) {

	/**
	  Documentation
	   
                Sales tax details for zero or more jurisdictions (states, provinces, etc).
            
	 */

	/**
	 * Arrays
	 *	TaxJurisdiction: TaxJurisdictionType
	 */
	this.TaxJurisdiction = TaxJurisdiction;
}
TaxTableType.prototype.toJSON = function(with_null) {
	var json = { 
		TaxJurisdiction: (this.TaxJurisdiction === undefined)? null : this.TaxJurisdiction
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
module.exports = TaxTableType;