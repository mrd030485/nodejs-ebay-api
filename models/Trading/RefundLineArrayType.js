function RefundLineArrayType(RefundLine) {

	/**
	  Documentation
	   This type is no longer used.
	 */

	/**
	 * Arrays
	 *	RefundLine: RefundLineType
	 */
	this.RefundLine = RefundLine;
}
RefundLineArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		RefundLine: (this.RefundLine === undefined)? null : this.RefundLine
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
module.exports = RefundLineArrayType;