var ListingTipMessageType = require('./ListingTipMessageType'),
	ListingTipFieldType = require('./ListingTipFieldType');

function ListingTipType(ListingTipID, Priority, Message, Field) {

	/**
	  Documentation
	   A tip on improving a listing's details. Tips are returned from the Listing Analyzer engine.
	 */

	/**
	 * Arrays
	 */
	var _Message;
	var _Field;
	Object.defineProperty(this, 'Message', {
		 get: function(){
			 return _Message;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ListingTipMessageType){ 
					_Message = value; 
				}else{
					console.log('Message expects type ListingTipMessageType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Field', {
		 get: function(){
			 return _Field;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ListingTipFieldType){ 
					_Field = value; 
				}else{
					console.log('Field expects type ListingTipFieldType');
				}
			}
		}
	});
	this.ListingTipID = ListingTipID;
	this.Priority = Priority;
	this.Message = Message;
	this.Field = Field;
}
ListingTipType.prototype.toJSON = function(with_null) {
	var json = { 
		ListingTipID: (this.ListingTipID === undefined)? null : this.ListingTipID,
		Priority: (this.Priority === undefined)? null : this.Priority,
		Message: (this.Message === undefined)? null : this.Message.toJSON(),
		Field: (this.Field === undefined)? null : this.Field.toJSON()
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
module.exports = ListingTipType;