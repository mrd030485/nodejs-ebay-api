var UserIDType = require('./UserIDType'),
	AmountType = require('./AmountType'),
	BidderStatusCodeType = require('./BidderStatusCodeType');

function BidApprovalType(UserID, ApprovedBiddingLimit, DeclinedComment, Status) {

	/**
	  Documentation
	   
                This type is deprecated.
            
	 */

	/**
	 * Arrays
	 */
	var _UserID;
	var _ApprovedBiddingLimit;
	var _Status;
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
	Object.defineProperty(this, 'ApprovedBiddingLimit', {
		 get: function(){
			 return _ApprovedBiddingLimit;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_ApprovedBiddingLimit = value; 
				}else{
					console.log('ApprovedBiddingLimit expects type AmountType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Status', {
		 get: function(){
			 return _Status;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BidderStatusCodeType){ 
					_Status = value; 
				}else{
					console.log('Status expects type BidderStatusCodeType');
				}
			}
		}
	});
	this.UserID = UserID;
	this.ApprovedBiddingLimit = ApprovedBiddingLimit;
	this.DeclinedComment = DeclinedComment;
	this.Status = Status;
}
BidApprovalType.prototype.toJSON = function(with_null) {
	var json = { 
		UserID: (this.UserID === undefined)? null : this.UserID.toJSON(),
		ApprovedBiddingLimit: (this.ApprovedBiddingLimit === undefined)? null : this.ApprovedBiddingLimit.toJSON(),
		DeclinedComment: (this.DeclinedComment === undefined)? null : this.DeclinedComment,
		Status: (this.Status === undefined)? null : this.Status.toJSON()
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
module.exports = BidApprovalType;