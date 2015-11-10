function ListingRecommendationsType(Recommendation) {

	/**
	  Documentation
	   
                Type defining the <b>ListingRecommendations</b> container that is conditionally returned in all Add/Revise/Relist/Verify API calls. A <b>ListingRecommendations</b> container consists of one or more <b>Recommendation</b>
                containers, and each <b>Recommendation</b> container provides a message to the seller on how a listing can be improved or brought up to standard in regards to top-rated seller/listing requirements, mandated or recommended Item
                Specifics, picture quality requirements, pricing and/or listing format recommendations, recommended keywords and/or Item Specifics in a Title, and/or a recommendation to use Fast 'N Free shipping. <br><br> The <b>ListingRecommendations</b>
                container is only returned if the <b>IncludeRecommendations</b> flag is included and set to 'true' in the API call request.
            
	 */

	/**
	 * Arrays
	 *	Recommendation: ListingRecommendationType
	 */
	this.Recommendation = Recommendation;
}
ListingRecommendationsType.prototype.toJSON = function(with_null) {
	var json = { 
		Recommendation: (this.Recommendation === undefined)? null : this.Recommendation
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
module.exports = ListingRecommendationsType;