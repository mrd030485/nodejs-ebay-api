function MyMessagesAlertIDArrayType(AlertID) {

	/**
	  Documentation
	   This type is deprecated because <b>MyMessagesAlert*</b> are deprecated. 
	 */

	/**
	 * Arrays
	 *	AlertID: MyMessagesAlertIDType
	 */
	this.AlertID = AlertID;
}
MyMessagesAlertIDArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		AlertID: (this.AlertID === undefined)? null : this.AlertID
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
module.exports = MyMessagesAlertIDArrayType;