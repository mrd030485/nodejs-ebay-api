var DisputeIDType = require('../../Trading/DisputeIDType');

function SellerReverseDisputeRequestType(DisputeID, DisputeResolutionReason) {

	/**
	  Documentation
	   Enables a seller to "reverse" an Unpaid Item dispute that has been closed, for example, if buyer and seller reach an agreement. The seller's Final Value Fee credit and the buyer's strike are both reversed, if applicable. The dispute might
                    have resulted in a strike to the buyer and a Final Value Fee credit to the seller. A buyer and seller sometimes come to agreement after a dispute has been closed. In particular, the seller might discover that the buyer actually paid,
                    or the buyer might agree to pay the seller's fees in exchange for having the strike removed. <br><br> A dispute can only be reversed if it was closed with <b>DisputeActivity</b> set to <b>SellerEndCommunication</b>,
                    <b>CameToAgreementNeedFVFCredit</b>, or <b>MutualAgreementOrNoBuyerResponse</b>.
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
	this.DisputeResolutionReason = DisputeResolutionReason;
}
SellerReverseDisputeRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		DisputeID: (this.DisputeID === undefined)? null : this.DisputeID.toJSON(),
		DisputeResolutionReason: (this.DisputeResolutionReason === undefined)? null : this.DisputeResolutionReason
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
module.exports = SellerReverseDisputeRequestType;