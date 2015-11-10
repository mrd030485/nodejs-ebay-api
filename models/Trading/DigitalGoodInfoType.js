function DigitalGoodInfoType(DigitalDelivery) {

	/**
	  Documentation
	   
                <span class="tablenote"><strong>Note:</strong> This type will be enabled with version 935. For those using versions older than 935, the <b>DigitalGoodInfo</b> container will not be available for use. </span> <br>
                This type is used by the <b>DigitalGoodInfo</b> container, which is used in add/relist/revise/verify listing calls to designate the listing as a digital gift card listing.
            
	 */

	/**
	 * Arrays
	 */
	this.DigitalDelivery = DigitalDelivery;
}
DigitalGoodInfoType.prototype.toJSON = function(with_null) {
	var json = { 
		DigitalDelivery: (this.DigitalDelivery === undefined)? null : this.DigitalDelivery
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
module.exports = DigitalGoodInfoType;