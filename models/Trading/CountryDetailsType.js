var CountryCodeType = require('./CountryCodeType');

function CountryDetailsType(Country, Description, DetailVersion, UpdateTime) {

	/**
	  Documentation
	   
                Details about a specific country.
            
	 */

	/**
	 * Arrays
	 */
	var _Country;
	Object.defineProperty(this, 'Country', {
		 get: function(){
			 return _Country;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CountryCodeType){ 
					_Country = value; 
				}else{
					console.log('Country expects type CountryCodeType');
				}
			}
		}
	});
	this.Country = Country;
	this.Description = Description;
	this.DetailVersion = DetailVersion;
	this.UpdateTime = UpdateTime;
}
CountryDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		Country: (this.Country === undefined)? null : this.Country.toJSON(),
		Description: (this.Description === undefined)? null : this.Description,
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
module.exports = CountryDetailsType;