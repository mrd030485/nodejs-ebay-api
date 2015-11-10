function ASQPreferencesType(ResetDefaultSubjects, Subject) {

	/**
	  Documentation
	   
                This type is used by the <b>ASQPreferences</b> container to allow the seller to add custom Ask Seller a Question (ASQ) subjects to item listings, or to reset the custom subjects to the default eBay values.
            
	 */

	/**
	 * Arrays
	 */
	this.ResetDefaultSubjects = ResetDefaultSubjects;
	this.Subject = Subject;
}
ASQPreferencesType.prototype.toJSON = function(with_null) {
	var json = { 
		ResetDefaultSubjects: (this.ResetDefaultSubjects === undefined)? null : this.ResetDefaultSubjects,
		Subject: (this.Subject === undefined)? null : this.Subject
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
module.exports = ASQPreferencesType;