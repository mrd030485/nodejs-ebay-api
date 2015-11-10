function UnitInfoType(UnitType, UnitQuantity) {

	/**
	  Documentation
	   
                This type provides information about the weight, volume or other quantity measurement of a listed item. The European Union requires listings for certain types of products to include the price per unit so buyers can accurately compare prices. eBay uses
                the <strong>UnitType</strong> and <strong>UnitQuantity</strong> values and the item's listed price to calculate and display the per-unit price on eBay EU sites.
                
            
	 */

	/**
	 * Arrays
	 */
	this.UnitType = UnitType;
	this.UnitQuantity = UnitQuantity;
}
UnitInfoType.prototype.toJSON = function(with_null) {
	var json = { 
		UnitType: (this.UnitType === undefined)? null : this.UnitType,
		UnitQuantity: (this.UnitQuantity === undefined)? null : this.UnitQuantity
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
module.exports = UnitInfoType;