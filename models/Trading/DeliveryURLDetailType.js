var EnableCodeType = require('./EnableCodeType');

function DeliveryURLDetailType(DeliveryURLName, DeliveryURL, Status) {

	/**
	  Documentation
	   
                Defines settings for a notification URL (including the URL name in DeliveryURLName).
            
	 */

	/**
	 * Arrays
	 */
	var _Status;
	Object.defineProperty(this, 'Status', {
		 get: function(){
			 return _Status;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof EnableCodeType){ 
					_Status = value; 
				}else{
					console.log('Status expects type EnableCodeType');
				}
			}
		}
	});
	this.DeliveryURLName = DeliveryURLName;
	this.DeliveryURL = DeliveryURL;
	this.Status = Status;
}
DeliveryURLDetailType.prototype.toJSON = function(with_null) {
	var json = { 
		DeliveryURLName: (this.DeliveryURLName === undefined)? null : this.DeliveryURLName,
		DeliveryURL: (this.DeliveryURL === undefined)? null : this.DeliveryURL,
		Status: (this.Status === undefined)? null : this.Status.toJSON()
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
module.exports = DeliveryURLDetailType;