function GetProductFinderRequestType(AttributeSystemVersion, ProductFinderID) {

	/**
	  Documentation
	   This type is deprecated as the call is no longer available. 
	 */

	/**
	 * Arrays
	 */
	this.AttributeSystemVersion = AttributeSystemVersion;
	this.ProductFinderID = ProductFinderID;
}
GetProductFinderRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		AttributeSystemVersion: (this.AttributeSystemVersion === undefined)? null : this.AttributeSystemVersion,
		ProductFinderID: (this.ProductFinderID === undefined)? null : this.ProductFinderID
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
module.exports = GetProductFinderRequestType;