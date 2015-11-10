function BuyerPackageEnclosureType(type) {

	/**
	  Documentation
	   
                Type defining the <b>BuyerPackageEnclosure</b> container, which is returned in <b>GetOrders</b> (and other order management calls) if the 'Pay Upon Invoice' option is being offered to the buyer, and the seller is including payment
                instructions in the shipping package. A <b>BuyerPackageEnclosure</b> container will be returned for each shipping package containing payment instructions. The 'Pay Upon Invoice' option is only available on the German site.
            
	 */

	/**
	 * Arrays
	 */
	this.type = type;
}
BuyerPackageEnclosureType.prototype.toJSON = function(with_null) {
	var json = { 
		type: (this.type === undefined)? null : this.type
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
module.exports = BuyerPackageEnclosureType;