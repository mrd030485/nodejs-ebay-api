function SellerAccountDashboardType(Status, Alert) {

	/**
	  Documentation
	   Type defining the <b>SellerAccount</b> container returned in the <b>GetSellerDashboard</b> response.
	 */

	/**
	 * Arrays
	 *	Alert: SellerDashboardAlertType
	 */
	this.Status = Status;
	this.Alert = Alert;
}
SellerAccountDashboardType.prototype.toJSON = function(with_null) {
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
module.exports = SellerAccountDashboardType;