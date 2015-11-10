function BestOfferIDType(value) {
	this.BestOfferIDType = value;
}
BestOfferIDType.prototype.toJSON = function() {
	if(this.BestOfferIDType !== null) {
		return {
			BestOfferIDType: this.BestOfferIDType
		};
	} else {
		return {};
	}
};
module.exports = BestOfferIDType;