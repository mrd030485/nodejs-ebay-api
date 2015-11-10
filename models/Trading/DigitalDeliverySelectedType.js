var DeliveryStatusType = require('./DeliveryStatusType'),
	DeliveryDetailsType = require('./DeliveryDetailsType');

function DigitalDeliverySelectedType(DeliveryMethod, DeliveryStatus, DeliveryDetails) {

	/**
	  Documentation
	   
                <span class="tablenote"><strong>Note:</strong> This type will be enabled with version 935. For those using versions older than 935, the <b>DigitalDeliverySelected</b> container will not be returned. </span> <br>
                This type is used by the <b>DigitalDeliverySelected</b> container that is returned by <b>GetOrders</b> and other order management calls. The <b>DigitalDeliverySelected</b> container is only applicable
                and returned if the buyer purchased a digital gift card for themselves, or is giving the digital gift card to someone else as a gift.
            
	 */

	/**
	 * Arrays
	 */
	var _DeliveryStatus;
	var _DeliveryDetails;
	Object.defineProperty(this, 'DeliveryStatus', {
		 get: function(){
			 return _DeliveryStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DeliveryStatusType){ 
					_DeliveryStatus = value; 
				}else{
					console.log('DeliveryStatus expects type DeliveryStatusType');
				}
			}
		}
	});
	Object.defineProperty(this, 'DeliveryDetails', {
		 get: function(){
			 return _DeliveryDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof DeliveryDetailsType){ 
					_DeliveryDetails = value; 
				}else{
					console.log('DeliveryDetails expects type DeliveryDetailsType');
				}
			}
		}
	});
	this.DeliveryMethod = DeliveryMethod;
	this.DeliveryStatus = DeliveryStatus;
	this.DeliveryDetails = DeliveryDetails;
}
DigitalDeliverySelectedType.prototype.toJSON = function(with_null) {
	var json = { 
		DeliveryMethod: (this.DeliveryMethod === undefined)? null : this.DeliveryMethod,
		DeliveryStatus: (this.DeliveryStatus === undefined)? null : this.DeliveryStatus.toJSON(),
		DeliveryDetails: (this.DeliveryDetails === undefined)? null : this.DeliveryDetails.toJSON()
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
module.exports = DigitalDeliverySelectedType;