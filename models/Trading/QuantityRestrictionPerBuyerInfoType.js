function QuantityRestrictionPerBuyerInfoType(MaximumQuantity) {

	/**
	  Documentation
	   
                This type defines the <b>QuantityRestrictionPerBuyer</b> container, which is used by the seller to restrict the quantity of items that may be purchased by one buyer during the duration of a fixed-price listing (single or multi-variation).
            
	 */

	/**
	 * Arrays
	 */
	this.MaximumQuantity = MaximumQuantity;
}
QuantityRestrictionPerBuyerInfoType.prototype.toJSON = function(with_null) {
	var json = { 
		MaximumQuantity: (this.MaximumQuantity === undefined)? null : this.MaximumQuantity
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
module.exports = QuantityRestrictionPerBuyerInfoType;