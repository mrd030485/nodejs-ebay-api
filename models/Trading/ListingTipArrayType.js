function ListingTipArrayType(ListingTip) {

	/**
	  Documentation
	   (out) Contains a list of tips on improving a listing's details, if any.
	 */

	/**
	 * Arrays
	 *	ListingTip: ListingTipType
	 */
	this.ListingTip = ListingTip;
}
ListingTipArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		ListingTip: (this.ListingTip === undefined)? null : this.ListingTip
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
module.exports = ListingTipArrayType;