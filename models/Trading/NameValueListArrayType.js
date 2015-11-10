function NameValueListArrayType(NameValueList) {

	/**
	  Documentation
	   
                A list of one or more valid names and corresponding values. Currently used for Item Specifics and Variations.
            
	 */

	/**
	 * Arrays
	 *	NameValueList: NameValueListType
	 */
	this.NameValueList = NameValueList;
}
NameValueListArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		NameValueList: (this.NameValueList === undefined)? null : this.NameValueList
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
module.exports = NameValueListArrayType;