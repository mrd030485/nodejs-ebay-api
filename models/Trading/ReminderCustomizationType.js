function ReminderCustomizationType(DurationInDays, Include) {

	/**
	  Documentation
	   
                Specifies how to return certain reminder types from the user's My eBay account.
            
	 */

	/**
	 * Arrays
	 */
	this.DurationInDays = DurationInDays;
	this.Include = Include;
}
ReminderCustomizationType.prototype.toJSON = function(with_null) {
	var json = { 
		DurationInDays: (this.DurationInDays === undefined)? null : this.DurationInDays,
		Include: (this.Include === undefined)? null : this.Include
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
module.exports = ReminderCustomizationType;