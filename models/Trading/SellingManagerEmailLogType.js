var SellingManagerEmailTypeCodeType = require('./SellingManagerEmailTypeCodeType'),
	SellingManagerEmailSentStatusCodeType = require('./SellingManagerEmailSentStatusCodeType');

function SellingManagerEmailLogType(EmailType, CustomEmailName, EmailState, EventTime) {

	/**
	  Documentation
	   
                Contains list of Email log.
            
	 */

	/**
	 * Arrays
	 */
	var _EmailType;
	var _EmailState;
	Object.defineProperty(this, 'EmailType', {
		 get: function(){
			 return _EmailType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerEmailTypeCodeType){ 
					_EmailType = value; 
				}else{
					console.log('EmailType expects type SellingManagerEmailTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'EmailState', {
		 get: function(){
			 return _EmailState;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerEmailSentStatusCodeType){ 
					_EmailState = value; 
				}else{
					console.log('EmailState expects type SellingManagerEmailSentStatusCodeType');
				}
			}
		}
	});
	this.EmailType = EmailType;
	this.CustomEmailName = CustomEmailName;
	this.EmailState = EmailState;
	this.EventTime = EventTime;
}
SellingManagerEmailLogType.prototype.toJSON = function(with_null) {
	var json = { 
		EmailType: (this.EmailType === undefined)? null : this.EmailType.toJSON(),
		CustomEmailName: (this.CustomEmailName === undefined)? null : this.CustomEmailName,
		EmailState: (this.EmailState === undefined)? null : this.EmailState.toJSON(),
		EventTime: (this.EventTime === undefined)? null : this.EventTime
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
module.exports = SellingManagerEmailLogType;