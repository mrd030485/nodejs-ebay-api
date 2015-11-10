function SellingManagerAlertType(AlertType, SoldAlert, InventoryAlert, AutomationAlert, PaisaPayAlert, GeneralAlert, DurationInDays, Count) {

	/**
	  Documentation
	   Type defining the Alert container, which contains summary information on one type of Selling Manager alert.
	 */

	/**
	 * Arrays
	 */
	this.AlertType = AlertType;
	this.SoldAlert = SoldAlert;
	this.InventoryAlert = InventoryAlert;
	this.AutomationAlert = AutomationAlert;
	this.PaisaPayAlert = PaisaPayAlert;
	this.GeneralAlert = GeneralAlert;
	this.DurationInDays = DurationInDays;
	this.Count = Count;
}
SellingManagerAlertType.prototype.toJSON = function(with_null) {
	var json = { 
		AlertType: (this.AlertType === undefined)? null : this.AlertType,
		SoldAlert: (this.SoldAlert === undefined)? null : this.SoldAlert,
		InventoryAlert: (this.InventoryAlert === undefined)? null : this.InventoryAlert,
		AutomationAlert: (this.AutomationAlert === undefined)? null : this.AutomationAlert,
		PaisaPayAlert: (this.PaisaPayAlert === undefined)? null : this.PaisaPayAlert,
		GeneralAlert: (this.GeneralAlert === undefined)? null : this.GeneralAlert,
		DurationInDays: (this.DurationInDays === undefined)? null : this.DurationInDays,
		Count: (this.Count === undefined)? null : this.Count
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
module.exports = SellingManagerAlertType;