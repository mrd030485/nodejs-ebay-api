function PromotionalSaleArrayType(PromotionalSale) {

	/**
	  Documentation
	   An array of promotional sales.
	 */

	/**
	 * Arrays
	 *	PromotionalSale: PromotionalSaleType
	 */
	this.PromotionalSale = PromotionalSale;
}
PromotionalSaleArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		PromotionalSale: (this.PromotionalSale === undefined)? null : this.PromotionalSale
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
module.exports = PromotionalSaleArrayType;