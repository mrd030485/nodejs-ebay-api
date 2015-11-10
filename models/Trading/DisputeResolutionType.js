function DisputeResolutionType(DisputeResolutionRecordType, DisputeResolutionReason, ResolutionTime) {

	/**
	  Documentation
	   Contains all information about a dispute resolution. A dispute can have a resolution even if the seller does not receive payment. The resolution can have various results, including a Final Value Fee credit to the seller or a strike to
                    the buyer.
                
	 */

	/**
	 * Arrays
	 */
	this.DisputeResolutionRecordType = DisputeResolutionRecordType;
	this.DisputeResolutionReason = DisputeResolutionReason;
	this.ResolutionTime = ResolutionTime;
}
DisputeResolutionType.prototype.toJSON = function(with_null) {
	var json = { 
		DisputeResolutionRecordType: (this.DisputeResolutionRecordType === undefined)? null : this.DisputeResolutionRecordType,
		DisputeResolutionReason: (this.DisputeResolutionReason === undefined)? null : this.DisputeResolutionReason,
		ResolutionTime: (this.ResolutionTime === undefined)? null : this.ResolutionTime
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
module.exports = DisputeResolutionType;