function PaisaPayFullEscrowEnabledDefinitionType() {

	/**
	  Documentation
	   This type defines the PaisaPayEscrow payment feature. If the field is present, the PaisaPayEscrow payment feature applies to the category. The field is returned as an empty element, the boolean value is not returned.
	 */

	/**
	 * Arrays
	 */
}
PaisaPayFullEscrowEnabledDefinitionType.prototype.toJSON = function(with_null) {
	var json = { 
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
module.exports = PaisaPayFullEscrowEnabledDefinitionType;