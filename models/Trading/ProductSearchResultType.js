function ProductSearchResultType(ID, NumProducts, AttributeSet, DisplayStockPhotos) {

	/**
	  Documentation
	   
                This type is deprecated as <b>GetProduct*</b> calls were deprecated.
                
            
	 */

	/**
	 * Arrays
	 *	AttributeSet: ResponseAttributeSetType
	 */
	this.ID = ID;
	this.NumProducts = NumProducts;
	this.AttributeSet = AttributeSet;
	this.DisplayStockPhotos = DisplayStockPhotos;
}
ProductSearchResultType.prototype.toJSON = function(with_null) {
	var json = { 
		ID: (this.ID === undefined)? null : this.ID,
		NumProducts: (this.NumProducts === undefined)? null : this.NumProducts,
		AttributeSet: (this.AttributeSet === undefined)? null : this.AttributeSet,
		DisplayStockPhotos: (this.DisplayStockPhotos === undefined)? null : this.DisplayStockPhotos
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
module.exports = ProductSearchResultType;