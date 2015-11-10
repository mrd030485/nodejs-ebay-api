function AttributeArrayType(Attribute) {

	/**
	  Documentation
	   This type defines the <b>AttributeArray</b> container, which is used by the seller to specify one or more attribute values for a Half.com item. This type is only used by Half.com listings.
	 */

	/**
	 * Arrays
	 *	Attribute: AttributeType
	 */
	this.Attribute = Attribute;
}
AttributeArrayType.prototype.toJSON = function(with_null) {
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
module.exports = AttributeArrayType;