var SMSSubscriptionType = require('./SMSSubscriptionType');

function NotificationUserDataType(SMSSubscription, SummarySchedule, ExternalUserData) {

	/**
	  Documentation
	   
                User data related to notifications.
            
	 */

	/**
	 * Arrays
	 *	SummarySchedule: SummaryEventScheduleType
	 */
	var _SMSSubscription;
	Object.defineProperty(this, 'SMSSubscription', {
		 get: function(){
			 return _SMSSubscription;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SMSSubscriptionType){ 
					_SMSSubscription = value; 
				}else{
					console.log('SMSSubscription expects type SMSSubscriptionType');
				}
			}
		}
	});
	this.SMSSubscription = SMSSubscription;
	this.SummarySchedule = SummarySchedule;
	this.ExternalUserData = ExternalUserData;
}
NotificationUserDataType.prototype.toJSON = function(with_null) {
	var json = { 
		SMSSubscription: (this.SMSSubscription === undefined)? null : this.SMSSubscription.toJSON(),
		SummarySchedule: (this.SummarySchedule === undefined)? null : this.SummarySchedule,
		ExternalUserData: (this.ExternalUserData === undefined)? null : this.ExternalUserData
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
module.exports = NotificationUserDataType;