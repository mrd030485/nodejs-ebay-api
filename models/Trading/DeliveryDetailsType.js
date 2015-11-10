var DigitalDeliveryUserType = require('./DigitalDeliveryUserType');

function DeliveryDetailsType(Recipient, Sender) {

	/**
	  Documentation
	   <span class="tablenote"><strong>Note:</strong> This type will be enabled with version 935. For those using versions older than 935, the <b>DeliveryDetails</b> container will not be returned. </span>
                    <br> This type is used by the <b>DeliveryDetails</b> container that is returned by <b>GetOrders</b> and other order management calls. The <b>DeliveryDetails</b> container is only applicable
                    and returned if the buyer purchased a digital gift card, and is either keeping the gift card or giving that gift card to another person.
	 */

	/**
	 * Arrays
	 */
	var _Recipient;
	var _Sender;
	Object.defineProperty(this, 'Recipient', {
		 get: function(){
			 return _Recipient;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DigitalDeliveryUserType){ 
					_Recipient = value; 
				}else{
					console.log('Recipient expects type DigitalDeliveryUserType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Sender', {
		 get: function(){
			 return _Sender;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DigitalDeliveryUserType){ 
					_Sender = value; 
				}else{
					console.log('Sender expects type DigitalDeliveryUserType');
				}
			}
		}
	});
	this.Recipient = Recipient;
	this.Sender = Sender;
}
DeliveryDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		Recipient: (this.Recipient === undefined)? null : this.Recipient.toJSON(),
		Sender: (this.Sender === undefined)? null : this.Sender.toJSON()
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
module.exports = DeliveryDetailsType;