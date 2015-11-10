function SearchAttributesType(AttributeID, DateSpecifier, RangeSpecifier, ValueList) {

	/**
	  Documentation
	   This type is deprecated as <b>GetProduct*</b> calls were deprecated. 
	 */

	/**
	 * Arrays
	 *	ValueList: ValType
	 */
	this.AttributeID = AttributeID;
	this.DateSpecifier = DateSpecifier;
	this.RangeSpecifier = RangeSpecifier;
	this.ValueList = ValueList;
}
SearchAttributesType.prototype.toJSON = function(with_null) {
	var json = { 
		AttributeID: (this.AttributeID === undefined)? null : this.AttributeID,
		DateSpecifier: (this.DateSpecifier === undefined)? null : this.DateSpecifier,
		RangeSpecifier: (this.RangeSpecifier === undefined)? null : this.RangeSpecifier,
		ValueList: (this.ValueList === undefined)? null : this.ValueList
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
module.exports = SearchAttributesType;