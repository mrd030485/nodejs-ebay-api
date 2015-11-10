function MyMessagesMessageArrayType(Message) {

	/**
	  Documentation
	   
                Contains a list of message data.
            
	 */

	/**
	 * Arrays
	 *	Message: MyMessagesMessageType
	 */
	this.Message = Message;
}
MyMessagesMessageArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		Message: (this.Message === undefined)? null : this.Message
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
module.exports = MyMessagesMessageArrayType;