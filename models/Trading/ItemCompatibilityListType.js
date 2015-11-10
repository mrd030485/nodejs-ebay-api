function ItemCompatibilityListType(Compatibility, ReplaceAll) {

	/**
	  Documentation
	   
                A list of compatible applications specified as name and value pairs. Describes an assembly with which a part is compatible (i.e., compatibility by application). For example, to specify a part's compatibility with a vehicle, the name would map to standard
                vehicle characteristics (e.g., Year, Make, Model, Trim, and Engine). The values would desribe the specific vehicle, such as a 2006 Honda Accord.
            
	 */

	/**
	 * Arrays
	 *	Compatibility: ItemCompatibilityType
	 */
	this.Compatibility = Compatibility;
	this.ReplaceAll = ReplaceAll;
}
ItemCompatibilityListType.prototype.toJSON = function(with_null) {
	var json = { 
		Compatibility: (this.Compatibility === undefined)? null : this.Compatibility,
		ReplaceAll: (this.ReplaceAll === undefined)? null : this.ReplaceAll
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
module.exports = ItemCompatibilityListType;