function AddressAttributeType(type) {

	/**
	  Documentation
	   
                This type is used to display the value of the <b>type</b> attribute of the <b>AddressAttribute</b> field.
            
	 */

	/**
	 * Arrays
	 */
	this.type = type;
}
AddressAttributeType.prototype.toJSON = function(with_null) {
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
module.exports = AddressAttributeType;