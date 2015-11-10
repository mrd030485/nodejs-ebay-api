function WantItNowPostArrayType(WantItNowPost) {

	/**
	  Documentation
	   Container for a list of search result items. Can contain zero, one, or multiple WantItNowPostType objects, each of which contains data for a single Want It Now post found by the search.
	 */

	/**
	 * Arrays
	 *	WantItNowPost: WantItNowPostType
	 */
	this.WantItNowPost = WantItNowPost;
}
WantItNowPostArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		WantItNowPost: (this.WantItNowPost === undefined)? null : this.WantItNowPost
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
module.exports = WantItNowPostArrayType;