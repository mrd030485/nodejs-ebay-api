var OfferType = require('./OfferType');

function CancelOfferType(Offer, Explanation) {

	/**
	  Documentation
	   This type is not used by any Trading API call.
	 */

	/**
	 * Arrays
	 */
	var _Offer;
	Object.defineProperty(this, 'Offer', {
		 get: function(){
			 return _Offer;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof OfferType){ 
					_Offer = value; 
				}else{
					console.log('Offer expects type OfferType');
				}
			}
		}
	});
	this.Offer = Offer;
	this.Explanation = Explanation;
}
CancelOfferType.prototype.toJSON = function(with_null) {
	var json = { 
		Offer: (this.Offer === undefined)? null : this.Offer.toJSON(),
		Explanation: (this.Explanation === undefined)? null : this.Explanation
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
module.exports = CancelOfferType;