var PerformanceStatusCodeType = require('./PerformanceStatusCodeType'),
	SellerDashboardAlertType = require('./SellerDashboardAlertType');

function PerformanceDashboardType(Site, Status, Alert) {

	/**
	  Documentation
	   
                Type defining the <b>Performance</b> container returned in the <b>GetSellerDashboard</b> response. The <b>Performance</b> container consists of the seller's overall selling performance rating on all eBay sites on which
                the seller is sellling, as well as any alerts related to performance.
            
	 */

	/**
	 * Arrays
	 *	Site: SiteCodeType
	 */
	var _Status;
	var _Alert;
	Object.defineProperty(this, 'Status', {
		 get: function(){
			 return _Status;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PerformanceStatusCodeType){ 
					_Status = value; 
				}else{
					console.log('Status expects type PerformanceStatusCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Alert', {
		 get: function(){
			 return _Alert;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellerDashboardAlertType){ 
					_Alert = value; 
				}else{
					console.log('Alert expects type SellerDashboardAlertType');
				}
			}
		}
	});
	this.Site = Site;
	this.Status = Status;
	this.Alert = Alert;
}
PerformanceDashboardType.prototype.toJSON = function(with_null) {
	var json = { 
		Site: (this.Site === undefined)? null : this.Site,
		Status: (this.Status === undefined)? null : this.Status.toJSON(),
		Alert: (this.Alert === undefined)? null : this.Alert.toJSON()
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
module.exports = PerformanceDashboardType;