var DaysCodeType = require('./DaysCodeType');

function ContactHoursDetailsType(TimeZoneID, Hours1Days, Hours1AnyTime, Hours1From, Hours1To, Hours2Days, Hours2AnyTime, Hours2From, Hours2To) {

	/**
	  Documentation
	   
                Type defining the <b>ContactHoursDetails</b> container, which is used in Add/Revise/Relist calls to provide contact hours for the owner of a Classified Ad. The <b>ContactHoursDetails</b> container is only applicable to Classified
                Ad listings.
            
	 */

	/**
	 * Arrays
	 */
	var _Hours1Days;
	var _Hours2Days;
	Object.defineProperty(this, 'Hours1Days', {
		 get: function(){
			 return _Hours1Days;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DaysCodeType){ 
					_Hours1Days = value; 
				}else{
					console.log('Hours1Days expects type DaysCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Hours2Days', {
		 get: function(){
			 return _Hours2Days;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DaysCodeType){ 
					_Hours2Days = value; 
				}else{
					console.log('Hours2Days expects type DaysCodeType');
				}
			}
		}
	});
	this.TimeZoneID = TimeZoneID;
	this.Hours1Days = Hours1Days;
	this.Hours1AnyTime = Hours1AnyTime;
	this.Hours1From = Hours1From;
	this.Hours1To = Hours1To;
	this.Hours2Days = Hours2Days;
	this.Hours2AnyTime = Hours2AnyTime;
	this.Hours2From = Hours2From;
	this.Hours2To = Hours2To;
}
ContactHoursDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		TimeZoneID: (this.TimeZoneID === undefined)? null : this.TimeZoneID,
		Hours1Days: (this.Hours1Days === undefined)? null : this.Hours1Days.toJSON(),
		Hours1AnyTime: (this.Hours1AnyTime === undefined)? null : this.Hours1AnyTime,
		Hours1From: (this.Hours1From === undefined)? null : this.Hours1From,
		Hours1To: (this.Hours1To === undefined)? null : this.Hours1To,
		Hours2Days: (this.Hours2Days === undefined)? null : this.Hours2Days.toJSON(),
		Hours2AnyTime: (this.Hours2AnyTime === undefined)? null : this.Hours2AnyTime,
		Hours2From: (this.Hours2From === undefined)? null : this.Hours2From,
		Hours2To: (this.Hours2To === undefined)? null : this.Hours2To
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
module.exports = ContactHoursDetailsType;