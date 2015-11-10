function RequiredSellerActionArrayType(RequiredSellerAction) {

	/**
	  Documentation
	   This type defines the <b>RequiredSellerActionArray</b> container, which may contain one or more <b>RequiredSellerAction</b> fields.
	 */

	/**
	 * Arrays
	 */
	this.RequiredSellerAction = RequiredSellerAction;
}
RequiredSellerActionArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		RequiredSellerAction: (this.RequiredSellerAction === undefined)? null : this.RequiredSellerAction
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
module.exports = RequiredSellerActionArrayType;