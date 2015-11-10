var MarkUpMarkDownEventTypeCodeType = require('./MarkUpMarkDownEventTypeCodeType');

function MarkUpMarkDownEventType(Type, Time, Reason) {

	/**
	  Documentation
	   
                Describes an individual mark-up or mark-down event. eBay will automatically mark an application as down if attempts to deliver a notification fail repeatedly. eBay may mark an application down manually under certain circumstances.
            
	 */

	/**
	 * Arrays
	 */
	var _Type;
	Object.defineProperty(this, 'Type', {
		 get: function(){
			 return _Type;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof MarkUpMarkDownEventTypeCodeType){ 
					_Type = value; 
				}else{
					console.log('Type expects type MarkUpMarkDownEventTypeCodeType');
				}
			}
		}
	});
	this.Type = Type;
	this.Time = Time;
	this.Reason = Reason;
}
MarkUpMarkDownEventType.prototype.toJSON = function(with_null) {
	var json = { 
		Type: (this.Type === undefined)? null : this.Type.toJSON(),
		Time: (this.Time === undefined)? null : this.Time,
		Reason: (this.Reason === undefined)? null : this.Reason
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
module.exports = MarkUpMarkDownEventType;