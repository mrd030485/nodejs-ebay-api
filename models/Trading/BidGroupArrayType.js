function BidGroupArrayType(BidGroup) {

	/**
	  Documentation
	   
                This type is deprecated.
            
	 */

	/**
	 * Arrays
	 *	BidGroup: BidGroupType
	 */
	this.BidGroup = BidGroup;
}
BidGroupArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		BidGroup: (this.BidGroup === undefined)? null : this.BidGroup
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
module.exports = BidGroupArrayType;