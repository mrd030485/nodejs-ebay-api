function RefundArrayType(Refund) {

	/**
	  Documentation
	   
                Type used by the <strong>RefundArray</strong> container, which consists of an array of Half.com refunds.
            
	 */

	/**
	 * Arrays
	 *	Refund: RefundType
	 */
	this.Refund = Refund;
}
RefundArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		Refund: (this.Refund === undefined)? null : this.Refund
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
module.exports = RefundArrayType;