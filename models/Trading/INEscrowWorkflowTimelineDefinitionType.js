function INEscrowWorkflowTimelineDefinitionType() {

	/**
	  Documentation
	   Defines the escrow workflow version applicable for the given category on the India site, if the category supports PaisaPayFullEscrow. If this field is present, the corresponding feature applies to the category. The field is returned as
                    an empty element.
	 */

	/**
	 * Arrays
	 */
}
INEscrowWorkflowTimelineDefinitionType.prototype.toJSON = function(with_null) {
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
module.exports = INEscrowWorkflowTimelineDefinitionType;