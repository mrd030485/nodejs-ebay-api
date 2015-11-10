var SearchStandingStatusCodeType = require('./SearchStandingStatusCodeType');

function SearchStandingDashboardType(Status) {

	/**
	  Documentation
	   
                Provides information about the visibility level you've earned for your eBay listings. When you have a better search standing, your listings may receive higher placement in Best Match search results.
            
	 */

	/**
	 * Arrays
	 */
	var _Status;
	Object.defineProperty(this, 'Status', {
		 get: function(){
			 return _Status;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SearchStandingStatusCodeType){ 
					_Status = value; 
				}else{
					console.log('Status expects type SearchStandingStatusCodeType');
				}
			}
		}
	});
	this.Status = Status;
}
SearchStandingDashboardType.prototype.toJSON = function(with_null) {
	var json = { 
		Status: (this.Status === undefined)? null : this.Status.toJSON()
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
module.exports = SearchStandingDashboardType;