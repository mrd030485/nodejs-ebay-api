var UserIDType = require('./UserIDType');

function BidderDetailType(UserID, Email, FeedbackScore, UniqueNegativeFeedbackCount, UniquePositiveFeedbackCount, UniqueNeutralFeedbackCount) {

	/**
	  Documentation
	   
                This type is deprecated
            
	 */

	/**
	 * Arrays
	 */
	var _UserID;
	Object.defineProperty(this, 'UserID', {
		 get: function(){
			 return _UserID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIDType){ 
					_UserID = value; 
				}else{
					console.log('UserID expects type UserIDType');
				}
			}
		}
	});
	this.UserID = UserID;
	this.Email = Email;
	this.FeedbackScore = FeedbackScore;
	this.UniqueNegativeFeedbackCount = UniqueNegativeFeedbackCount;
	this.UniquePositiveFeedbackCount = UniquePositiveFeedbackCount;
	this.UniqueNeutralFeedbackCount = UniqueNeutralFeedbackCount;
}
BidderDetailType.prototype.toJSON = function(with_null) {
	var json = { 
		UserID: (this.UserID === undefined)? null : this.UserID.toJSON(),
		Email: (this.Email === undefined)? null : this.Email,
		FeedbackScore: (this.FeedbackScore === undefined)? null : this.FeedbackScore,
		UniqueNegativeFeedbackCount: (this.UniqueNegativeFeedbackCount === undefined)? null : this.UniqueNegativeFeedbackCount,
		UniquePositiveFeedbackCount: (this.UniquePositiveFeedbackCount === undefined)? null : this.UniquePositiveFeedbackCount,
		UniqueNeutralFeedbackCount: (this.UniqueNeutralFeedbackCount === undefined)? null : this.UniqueNeutralFeedbackCount
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
module.exports = BidderDetailType;