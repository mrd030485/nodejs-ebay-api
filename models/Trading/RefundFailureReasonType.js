function RefundFailureReasonType(RefundFailureCode) {

	/**
	  Documentation
	   This container is no longer used.
	 */

	/**
	 * Arrays
	 */
	this.RefundFailureCode = RefundFailureCode;
}
RefundFailureReasonType.prototype.toJSON = function(with_null) {
	var json = { 
		RefundFailureCode: (this.RefundFailureCode === undefined)? null : this.RefundFailureCode
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
module.exports = RefundFailureReasonType;