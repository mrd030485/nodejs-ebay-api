var SiteIDFilterCodeType = require('./SiteIDFilterCodeType');

function SiteLocationType(SiteID) {

	/**
	  Documentation
	   
                Contains the data that defines a site-based filter (used when searching for items and filtering the search result set).
            
	 */

	/**
	 * Arrays
	 */
	var _SiteID;
	Object.defineProperty(this, 'SiteID', {
		 get: function(){
			 return _SiteID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SiteIDFilterCodeType){ 
					_SiteID = value; 
				}else{
					console.log('SiteID expects type SiteIDFilterCodeType');
				}
			}
		}
	});
	this.SiteID = SiteID;
}
SiteLocationType.prototype.toJSON = function(with_null) {
	var json = { 
		SiteID: (this.SiteID === undefined)? null : this.SiteID.toJSON()
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
module.exports = SiteLocationType;