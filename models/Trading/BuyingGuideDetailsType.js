function BuyingGuideDetailsType(BuyingGuide, BuyingGuideHub) {

	/**
	  Documentation
	   This type is not used by any Trading API calls.
	 */

	/**
	 * Arrays
	 *	BuyingGuide: BuyingGuideType
	 */
	this.BuyingGuide = BuyingGuide;
	this.BuyingGuideHub = BuyingGuideHub;
}
BuyingGuideDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		BuyingGuide: (this.BuyingGuide === undefined)? null : this.BuyingGuide,
		BuyingGuideHub: (this.BuyingGuideHub === undefined)? null : this.BuyingGuideHub
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
module.exports = BuyingGuideDetailsType;