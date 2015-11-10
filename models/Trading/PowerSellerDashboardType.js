function PowerSellerDashboardType(Level, Alert) {

	/**
	  Documentation
	   Type defining the <b>PowerSellerStatus</b> container returned in the <b>GetSellerDashboard</b> response. The <b>PowerSellerStatus</b> container is only returned if the seller making the call is a Power
                    Seller.
	 */

	/**
	 * Arrays
	 *	Alert: SellerDashboardAlertType
	 */
	this.Level = Level;
	this.Alert = Alert;
}
PowerSellerDashboardType.prototype.toJSON = function(with_null) {
	var json = { 
		Level: (this.Level === undefined)? null : this.Level,
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
module.exports = PowerSellerDashboardType;