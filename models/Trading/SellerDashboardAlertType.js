function SellerDashboardAlertType(Severity, Text) {

	/**
	  Documentation
	   A message to help the you understand your status as a seller (PowerSeller status, policy compliance status, etc.).
	 */

	/**
	 * Arrays
	 */
	this.Severity = Severity;
	this.Text = Text;
}
SellerDashboardAlertType.prototype.toJSON = function(with_null) {
	var json = { 
		Severity: (this.Severity === undefined)? null : this.Severity,
		Text: (this.Text === undefined)? null : this.Text
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
module.exports = SellerDashboardAlertType;