var URLTypeCodeType = require('./URLTypeCodeType');

function URLDetailsType(URLType, URL, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   
                Details about a specific eBay URL.
            
	 */

	/**
	 * Arrays
	 */
	var _URLType;
	Object.defineProperty(this, 'URLType', {
		 get: function(){
			 return _URLType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof URLTypeCodeType){ 
					_URLType = value; 
				}else{
					console.log('URLType expects type URLTypeCodeType');
				}
			}
		}
	});
	this.URLType = URLType;
	this.URL = URL;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
URLDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		URLType: (this.URLType === undefined)? null : this.URLType.toJSON(),
		URL: (this.URL === undefined)? null : this.URL,
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
module.exports = URLDetailsType;