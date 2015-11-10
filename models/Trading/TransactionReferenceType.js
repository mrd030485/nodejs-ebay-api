function TransactionReferenceType(type) {

	/**
	  Documentation
	   
                Type defining the <strong>ReferenceID</strong> element, which is used to display the unique identifier of a payment (and payment type through the <strong>type</strong> attribute.
            
	 */

	/**
	 * Arrays
	 */
	this.type = type;
}
TransactionReferenceType.prototype.toJSON = function(with_null) {
	var json = { 
		type: (this.type === undefined)? null : this.type
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
module.exports = TransactionReferenceType;