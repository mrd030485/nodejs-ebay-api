function FeedbackCommentArrayType(StoredCommentText) {

	/**
	  Documentation
	   Contains one or more stored comments for use as feedback to buyers.
	 */

	/**
	 * Arrays
	 */
	this.StoredCommentText = StoredCommentText;
}
FeedbackCommentArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		StoredCommentText: (this.StoredCommentText === undefined)? null : this.StoredCommentText
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
module.exports = FeedbackCommentArrayType;