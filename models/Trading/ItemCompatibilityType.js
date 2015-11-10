function ItemCompatibilityType(Delete, NameValueList, CompatibilityNotes) {

	/**
	  Documentation
	   All information corresponding to an individual compatibility by application.
	 */

	/**
	 * Arrays
	 *	NameValueList: NameValueListType
	 */
	this.Delete = Delete;
	this.NameValueList = NameValueList;
	this.CompatibilityNotes = CompatibilityNotes;
}
ItemCompatibilityType.prototype.toJSON = function(with_null) {
	var json = { 
		Delete: (this.Delete === undefined)? null : this.Delete,
		NameValueList: (this.NameValueList === undefined)? null : this.NameValueList,
		CompatibilityNotes: (this.CompatibilityNotes === undefined)? null : this.CompatibilityNotes
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
module.exports = ItemCompatibilityType;