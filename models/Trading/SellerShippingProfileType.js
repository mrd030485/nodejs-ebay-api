function SellerShippingProfileType(ShippingProfileID, ShippingProfileName) {

	/**
	  Documentation
	   
                Type defining the <b>SellerShippingProfile</b> container, which is used in an Add/Revise/Relist Trading API call to reference a Business Policies shipping policy profile. Business Policies shipping profiles contain detailed information on
                domestic and international shipping, including shipping service options, handling time, package handling costs, excluded ship-to locations, and shipping insurance information. <br/><br/> Business Policies shipping profiles
                are also returned in <b>GetItem</b>, <b>GetMyeBaySelling</b>, and other Trading calls that retrieve Item data.
            
	 */

	/**
	 * Arrays
	 */
	this.ShippingProfileID = ShippingProfileID;
	this.ShippingProfileName = ShippingProfileName;
}
SellerShippingProfileType.prototype.toJSON = function(with_null) {
	var json = { 
		ShippingProfileID: (this.ShippingProfileID === undefined)? null : this.ShippingProfileID,
		ShippingProfileName: (this.ShippingProfileName === undefined)? null : this.ShippingProfileName
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
module.exports = SellerShippingProfileType;