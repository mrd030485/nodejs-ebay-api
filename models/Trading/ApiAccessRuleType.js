var AccessRuleCurrentStatusCodeType = require('./AccessRuleCurrentStatusCodeType'),
	AccessRuleStatusCodeType = require('./AccessRuleStatusCodeType');

function ApiAccessRuleType(CallName, CountsTowardAggregate, DailyHardLimit, DailySoftLimit, DailyUsage, HourlyHardLimit, HourlySoftLimit, HourlyUsage, Period, PeriodicHardLimit, PeriodicSoftLimit, PeriodicUsage, PeriodicStartDate, ModTime, RuleCurrentStatus, RuleStatus) {

	/**
	  Documentation
	   
                This type is used by the <b>ApiAccessRule</b> container that is returned in the <b>GetApiAccessRules</b> call response. An <b>ApiAccessRule</b> container will be returned for every Trading API call that the user/application
                has used. The <b>ApiAccessRule</b> container consists of hourly, daily, and periodic call limits for the call, the total number of times the call was used, and other information about usage of the call.
            
	 */

	/**
	 * Arrays
	 */
	var _RuleCurrentStatus;
	var _RuleStatus;
	Object.defineProperty(this, 'RuleCurrentStatus', {
		 get: function(){
			 return _RuleCurrentStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AccessRuleCurrentStatusCodeType){ 
					_RuleCurrentStatus = value; 
				}else{
					console.log('RuleCurrentStatus expects type AccessRuleCurrentStatusCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'RuleStatus', {
		 get: function(){
			 return _RuleStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AccessRuleStatusCodeType){ 
					_RuleStatus = value; 
				}else{
					console.log('RuleStatus expects type AccessRuleStatusCodeType');
				}
			}
		}
	});
	this.CallName = CallName;
	this.CountsTowardAggregate = CountsTowardAggregate;
	this.DailyHardLimit = DailyHardLimit;
	this.DailySoftLimit = DailySoftLimit;
	this.DailyUsage = DailyUsage;
	this.HourlyHardLimit = HourlyHardLimit;
	this.HourlySoftLimit = HourlySoftLimit;
	this.HourlyUsage = HourlyUsage;
	this.Period = Period;
	this.PeriodicHardLimit = PeriodicHardLimit;
	this.PeriodicSoftLimit = PeriodicSoftLimit;
	this.PeriodicUsage = PeriodicUsage;
	this.PeriodicStartDate = PeriodicStartDate;
	this.ModTime = ModTime;
	this.RuleCurrentStatus = RuleCurrentStatus;
	this.RuleStatus = RuleStatus;
}
ApiAccessRuleType.prototype.toJSON = function(with_null) {
	var json = { 
		CallName: (this.CallName === undefined)? null : this.CallName,
		CountsTowardAggregate: (this.CountsTowardAggregate === undefined)? null : this.CountsTowardAggregate,
		DailyHardLimit: (this.DailyHardLimit === undefined)? null : this.DailyHardLimit,
		DailySoftLimit: (this.DailySoftLimit === undefined)? null : this.DailySoftLimit,
		DailyUsage: (this.DailyUsage === undefined)? null : this.DailyUsage,
		HourlyHardLimit: (this.HourlyHardLimit === undefined)? null : this.HourlyHardLimit,
		HourlySoftLimit: (this.HourlySoftLimit === undefined)? null : this.HourlySoftLimit,
		HourlyUsage: (this.HourlyUsage === undefined)? null : this.HourlyUsage,
		Period: (this.Period === undefined)? null : this.Period,
		PeriodicHardLimit: (this.PeriodicHardLimit === undefined)? null : this.PeriodicHardLimit,
		PeriodicSoftLimit: (this.PeriodicSoftLimit === undefined)? null : this.PeriodicSoftLimit,
		PeriodicUsage: (this.PeriodicUsage === undefined)? null : this.PeriodicUsage,
		PeriodicStartDate: (this.PeriodicStartDate === undefined)? null : this.PeriodicStartDate,
		ModTime: (this.ModTime === undefined)? null : this.ModTime,
		RuleCurrentStatus: (this.RuleCurrentStatus === undefined)? null : this.RuleCurrentStatus.toJSON(),
		RuleStatus: (this.RuleStatus === undefined)? null : this.RuleStatus.toJSON()
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
module.exports = ApiAccessRuleType;