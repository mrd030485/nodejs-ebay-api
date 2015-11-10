function CharacteristicsSetProductHistogramType(HistogramEntry) {

	/**
	  Documentation
	   
                A generic type used for histograms.
            
	 */

	/**
	 * Arrays
	 *	HistogramEntry: HistogramEntryType
	 */
	this.HistogramEntry = HistogramEntry;
}
CharacteristicsSetProductHistogramType.prototype.toJSON = function(with_null) {
	var json = { 
		HistogramEntry: (this.HistogramEntry === undefined)? null : this.HistogramEntry
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
module.exports = CharacteristicsSetProductHistogramType;