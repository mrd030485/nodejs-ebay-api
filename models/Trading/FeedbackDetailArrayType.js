function FeedbackDetailArrayType(FeedbackDetail) {

	/**
	  Documentation
	   
                Contains multiple individual feedback detail entries.
            
	 */

	/**
	 * Arrays
	 *	FeedbackDetail: FeedbackDetailType
	 */
	this.FeedbackDetail = FeedbackDetail;
}
FeedbackDetailArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		FeedbackDetail: (this.FeedbackDetail === undefined)? null : this.FeedbackDetail
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
module.exports = FeedbackDetailArrayType;