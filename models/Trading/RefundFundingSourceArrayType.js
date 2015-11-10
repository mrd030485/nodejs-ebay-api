function RefundFundingSourceArrayType(RefundFundingSource) {

	/**
	  Documentation
	   
                This type is no longer used.
            
	 */

	/**
	 * Arrays
	 *	RefundFundingSource: RefundFundingSourceType
	 */
	this.RefundFundingSource = RefundFundingSource;
}
RefundFundingSourceArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		RefundFundingSource: (this.RefundFundingSource === undefined)? null : this.RefundFundingSource
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
module.exports = RefundFundingSourceArrayType;