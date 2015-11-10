function BuyerPackageEnclosuresType(BuyerPackageEnclosure) {

	/**
	  Documentation
	   
                Type defining the <b>BuyerPackageEnclosures</b> container, which is returned in <b>GetOrders</b> (and other order management calls) if the 'Pay Upon Invoice' option is being offered to the buyer, and the seller is including payment
                instructions in the shipping package(s). A <b>BuyerPackageEnclosure</b> container will be returned for each shipping package containing payment instructions. The 'Pay Upon Invoice' option is only available on the German site.
            
	 */

	/**
	 * Arrays
	 *	BuyerPackageEnclosure: BuyerPackageEnclosureType
	 */
	this.BuyerPackageEnclosure = BuyerPackageEnclosure;
}
BuyerPackageEnclosuresType.prototype.toJSON = function(with_null) {
	var json = { 
		BuyerPackageEnclosure: (this.BuyerPackageEnclosure === undefined)? null : this.BuyerPackageEnclosure
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
module.exports = BuyerPackageEnclosuresType;