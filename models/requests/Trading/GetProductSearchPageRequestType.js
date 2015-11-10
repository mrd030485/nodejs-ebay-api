function GetProductSearchPageRequestType(AttributeSystemVersion, AttributeSetID) {

	/**
	  Documentation
	   This type is deprecated as the call is no longer available. 
	 */

	/**
	 * Arrays
	 */
	this.AttributeSystemVersion = AttributeSystemVersion;
	this.AttributeSetID = AttributeSetID;
}
GetProductSearchPageRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		AttributeSystemVersion: (this.AttributeSystemVersion === undefined)? null : this.AttributeSystemVersion,
		AttributeSetID: (this.AttributeSetID === undefined)? null : this.AttributeSetID
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
module.exports = GetProductSearchPageRequestType;