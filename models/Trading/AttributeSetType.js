function AttributeSetType(Attribute) {

	/**
	  Documentation
	   
                This type is deprecated.
            
	 */

	/**
	 * Arrays
	 *	Attribute: AttributeType
	 */
	this.Attribute = Attribute;
}
AttributeSetType.prototype.toJSON = function(with_null) {
	var json = { 
		Attribute: (this.Attribute === undefined)? null : this.Attribute
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
module.exports = AttributeSetType;