var DisputeIDType = require('../../Trading/DisputeIDType');

function AddDisputeResponseRequestType(DisputeID, MessageText, DisputeActivity, ShippingCarrierUsed, ShipmentTrackNumber, ShippingTime) {

	/**
	  Documentation
	   This call enables the seller to respond to an Item Not Received (INR) dispute opened by a buyer through PayPal's Purchase Protection program, or to update an Unpaid Item case. To respond to a case opened by the buyer through eBay's Resolution
                    Center, the seller should use the <a href="http://developer.ebay.com/Devzone/resolution-case-management/CallRef/index.html" target="_blank">Resolution Case Management API</a>, the <a href="http://developer.ebay.com/Devzone/post-order/index.html"
                    target="_blank">Case Management calls</a> of the <b>Post-Order API</b>, or manage the case through the eBay Resolution Center.
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
	this.MessageText = MessageText;
	this.DisputeActivity = DisputeActivity;
	this.ShippingCarrierUsed = ShippingCarrierUsed;
	this.ShipmentTrackNumber = ShipmentTrackNumber;
	this.ShippingTime = ShippingTime;
}
AddDisputeResponseRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		DisputeID: (this.DisputeID === undefined)? null : this.DisputeID.toJSON(),
		MessageText: (this.MessageText === undefined)? null : this.MessageText,
		DisputeActivity: (this.DisputeActivity === undefined)? null : this.DisputeActivity,
		ShippingCarrierUsed: (this.ShippingCarrierUsed === undefined)? null : this.ShippingCarrierUsed,
		ShipmentTrackNumber: (this.ShipmentTrackNumber === undefined)? null : this.ShipmentTrackNumber,
		ShippingTime: (this.ShippingTime === undefined)? null : this.ShippingTime
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
module.exports = AddDisputeResponseRequestType;