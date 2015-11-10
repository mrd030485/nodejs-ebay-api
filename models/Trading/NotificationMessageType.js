function NotificationMessageType(MessageBody, EIAS) {

	/**
	  Documentation
	   
                A template for an SMS notification message.
            
	 */

base: undefined
	/**
	 * Arrays
	 */
	this.MessageBody = MessageBody;
	this.EIAS = EIAS;
}
NotificationMessageType.prototype.toJSON = function(with_null) {
	var json = { 
		MessageBody: (this.MessageBody === undefined)? null : this.MessageBody,
		EIAS: (this.EIAS === undefined)? null : this.EIAS
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
module.exports = NotificationMessageType;