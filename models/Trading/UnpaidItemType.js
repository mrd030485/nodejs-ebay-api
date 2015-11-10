function UnpaidItemType(Status, Type) {

	/**
	  Documentation
	   Type defining the <strong>UnpaidItem</strong> container, which consists of details related to the type and status of an Unpaid Item case.
	 */

	/**
	 * Arrays
	 */
	this.Status = Status;
	this.Type = Type;
}
UnpaidItemType.prototype.toJSON = function(with_null) {
	var json = { 
		Status: (this.Status === undefined)? null : this.Status,
		Type: (this.Type === undefined)? null : this.Type
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
module.exports = UnpaidItemType;