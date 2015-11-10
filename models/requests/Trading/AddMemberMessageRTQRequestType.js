var ItemIDType = require('../../Trading/ItemIDType'),
	MemberMessageType = require('../../Trading/MemberMessageType');

function AddMemberMessageRTQRequestType(ItemID, MemberMessage) {

	/**
	  Documentation
	   The base request of the <b>AddMemberMessageRTQ</b> call that enables a seller to reply to a question about an active item listing.
	 */

	/**
	 * Arrays
	 */
	var _ItemID;
	var _MemberMessage;
	Object.defineProperty(this, 'ItemID', {
		 get: function(){
			 return _ItemID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemIDType){ 
					_ItemID = value; 
				}else{
					console.log('ItemID expects type ItemIDType');
				}
			}
		}
	});
	Object.defineProperty(this, 'MemberMessage', {
		 get: function(){
			 return _MemberMessage;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MemberMessageType){ 
					_MemberMessage = value; 
				}else{
					console.log('MemberMessage expects type MemberMessageType');
				}
			}
		}
	});
	this.ItemID = ItemID;
	this.MemberMessage = MemberMessage;
}
AddMemberMessageRTQRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemID: (this.ItemID === undefined)? null : this.ItemID.toJSON(),
		MemberMessage: (this.MemberMessage === undefined)? null : this.MemberMessage.toJSON()
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
module.exports = AddMemberMessageRTQRequestType;