var SellerLevelCodeType = require('./SellerLevelCodeType');

function PowerSellerDashboardType(Level, Alert) {

	/**
	  Documentation
	   
                Type defining the <b>PowerSellerStatus</b> container returned in the <b>GetSellerDashboard</b> response. The <b>PowerSellerStatus</b> container is only returned if the seller making the call is a Power Seller.
            
	 */

	/**
	 * Arrays
	 *	Alert: SellerDashboardAlertType
	 */
	var _Level;
	Object.defineProperty(this, 'Level', {
		 get: function(){
			 return _Level;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellerLevelCodeType){ 
					_Level = value; 
				}else{
					console.log('Level expects type SellerLevelCodeType');
				}
			}
		}
	});
	this.Level = Level;
	this.Alert = Alert;
}
PowerSellerDashboardType.prototype.toJSON = function(with_null) {
	var json = { 
		Level: (this.Level === undefined)? null : this.Level.toJSON(),
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