function NotificationEnableArrayType(NotificationEnable) {

	/**
	  Documentation
	   
                A list of NotificationEnable entries. Each entry specifies one notification and whether it is enabled.
            
	 */

	/**
	 * Arrays
	 *	NotificationEnable: NotificationEnableType
	 */
	this.NotificationEnable = NotificationEnable;
}
NotificationEnableArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		NotificationEnable: (this.NotificationEnable === undefined)? null : this.NotificationEnable
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
module.exports = NotificationEnableArrayType;