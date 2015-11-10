function MyMessagesAlertArrayType(Alert) {

	/**
	  Documentation
	   
                This type is deprecated because <b>MyMessagesAlert*</b> are deprecated.
                
            
	 */

	/**
	 * Arrays
	 *	Alert: MyMessagesAlertType
	 */
	this.Alert = Alert;
}
MyMessagesAlertArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		Alert: (this.Alert === undefined)? null : this.Alert
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
module.exports = MyMessagesAlertArrayType;