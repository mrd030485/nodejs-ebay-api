function FeesType(Fee) {

	/**
	  Documentation
	   Identifies a set of one or more fees that a member pays to eBay (or an eBay company). Instances of this type can hold one or more fees.
	 */

	/**
	 * Arrays
	 *	Fee: FeeType
	 */
	this.Fee = Fee;
}
FeesType.prototype.toJSON = function(with_null) {
	var json = { 
		Fee: (this.Fee === undefined)? null : this.Fee
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
module.exports = FeesType;