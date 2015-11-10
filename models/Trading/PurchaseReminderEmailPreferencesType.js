function PurchaseReminderEmailPreferencesType(PurchaseReminderEmailPreferences) {

	/**
	  Documentation
	   Contains a seller's preference for sending a "Payment Reminder Email" to buyers.
	 */

	/**
	 * Arrays
	 */
	this.PurchaseReminderEmailPreferences = PurchaseReminderEmailPreferences;
}
PurchaseReminderEmailPreferencesType.prototype.toJSON = function(with_null) {
	var json = { 
		PurchaseReminderEmailPreferences: (this.PurchaseReminderEmailPreferences === undefined)? null : this.PurchaseReminderEmailPreferences
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
module.exports = PurchaseReminderEmailPreferencesType;