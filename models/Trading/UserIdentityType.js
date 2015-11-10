function UserIdentityType(type) {

	/**
	  Documentation
	   Based on the context of the field, this type defines the user is sending or receiving a payment.
	 */

	/**
	 * Arrays
	 */
	this.type = type;
}
UserIdentityType.prototype.toJSON = function(with_null) {
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
module.exports = UserIdentityType;