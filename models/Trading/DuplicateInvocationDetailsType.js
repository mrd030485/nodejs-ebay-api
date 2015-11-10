var UUIDType = require('./UUIDType'),
	InvocationStatusType = require('./InvocationStatusType');

function DuplicateInvocationDetailsType(DuplicateInvocationID, Status, InvocationTrackingID) {

	/**
	  Documentation
	   Contains properties that provide information on duplicate uses of InvocationIDs.
	 */

	/**
	 * Arrays
	 */
	var _DuplicateInvocationID;
	var _Status;
	Object.defineProperty(this, 'DuplicateInvocationID', {
		 get: function(){
			 return _DuplicateInvocationID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof UUIDType){ 
					_DuplicateInvocationID = value; 
				}else{
					console.log('DuplicateInvocationID expects type UUIDType');
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
				if(value instanceof InvocationStatusType){ 
					_Status = value; 
				}else{
					console.log('Status expects type InvocationStatusType');
				}
			}
		}
	});
	this.DuplicateInvocationID = DuplicateInvocationID;
	this.Status = Status;
	this.InvocationTrackingID = InvocationTrackingID;
}
DuplicateInvocationDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		DuplicateInvocationID: (this.DuplicateInvocationID === undefined)? null : this.DuplicateInvocationID.toJSON(),
		Status: (this.Status === undefined)? null : this.Status.toJSON(),
		InvocationTrackingID: (this.InvocationTrackingID === undefined)? null : this.InvocationTrackingID
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
module.exports = DuplicateInvocationDetailsType;