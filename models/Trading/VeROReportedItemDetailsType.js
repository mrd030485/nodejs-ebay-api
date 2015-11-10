function VeROReportedItemDetailsType(ReportedItem) {

	/**
	  Documentation
	   
                Container for a list of reported items. Can contain zero, one, or multiple VeROReportedItemType objects, each of which conveys the data for one item listing.
            
	 */

	/**
	 * Arrays
	 *	ReportedItem: VeROReportedItemType
	 */
	this.ReportedItem = ReportedItem;
}
VeROReportedItemDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		ReportedItem: (this.ReportedItem === undefined)? null : this.ReportedItem
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
module.exports = VeROReportedItemDetailsType;