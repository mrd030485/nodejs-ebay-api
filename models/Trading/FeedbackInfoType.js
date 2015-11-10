var CommentTypeCodeType = require('./CommentTypeCodeType'),
	UserIDType = require('./UserIDType');

function FeedbackInfoType(CommentText, CommentType, TargetUser) {

	/**
	  Documentation
	   
                Type defining the Feedback details for an order line item, including the eBay User ID of the user the feedback is intended for, the Feedback rating, and the Feedback comment.
            
	 */

	/**
	 * Arrays
	 */
	var _CommentType;
	var _TargetUser;
	Object.defineProperty(this, 'CommentType', {
		 get: function(){
			 return _CommentType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CommentTypeCodeType){ 
					_CommentType = value; 
				}else{
					console.log('CommentType expects type CommentTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'TargetUser', {
		 get: function(){
			 return _TargetUser;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UserIDType){ 
					_TargetUser = value; 
				}else{
					console.log('TargetUser expects type UserIDType');
				}
			}
		}
	});
	this.CommentText = CommentText;
	this.CommentType = CommentType;
	this.TargetUser = TargetUser;
}
FeedbackInfoType.prototype.toJSON = function(with_null) {
	var json = { 
		CommentText: (this.CommentText === undefined)? null : this.CommentText,
		CommentType: (this.CommentType === undefined)? null : this.CommentType.toJSON(),
		TargetUser: (this.TargetUser === undefined)? null : this.TargetUser.toJSON()
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
module.exports = FeedbackInfoType;