function ProductFinderConstraintType(DisplayName, DisplayValue) {

	/**
	  Documentation
	   
                This type is deprecated as <b>GetProduct*</b> calls were deprecated.
                
            
	 */

	/**
	 * Arrays
	 */
	this.DisplayName = DisplayName;
	this.DisplayValue = DisplayValue;
}
ProductFinderConstraintType.prototype.toJSON = function(with_null) {
	var json = { 
		DisplayName: (this.DisplayName === undefined)? null : this.DisplayName,
		DisplayValue: (this.DisplayValue === undefined)? null : this.DisplayValue
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
module.exports = ProductFinderConstraintType;