function RateTableDetailsType(DomesticRateTable, InternationalRateTable) {

	/**
	  Documentation
	   
                This type contains fields to specify the shipping rate tables that are to be applied to a listing. Shipping rate tables enable sellers to tailor the flat shipping rates offered for an item to fit the shipping destination. They can specify a base rate
                for a large region, then define alternative rates or surcharges for shipping to other (extended) regions within the larger region. <br><br> Prerequisites for applying shipping rate tables: <ul> <li>The shipping
                type for the listing must be Flat. </li> <li>The seller must have previously configured a shipping rate table in My eBay site preferences. </li> </ul> This container is returned from the GetItem family of calls
                only for the seller who listed the item. <br><br> You can find more information about using shipping rate tables in the Shipping chapter of the Trading API User's Guide.
            
	 */

	/**
	 * Arrays
	 */
	this.DomesticRateTable = DomesticRateTable;
	this.InternationalRateTable = InternationalRateTable;
}
RateTableDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		DomesticRateTable: (this.DomesticRateTable === undefined)? null : this.DomesticRateTable,
		InternationalRateTable: (this.InternationalRateTable === undefined)? null : this.InternationalRateTable
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
module.exports = RateTableDetailsType;