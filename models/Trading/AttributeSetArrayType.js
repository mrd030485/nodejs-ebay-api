function AttributeSetArrayType(AttributeSet) {

	/**
	  Documentation
	   This type is deprecated.
	 */

	/**
	 * Arrays
	 *	AttributeSet: AttributeSetType
	 */
	this.AttributeSet = AttributeSet;
}
AttributeSetArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		AttributeSet: (this.AttributeSet === undefined)? null : this.AttributeSet
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
module.exports = AttributeSetArrayType;