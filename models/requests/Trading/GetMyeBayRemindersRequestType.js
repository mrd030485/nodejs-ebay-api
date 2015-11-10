var ReminderCustomizationType = require('../../Trading/ReminderCustomizationType');

function GetMyeBayRemindersRequestType(BuyingReminders, SellingReminders) {

	/**
	  Documentation
	   Requests totals for the Buying and Selling reminders from the user's My eBay account.
	 */

	/**
	 * Arrays
	 */
	var _BuyingReminders;
	var _SellingReminders;
	Object.defineProperty(this, 'BuyingReminders', {
		 get: function(){
			 return _BuyingReminders;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ReminderCustomizationType){ 
					_BuyingReminders = value; 
				}else{
					console.log('BuyingReminders expects type ReminderCustomizationType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SellingReminders', {
		 get: function(){
			 return _SellingReminders;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ReminderCustomizationType){ 
					_SellingReminders = value; 
				}else{
					console.log('SellingReminders expects type ReminderCustomizationType');
				}
			}
		}
	});
	this.BuyingReminders = BuyingReminders;
	this.SellingReminders = SellingReminders;
}
GetMyeBayRemindersRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		BuyingReminders: (this.BuyingReminders === undefined)? null : this.BuyingReminders.toJSON(),
		SellingReminders: (this.SellingReminders === undefined)? null : this.SellingReminders.toJSON()
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
module.exports = GetMyeBayRemindersRequestType;