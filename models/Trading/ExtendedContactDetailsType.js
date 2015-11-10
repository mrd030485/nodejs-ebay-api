var ContactHoursDetailsType = require('./ContactHoursDetailsType');

function ExtendedContactDetailsType(ContactHoursDetails, ClassifiedAdContactByEmailEnabled, PayPerLeadPhoneNumber) {

	/**
	  Documentation
	   Contains extended contact information for an eBay user.
	 */

	/**
	 * Arrays
	 */
	var _ContactHoursDetails;
	Object.defineProperty(this, 'ContactHoursDetails', {
		 get: function(){
			 return _ContactHoursDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ContactHoursDetailsType){ 
					_ContactHoursDetails = value; 
				}else{
					console.log('ContactHoursDetails expects type ContactHoursDetailsType');
				}
			}
		}
	});
	this.ContactHoursDetails = ContactHoursDetails;
	this.ClassifiedAdContactByEmailEnabled = ClassifiedAdContactByEmailEnabled;
	this.PayPerLeadPhoneNumber = PayPerLeadPhoneNumber;
}
ExtendedContactDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		ContactHoursDetails: (this.ContactHoursDetails === undefined)? null : this.ContactHoursDetails.toJSON(),
		ClassifiedAdContactByEmailEnabled: (this.ClassifiedAdContactByEmailEnabled === undefined)? null : this.ClassifiedAdContactByEmailEnabled,
		PayPerLeadPhoneNumber: (this.PayPerLeadPhoneNumber === undefined)? null : this.PayPerLeadPhoneNumber
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
module.exports = ExtendedContactDetailsType;