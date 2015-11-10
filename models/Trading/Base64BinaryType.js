function Base64BinaryType(contentType) {

	/**
	  Documentation
	   
                This type is a binary-to-text encoding scheme that represents binary data in an ASCII string format by translating it into a radix-64 representation. The term "Base64" originates from a specific MIME content transfer encoding.
            
	 */

	/**
	 * Arrays
	 */
	this.contentType = contentType;
}
Base64BinaryType.prototype.toJSON = function(with_null) {
	var json = { 
		contentType: (this.contentType === undefined)? null : this.contentType
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
module.exports = Base64BinaryType;