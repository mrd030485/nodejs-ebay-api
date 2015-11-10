function StoreCustomPageArrayType(CustomPage) {

	/**
	  Documentation
	   Set of Store custom pages.
	 */

	/**
	 * Arrays
	 *	CustomPage: StoreCustomPageType
	 */
	this.CustomPage = CustomPage;
}
StoreCustomPageArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		CustomPage: (this.CustomPage === undefined)? null : this.CustomPage
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
module.exports = StoreCustomPageArrayType;