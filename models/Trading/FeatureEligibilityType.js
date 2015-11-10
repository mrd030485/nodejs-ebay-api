function FeatureEligibilityType(QualifiesForBuyItNow, QualifiesForBuyItNowMultiple, QualifiedForFixedPriceOneDayDuration, QualifiesForVariations, QualifiedForAuctionOneDayDuration) {

	/**
	  Documentation
	   Indicates whether the seller making the request can list with certain features. A seller's eligibility is determined by their feedback rating.
	 */

	/**
	 * Arrays
	 */
	this.QualifiesForBuyItNow = QualifiesForBuyItNow;
	this.QualifiesForBuyItNowMultiple = QualifiesForBuyItNowMultiple;
	this.QualifiedForFixedPriceOneDayDuration = QualifiedForFixedPriceOneDayDuration;
	this.QualifiesForVariations = QualifiesForVariations;
	this.QualifiedForAuctionOneDayDuration = QualifiedForAuctionOneDayDuration;
}
FeatureEligibilityType.prototype.toJSON = function(with_null) {
	var json = { 
		QualifiesForBuyItNow: (this.QualifiesForBuyItNow === undefined)? null : this.QualifiesForBuyItNow,
		QualifiesForBuyItNowMultiple: (this.QualifiesForBuyItNowMultiple === undefined)? null : this.QualifiesForBuyItNowMultiple,
		QualifiedForFixedPriceOneDayDuration: (this.QualifiedForFixedPriceOneDayDuration === undefined)? null : this.QualifiedForFixedPriceOneDayDuration,
		QualifiesForVariations: (this.QualifiesForVariations === undefined)? null : this.QualifiesForVariations,
		QualifiedForAuctionOneDayDuration: (this.QualifiedForAuctionOneDayDuration === undefined)? null : this.QualifiedForAuctionOneDayDuration
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
module.exports = FeatureEligibilityType;