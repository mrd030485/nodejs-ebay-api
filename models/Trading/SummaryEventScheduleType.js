var NotificationEventTypeCodeType = require('./NotificationEventTypeCodeType'),
	SummaryWindowPeriodCodeType = require('./SummaryWindowPeriodCodeType'),
	SummaryFrequencyCodeType = require('./SummaryFrequencyCodeType');

function SummaryEventScheduleType(EventType, SummaryPeriod, Frequency) {

	/**
	  Documentation
	   
                Details about a summary event schedule.
            
	 */

	/**
	 * Arrays
	 */
	var _EventType;
	var _SummaryPeriod;
	var _Frequency;
	Object.defineProperty(this, 'EventType', {
		 get: function(){
			 return _EventType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof NotificationEventTypeCodeType){ 
					_EventType = value; 
				}else{
					console.log('EventType expects type NotificationEventTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SummaryPeriod', {
		 get: function(){
			 return _SummaryPeriod;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SummaryWindowPeriodCodeType){ 
					_SummaryPeriod = value; 
				}else{
					console.log('SummaryPeriod expects type SummaryWindowPeriodCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Frequency', {
		 get: function(){
			 return _Frequency;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SummaryFrequencyCodeType){ 
					_Frequency = value; 
				}else{
					console.log('Frequency expects type SummaryFrequencyCodeType');
				}
			}
		}
	});
	this.EventType = EventType;
	this.SummaryPeriod = SummaryPeriod;
	this.Frequency = Frequency;
}
SummaryEventScheduleType.prototype.toJSON = function(with_null) {
	var json = { 
		EventType: (this.EventType === undefined)? null : this.EventType.toJSON(),
		SummaryPeriod: (this.SummaryPeriod === undefined)? null : this.SummaryPeriod.toJSON(),
		Frequency: (this.Frequency === undefined)? null : this.Frequency.toJSON()
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
module.exports = SummaryEventScheduleType;