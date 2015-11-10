function AttributeType(Value) {

	/**
	  Documentation
	   A salient aspect or feature of a Half.com item that is specified by the seller so that a buyers can find the item more easily.
	 */

	/**
	 * Arrays
	 *	Value: ValType
	 */
	this.Value = Value;
}
AttributeType.prototype.toJSON = function(with_null) {
	var json = { 
		Value: (this.Value === undefined)? null : this.Value
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
module.exports = AttributeType;