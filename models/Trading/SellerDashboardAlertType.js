var SellerDashboardAlertSeverityCodeType = require('./SellerDashboardAlertSeverityCodeType');

function SellerDashboardAlertType(Severity, Text) {

	/**
	  Documentation
	   
                A message to help the you understand your status as a seller (PowerSeller status, policy compliance status, etc.).
            
	 */

	/**
	 * Arrays
	 */
	var _Severity;
	Object.defineProperty(this, 'Severity', {
		 get: function(){
			 return _Severity;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellerDashboardAlertSeverityCodeType){ 
					_Severity = value; 
				}else{
					console.log('Severity expects type SellerDashboardAlertSeverityCodeType');
				}
			}
		}
	});
	this.Severity = Severity;
	this.Text = Text;
}
SellerDashboardAlertType.prototype.toJSON = function(with_null) {
	var json = { 
		Severity: (this.Severity === undefined)? null : this.Severity.toJSON(),
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