function SKUArrayType(SKU) {

	/**
	  Documentation
	   A list of stock-keeping unit (SKU) identifiers that a seller uses in listings.
	 */

	/**
	 * Arrays
	 *	SKU: SKUType
	 */
	this.SKU = SKU;
}
SKUArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		SKU: (this.SKU === undefined)? null : this.SKU
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
module.exports = SKUArrayType;