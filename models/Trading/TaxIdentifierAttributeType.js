function TaxIdentifierAttributeType(name) {

	/**
	  Documentation
	   This type is used to display the value of the <b>name</b> attribute of the <b>BuyerTaxIdentifier.Attribute</b> field.
	 */

	/**
	 * Arrays
	 */
	this.name = name;
}
TaxIdentifierAttributeType.prototype.toJSON = function(with_null) {
	var json = { 
		name: (this.name === undefined)? null : this.name
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
module.exports = TaxIdentifierAttributeType;