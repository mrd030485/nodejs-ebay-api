var decimal = require('./decimal'),
	AddressTypeCodeType = require('./AddressTypeCodeType');

function NonProfitAddressType(AddressLine1, AddressLine2, City, State, ZipCode, Latitude, Longitude, AddressType) {

	/**
	  Documentation
	   
                Type defining the <b>NonProfitAddress</b> container, which consists of the address (including latitude and longitude) of a nonprofit charity organization.
            
	 */

	/**
	 * Arrays
	 */
	var _Latitude;
	var _Longitude;
	var _AddressType;
	Object.defineProperty(this, 'Latitude', {
		 get: function(){
			 return _Latitude;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof decimal){ 
					_Latitude = value; 
				}else{
					console.log('Latitude expects type decimal');
				}
			}
		}
	});
	Object.defineProperty(this, 'Longitude', {
		 get: function(){
			 return _Longitude;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof decimal){ 
					_Longitude = value; 
				}else{
					console.log('Longitude expects type decimal');
				}
			}
		}
	});
	Object.defineProperty(this, 'AddressType', {
		 get: function(){
			 return _AddressType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AddressTypeCodeType){ 
					_AddressType = value; 
				}else{
					console.log('AddressType expects type AddressTypeCodeType');
				}
			}
		}
	});
	this.AddressLine1 = AddressLine1;
	this.AddressLine2 = AddressLine2;
	this.City = City;
	this.State = State;
	this.ZipCode = ZipCode;
	this.Latitude = Latitude;
	this.Longitude = Longitude;
	this.AddressType = AddressType;
}
NonProfitAddressType.prototype.toJSON = function(with_null) {
	var json = { 
		AddressLine1: (this.AddressLine1 === undefined)? null : this.AddressLine1,
		AddressLine2: (this.AddressLine2 === undefined)? null : this.AddressLine2,
		City: (this.City === undefined)? null : this.City,
		State: (this.State === undefined)? null : this.State,
		ZipCode: (this.ZipCode === undefined)? null : this.ZipCode,
		Latitude: (this.Latitude === undefined)? null : this.Latitude.toJSON(),
		Longitude: (this.Longitude === undefined)? null : this.Longitude.toJSON(),
		AddressType: (this.AddressType === undefined)? null : this.AddressType.toJSON()
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
module.exports = NonProfitAddressType;