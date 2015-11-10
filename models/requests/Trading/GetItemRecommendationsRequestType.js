function GetItemRecommendationsRequestType(GetRecommendationsRequestContainer) {

	/**
	  Documentation
	   No longer recommended.
	 */

	/**
	 * Arrays
	 *	GetRecommendationsRequestContainer: GetRecommendationsRequestContainerType
	 */
	this.GetRecommendationsRequestContainer = GetRecommendationsRequestContainer;
}
GetItemRecommendationsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		GetRecommendationsRequestContainer: (this.GetRecommendationsRequestContainer === undefined)? null : this.GetRecommendationsRequestContainer
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
module.exports = GetItemRecommendationsRequestType;