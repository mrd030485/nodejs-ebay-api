function ReviewDetailsType(AverageRating, Review) {

	/**
	  Documentation
	   Contains product reviews written by eBay members.
	 */

	/**
	 * Arrays
	 *	Review: ReviewType
	 */
	this.AverageRating = AverageRating;
	this.Review = Review;
}
ReviewDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		AverageRating: (this.AverageRating === undefined)? null : this.AverageRating,
		Review: (this.Review === undefined)? null : this.Review
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
module.exports = ReviewDetailsType;