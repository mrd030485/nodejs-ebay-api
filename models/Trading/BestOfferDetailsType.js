var AmountType = require('./AmountType');

function BestOfferDetailsType(BestOfferCount, BestOfferEnabled, BestOffer, BestOfferStatus, BestOfferType, NewBestOffer) {

	/**
	  Documentation
	   Type defining the <b>BestOfferDetails</b> container, which consists of Best Offer details associated with an item. The <b>BestOfferEnabled</b> field in this container is used by Add/Revise/Relist calls to enable
                    the Best Offer feature on a listing. Note that the Best Offer feature is not available for auction listings.
	 */

	/**
	 * Arrays
	 */
	var _BestOffer;
	Object.defineProperty(this, 'BestOffer', {
		 get: function(){
			 return _BestOffer;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AmountType){ 
					_BestOffer = value; 
				}else{
					console.log('BestOffer expects type AmountType');
				}
			}
		}
	});
	this.BestOfferCount = BestOfferCount;
	this.BestOfferEnabled = BestOfferEnabled;
	this.BestOffer = BestOffer;
	this.BestOfferStatus = BestOfferStatus;
	this.BestOfferType = BestOfferType;
	this.NewBestOffer = NewBestOffer;
}
BestOfferDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		BestOfferCount: (this.BestOfferCount === undefined)? null : this.BestOfferCount,
		BestOfferEnabled: (this.BestOfferEnabled === undefined)? null : this.BestOfferEnabled,
		BestOffer: (this.BestOffer === undefined)? null : this.BestOffer.toJSON(),
		BestOfferStatus: (this.BestOfferStatus === undefined)? null : this.BestOfferStatus,
		BestOfferType: (this.BestOfferType === undefined)? null : this.BestOfferType,
		NewBestOffer: (this.NewBestOffer === undefined)? null : this.NewBestOffer
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
module.exports = BestOfferDetailsType;