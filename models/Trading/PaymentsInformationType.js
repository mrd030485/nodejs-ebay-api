var PaymentInformationType = require('./PaymentInformationType'),
	RefundInformationType = require('./RefundInformationType');

function PaymentsInformationType(Payments, Refunds) {

	/**
	  Documentation
	   This type defines the <strong>MonetaryDetails</strong> container, which consists of detailed information about one or more exchanges of funds that occur between the buyer, seller, eBay, and eBay partners during the lifecycle
                    of an order, as well as detailed information about a merchant's refund (or store credit) to a buyer who has returned an In-Store Pickup item. <br/><br/> <span class="tablenote"> <strong>Note:</strong>
                    At this time, the In-Store Pickup feature is generally only available to large retail merchants, and can only be applied to multi-quantity, fixed-price listings. </span>
	 */

	/**
	 * Arrays
	 */
	var _Payments;
	var _Refunds;
	Object.defineProperty(this, 'Payments', {
		 get: function(){
			 return _Payments;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PaymentInformationType){ 
					_Payments = value; 
				}else{
					console.log('Payments expects type PaymentInformationType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Refunds', {
		 get: function(){
			 return _Refunds;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof RefundInformationType){ 
					_Refunds = value; 
				}else{
					console.log('Refunds expects type RefundInformationType');
				}
			}
		}
	});
	this.Payments = Payments;
	this.Refunds = Refunds;
}
PaymentsInformationType.prototype.toJSON = function(with_null) {
	var json = { 
		Payments: (this.Payments === undefined)? null : this.Payments.toJSON(),
		Refunds: (this.Refunds === undefined)? null : this.Refunds.toJSON()
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
module.exports = PaymentsInformationType;