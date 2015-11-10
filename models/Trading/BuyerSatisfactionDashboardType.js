var BuyerSatisfactionStatusCodeType = require('./BuyerSatisfactionStatusCodeType');

function BuyerSatisfactionDashboardType(Status, Alert) {

	/**
	  Documentation
	   
                Type defining the <b>BuyerSatisfaction</b> container returned in the <b>GetSellerDashboard</b> response. The <b>BuyerSatisfaction</b> container consists of the seller's buyer satisfaction rating, as well as any alerts
                related to customer service.
            
	 */

	/**
	 * Arrays
	 *	Alert: SellerDashboardAlertType
	 */
	var _Status;
	Object.defineProperty(this, 'Status', {
		 get: function(){
			 return _Status;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof BuyerSatisfactionStatusCodeType){ 
					_Status = value; 
				}else{
					console.log('Status expects type BuyerSatisfactionStatusCodeType');
				}
			}
		}
	});
	this.Status = Status;
	this.Alert = Alert;
}
BuyerSatisfactionDashboardType.prototype.toJSON = function(with_null) {
	var json = { 
		Status: (this.Status === undefined)? null : this.Status.toJSON(),
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
module.exports = BuyerSatisfactionDashboardType;