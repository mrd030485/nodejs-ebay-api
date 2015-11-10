function MyMessagesForwardDetailsType(UserForwardDate, ForwardMessageEncoding) {

	/**
	  Documentation
	   
                This type is deprecated because <b>MyMessagesAlert*</b> are deprecated.
            
	 */

	/**
	 * Arrays
	 */
	this.UserForwardDate = UserForwardDate;
	this.ForwardMessageEncoding = ForwardMessageEncoding;
}
MyMessagesForwardDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		UserForwardDate: (this.UserForwardDate === undefined)? null : this.UserForwardDate,
		ForwardMessageEncoding: (this.ForwardMessageEncoding === undefined)? null : this.ForwardMessageEncoding
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
module.exports = MyMessagesForwardDetailsType;