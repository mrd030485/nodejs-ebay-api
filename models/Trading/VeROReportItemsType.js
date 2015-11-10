function VeROReportItemsType(ReportItem) {

	/**
	  Documentation
	   
                Type defining the <b>ReportItems</b> container in the <b>VeROReportItems</b> request. The <b>ReportItems</b> container consists of an array of items which, according to the seller, are infringing upon the seller's copyright,
                trademark, or intellectual property rights (according to the seller).
            
	 */

	/**
	 * Arrays
	 *	ReportItem: VeROReportItemType
	 */
	this.ReportItem = ReportItem;
}
VeROReportItemsType.prototype.toJSON = function(with_null) {
	var json = { 
		ReportItem: (this.ReportItem === undefined)? null : this.ReportItem
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
module.exports = VeROReportItemsType;