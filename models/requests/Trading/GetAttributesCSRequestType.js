function GetAttributesCSRequestType(AttributeSystemVersion, AttributeSetID, IncludeCategoryMappingDetails) {

	/**
	  Documentation
	   This type is deprecated as the call is no longer available. 
	 */

	/**
	 * Arrays
	 */
	this.AttributeSystemVersion = AttributeSystemVersion;
	this.AttributeSetID = AttributeSetID;
	this.IncludeCategoryMappingDetails = IncludeCategoryMappingDetails;
}
GetAttributesCSRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		AttributeSystemVersion: (this.AttributeSystemVersion === undefined)? null : this.AttributeSystemVersion,
		AttributeSetID: (this.AttributeSetID === undefined)? null : this.AttributeSetID,
		IncludeCategoryMappingDetails: (this.IncludeCategoryMappingDetails === undefined)? null : this.IncludeCategoryMappingDetails
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
module.exports = GetAttributesCSRequestType;