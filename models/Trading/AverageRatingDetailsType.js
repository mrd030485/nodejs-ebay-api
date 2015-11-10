var FeedbackRatingDetailCodeType = require('./FeedbackRatingDetailCodeType');

function AverageRatingDetailsType(RatingDetail, Rating, RatingCount) {

	/**
	  Documentation
	   
                Applicable to sites that support the Detailed Seller Rating (DSR) feature. The <b>AverageRatingDetails</b> container consists of the average detailed seller ratings in an area. When buyers leave an overall Feedback rating (positive, neutral,
                or negative) for a seller, they also can leave ratings in four areas: item as described, communication, shipping time, and charges for shipping and handling. Users retrieve detailed ratings as averages of the ratings left by buyers.
            
	 */

	/**
	 * Arrays
	 */
	var _RatingDetail;
	Object.defineProperty(this, 'RatingDetail', {
		 get: function(){
			 return _RatingDetail;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FeedbackRatingDetailCodeType){ 
					_RatingDetail = value; 
				}else{
					console.log('RatingDetail expects type FeedbackRatingDetailCodeType');
				}
			}
		}
	});
	this.RatingDetail = RatingDetail;
	this.Rating = Rating;
	this.RatingCount = RatingCount;
}
AverageRatingDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		RatingDetail: (this.RatingDetail === undefined)? null : this.RatingDetail.toJSON(),
		Rating: (this.Rating === undefined)? null : this.Rating,
		RatingCount: (this.RatingCount === undefined)? null : this.RatingCount
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
module.exports = AverageRatingDetailsType;