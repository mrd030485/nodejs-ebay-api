var SiteCodeType = require('./SiteCodeType');

function VeROSiteDetailType(Site, ReasonCodeDetail) {

	/**
	  Documentation
	   
                Container for reason code details for a given site.
            
	 */

	/**
	 * Arrays
	 *	ReasonCodeDetail: ReasonCodeDetailType
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
	this.ReasonCodeDetail = ReasonCodeDetail;
}
VeROSiteDetailType.prototype.toJSON = function(with_null) {
	var json = { 
		Site: (this.Site === undefined)? null : this.Site.toJSON(),
		ReasonCodeDetail: (this.ReasonCodeDetail === undefined)? null : this.ReasonCodeDetail
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
module.exports = VeROSiteDetailType;