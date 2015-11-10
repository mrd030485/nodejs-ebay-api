function ExternalProductIDType(Value, ReturnSearchResultOnDuplicates, Type, AlternateValue) {

	/**
	  Documentation
	   This type is deprecated as the parent of this type is no longer available.
	 */

	/**
	 * Arrays
	 */
	this.Value = Value;
	this.ReturnSearchResultOnDuplicates = ReturnSearchResultOnDuplicates;
	this.Type = Type;
	this.AlternateValue = AlternateValue;
}
ExternalProductIDType.prototype.toJSON = function(with_null) {
	var json = { 
		Value: (this.Value === undefined)? null : this.Value,
		ReturnSearchResultOnDuplicates: (this.ReturnSearchResultOnDuplicates === undefined)? null : this.ReturnSearchResultOnDuplicates,
		Type: (this.Type === undefined)? null : this.Type,
		AlternateValue: (this.AlternateValue === undefined)? null : this.AlternateValue
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
module.exports = ExternalProductIDType;