var CountryCodeType = require('./CountryCodeType'),
	AddressOwnerCodeType = require('./AddressOwnerCodeType'),
	AddressStatusCodeType = require('./AddressStatusCodeType'),
	AddressRecordTypeCodeType = require('./AddressRecordTypeCodeType'),
	AddressUsageCodeType = require('./AddressUsageCodeType');

function AddressType(Name, Street, Street1, Street2, CityName, County, StateOrProvince, Country, CountryName, Phone, PhoneCountryCode, PhoneCountryPrefix, PhoneAreaOrCityCode, PhoneLocalNumber, Phone2CountryCode, Phone2CountryPrefix, Phone2AreaOrCityCode, Phone2LocalNumber, PostalCode, AddressID, AddressOwner, AddressStatus, ExternalAddressID, InternationalName, InternationalStateAndCity, InternationalStreet, CompanyName, AddressRecordType, FirstName, LastName, Phone2, AddressUsage, ReferenceID, AddressAttribute) {

	/**
	  Documentation
	   
                Contains the data for an eBay user's address. This is the base type for a number of user addresses, including seller payment address, buyer shipping address and buyer and seller registration address.
            
	 */

	/**
	 * Arrays
	 *	AddressAttribute: AddressAttributeType
	 */
	var _Country;
	var _PhoneCountryCode;
	var _Phone2CountryCode;
	var _AddressOwner;
	var _AddressStatus;
	var _AddressRecordType;
	var _AddressUsage;
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
	Object.defineProperty(this, 'PhoneCountryCode', {
		 get: function(){
			 return _PhoneCountryCode;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CountryCodeType){ 
					_PhoneCountryCode = value; 
				}else{
					console.log('PhoneCountryCode expects type CountryCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'Phone2CountryCode', {
		 get: function(){
			 return _Phone2CountryCode;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CountryCodeType){ 
					_Phone2CountryCode = value; 
				}else{
					console.log('Phone2CountryCode expects type CountryCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'AddressOwner', {
		 get: function(){
			 return _AddressOwner;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AddressOwnerCodeType){ 
					_AddressOwner = value; 
				}else{
					console.log('AddressOwner expects type AddressOwnerCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'AddressStatus', {
		 get: function(){
			 return _AddressStatus;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AddressStatusCodeType){ 
					_AddressStatus = value; 
				}else{
					console.log('AddressStatus expects type AddressStatusCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'AddressRecordType', {
		 get: function(){
			 return _AddressRecordType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AddressRecordTypeCodeType){ 
					_AddressRecordType = value; 
				}else{
					console.log('AddressRecordType expects type AddressRecordTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'AddressUsage', {
		 get: function(){
			 return _AddressUsage;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AddressUsageCodeType){ 
					_AddressUsage = value; 
				}else{
					console.log('AddressUsage expects type AddressUsageCodeType');
				}
			}
		}
	});
	this.Name = Name;
	this.Street = Street;
	this.Street1 = Street1;
	this.Street2 = Street2;
	this.CityName = CityName;
	this.County = County;
	this.StateOrProvince = StateOrProvince;
	this.Country = Country;
	this.CountryName = CountryName;
	this.Phone = Phone;
	this.PhoneCountryCode = PhoneCountryCode;
	this.PhoneCountryPrefix = PhoneCountryPrefix;
	this.PhoneAreaOrCityCode = PhoneAreaOrCityCode;
	this.PhoneLocalNumber = PhoneLocalNumber;
	this.Phone2CountryCode = Phone2CountryCode;
	this.Phone2CountryPrefix = Phone2CountryPrefix;
	this.Phone2AreaOrCityCode = Phone2AreaOrCityCode;
	this.Phone2LocalNumber = Phone2LocalNumber;
	this.PostalCode = PostalCode;
	this.AddressID = AddressID;
	this.AddressOwner = AddressOwner;
	this.AddressStatus = AddressStatus;
	this.ExternalAddressID = ExternalAddressID;
	this.InternationalName = InternationalName;
	this.InternationalStateAndCity = InternationalStateAndCity;
	this.InternationalStreet = InternationalStreet;
	this.CompanyName = CompanyName;
	this.AddressRecordType = AddressRecordType;
	this.FirstName = FirstName;
	this.LastName = LastName;
	this.Phone2 = Phone2;
	this.AddressUsage = AddressUsage;
	this.ReferenceID = ReferenceID;
	this.AddressAttribute = AddressAttribute;
}
AddressType.prototype.toJSON = function(with_null) {
	var json = { 
		Name: (this.Name === undefined)? null : this.Name,
		Street: (this.Street === undefined)? null : this.Street,
		Street1: (this.Street1 === undefined)? null : this.Street1,
		Street2: (this.Street2 === undefined)? null : this.Street2,
		CityName: (this.CityName === undefined)? null : this.CityName,
		County: (this.County === undefined)? null : this.County,
		StateOrProvince: (this.StateOrProvince === undefined)? null : this.StateOrProvince,
		Country: (this.Country === undefined)? null : this.Country.toJSON(),
		CountryName: (this.CountryName === undefined)? null : this.CountryName,
		Phone: (this.Phone === undefined)? null : this.Phone,
		PhoneCountryCode: (this.PhoneCountryCode === undefined)? null : this.PhoneCountryCode.toJSON(),
		PhoneCountryPrefix: (this.PhoneCountryPrefix === undefined)? null : this.PhoneCountryPrefix,
		PhoneAreaOrCityCode: (this.PhoneAreaOrCityCode === undefined)? null : this.PhoneAreaOrCityCode,
		PhoneLocalNumber: (this.PhoneLocalNumber === undefined)? null : this.PhoneLocalNumber,
		Phone2CountryCode: (this.Phone2CountryCode === undefined)? null : this.Phone2CountryCode.toJSON(),
		Phone2CountryPrefix: (this.Phone2CountryPrefix === undefined)? null : this.Phone2CountryPrefix,
		Phone2AreaOrCityCode: (this.Phone2AreaOrCityCode === undefined)? null : this.Phone2AreaOrCityCode,
		Phone2LocalNumber: (this.Phone2LocalNumber === undefined)? null : this.Phone2LocalNumber,
		PostalCode: (this.PostalCode === undefined)? null : this.PostalCode,
		AddressID: (this.AddressID === undefined)? null : this.AddressID,
		AddressOwner: (this.AddressOwner === undefined)? null : this.AddressOwner.toJSON(),
		AddressStatus: (this.AddressStatus === undefined)? null : this.AddressStatus.toJSON(),
		ExternalAddressID: (this.ExternalAddressID === undefined)? null : this.ExternalAddressID,
		InternationalName: (this.InternationalName === undefined)? null : this.InternationalName,
		InternationalStateAndCity: (this.InternationalStateAndCity === undefined)? null : this.InternationalStateAndCity,
		InternationalStreet: (this.InternationalStreet === undefined)? null : this.InternationalStreet,
		CompanyName: (this.CompanyName === undefined)? null : this.CompanyName,
		AddressRecordType: (this.AddressRecordType === undefined)? null : this.AddressRecordType.toJSON(),
		FirstName: (this.FirstName === undefined)? null : this.FirstName,
		LastName: (this.LastName === undefined)? null : this.LastName,
		Phone2: (this.Phone2 === undefined)? null : this.Phone2,
		AddressUsage: (this.AddressUsage === undefined)? null : this.AddressUsage.toJSON(),
		ReferenceID: (this.ReferenceID === undefined)? null : this.ReferenceID,
		AddressAttribute: (this.AddressAttribute === undefined)? null : this.AddressAttribute
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
module.exports = AddressType;