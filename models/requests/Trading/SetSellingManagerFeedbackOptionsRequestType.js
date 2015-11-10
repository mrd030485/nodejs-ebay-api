var FeedbackCommentArrayType = require('../../Trading/FeedbackCommentArrayType');

function SetSellingManagerFeedbackOptionsRequestType(AutomatedLeaveFeedbackEvent, StoredComments) {

	/**
	  Documentation
	   Enables Selling Manager subscribers to store standard feedback comments that can be left for their buyers. Selling Manager Pro subscribers can also specify what events, if any, will trigger an automated feedback to buyers.
	 */

	/**
	 * Arrays
	 */
	var _StoredComments;
	Object.defineProperty(this, 'StoredComments', {
		 get: function(){
			 return _StoredComments;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof FeedbackCommentArrayType){ 
					_StoredComments = value; 
				}else{
					console.log('StoredComments expects type FeedbackCommentArrayType');
				}
			}
		}
	});
	this.AutomatedLeaveFeedbackEvent = AutomatedLeaveFeedbackEvent;
	this.StoredComments = StoredComments;
}
SetSellingManagerFeedbackOptionsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		AutomatedLeaveFeedbackEvent: (this.AutomatedLeaveFeedbackEvent === undefined)? null : this.AutomatedLeaveFeedbackEvent,
		StoredComments: (this.StoredComments === undefined)? null : this.StoredComments.toJSON()
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
module.exports = SetSellingManagerFeedbackOptionsRequestType;