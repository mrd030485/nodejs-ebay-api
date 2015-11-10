function LookupAttributeArrayType(LookupAttribute) {

	/**
	  Documentation
	   
                This type is deprecated because attributes are deprecated.
                
            
	 */

	/**
	 * Arrays
	 *	LookupAttribute: LookupAttributeType
	 */
	this.LookupAttribute = LookupAttribute;
}
LookupAttributeArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		LookupAttribute: (this.LookupAttribute === undefined)? null : this.LookupAttribute
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
module.exports = LookupAttributeArrayType;