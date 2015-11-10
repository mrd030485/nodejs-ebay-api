var RequiredSellerActionArrayType = require('./RequiredSellerActionArrayType');

function PaymentHoldDetailType(ExpectedReleaseDate, RequiredSellerActionArray, NumOfReqSellerActions, PaymentHoldReason) {

	/**
	  Documentation
	   This type defines the <b>PaymentHoldDetails</b> container, which consists of information related to the payment hold on the order, including the reason why the buyer's payment for the order is being held, the expected release
                    date of the funds into the seller's account, and possible action(s) the seller can take to expedite the payout of funds into their account.
	 */

	/**
	 * Arrays
	 */
	var _RequiredSellerActionArray;
	Object.defineProperty(this, 'RequiredSellerActionArray', {
		 get: function(){
			 return _RequiredSellerActionArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof RequiredSellerActionArrayType){ 
					_RequiredSellerActionArray = value; 
				}else{
					console.log('RequiredSellerActionArray expects type RequiredSellerActionArrayType');
				}
			}
		}
	});
	this.ExpectedReleaseDate = ExpectedReleaseDate;
	this.RequiredSellerActionArray = RequiredSellerActionArray;
	this.NumOfReqSellerActions = NumOfReqSellerActions;
	this.PaymentHoldReason = PaymentHoldReason;
}
PaymentHoldDetailType.prototype.toJSON = function(with_null) {
	var json = { 
		ExpectedReleaseDate: (this.ExpectedReleaseDate === undefined)? null : this.ExpectedReleaseDate,
		RequiredSellerActionArray: (this.RequiredSellerActionArray === undefined)? null : this.RequiredSellerActionArray.toJSON(),
		NumOfReqSellerActions: (this.NumOfReqSellerActions === undefined)? null : this.NumOfReqSellerActions,
		PaymentHoldReason: (this.PaymentHoldReason === undefined)? null : this.PaymentHoldReason
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
module.exports = PaymentHoldDetailType;