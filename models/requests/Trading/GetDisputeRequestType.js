var DisputeIDType = require('../../Trading/DisputeIDType');

function GetDisputeRequestType(DisputeID) {

	/**
	  Documentation
	   Retrieves the details of a specific eBay dispute corresponding to the supplied dispute ID.
	 */

	/**
	 * Arrays
	 */
	var _DisputeID;
	Object.defineProperty(this, 'DisputeID', {
		 get: function(){
			 return _DisputeID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DisputeIDType){ 
					_DisputeID = value; 
				}else{
					console.log('DisputeID expects type DisputeIDType');
				}
			}
		}
	});
	this.DisputeID = DisputeID;
}
GetDisputeRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		DisputeID: (this.DisputeID === undefined)? null : this.DisputeID.toJSON()
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
module.exports = GetDisputeRequestType;