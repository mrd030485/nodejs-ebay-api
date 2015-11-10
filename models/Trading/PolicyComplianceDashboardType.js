function PolicyComplianceDashboardType(Status, Alert) {

	/**
	  Documentation
	   This type has been deprecated, as the <b>PolicyCompliance</b> container is no longer returned in <b>GetSellerDashboard</b>. 
	 */

	/**
	 * Arrays
	 *	Alert: SellerDashboardAlertType
	 */
	this.Status = Status;
	this.Alert = Alert;
}
PolicyComplianceDashboardType.prototype.toJSON = function(with_null) {
	var json = { 
		Status: (this.Status === undefined)? null : this.Status,
		Alert: (this.Alert === undefined)? null : this.Alert
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
module.exports = PolicyComplianceDashboardType;