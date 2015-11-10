var SiteCodeType = require('./SiteCodeType');

function SiteDetailsType(Site, SiteID, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   
                Details about a specific site.
            
	 */

	/**
	 * Arrays
	 */
	var _Site;
	Object.defineProperty(this, 'Site', {
		 get: function(){
			 return _Site;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SiteCodeType){ 
					_Site = value; 
				}else{
					console.log('Site expects type SiteCodeType');
				}
			}
		}
	});
	this.Site = Site;
	this.SiteID = SiteID;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
SiteDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		Site: (this.Site === undefined)? null : this.Site.toJSON(),
		SiteID: (this.SiteID === undefined)? null : this.SiteID,
		DetailVersion: (this.DetailVersion === undefined)? null : this.DetailVersion,
		UpdateTime: (this.UpdateTime === undefined)? null : this.UpdateTime
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
module.exports = SiteDetailsType;