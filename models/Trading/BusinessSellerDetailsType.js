var AddressType = require('./AddressType'),
	VATDetailsType = require('./VATDetailsType');

function BusinessSellerDetailsType(Address, Fax, Email, AdditionalContactInformation, TradeRegistrationNumber, LegalInvoice, TermsAndConditions, VATDetails) {

	/**
	  Documentation
	   Type used by the <b>BusinessSellerDetails</b> container, which is returned in an <b>Item</b> node if the item's seller is registered on eBay as a Business Seller.
	 */

	/**
	 * Arrays
	 */
	var _Address;
	var _VATDetails;
	Object.defineProperty(this, 'Address', {
		 get: function(){
			 return _Address;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AddressType){ 
					_Address = value; 
				}else{
					console.log('Address expects type AddressType');
				}
			}
		}
	});
	Object.defineProperty(this, 'VATDetails', {
		 get: function(){
			 return _VATDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof VATDetailsType){ 
					_VATDetails = value; 
				}else{
					console.log('VATDetails expects type VATDetailsType');
				}
			}
		}
	});
	this.Address = Address;
	this.Fax = Fax;
	this.Email = Email;
	this.AdditionalContactInformation = AdditionalContactInformation;
	this.TradeRegistrationNumber = TradeRegistrationNumber;
	this.LegalInvoice = LegalInvoice;
	this.TermsAndConditions = TermsAndConditions;
	this.VATDetails = VATDetails;
}
BusinessSellerDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		Address: (this.Address === undefined)? null : this.Address.toJSON(),
		Fax: (this.Fax === undefined)? null : this.Fax,
		Email: (this.Email === undefined)? null : this.Email,
		AdditionalContactInformation: (this.AdditionalContactInformation === undefined)? null : this.AdditionalContactInformation,
		TradeRegistrationNumber: (this.TradeRegistrationNumber === undefined)? null : this.TradeRegistrationNumber,
		LegalInvoice: (this.LegalInvoice === undefined)? null : this.LegalInvoice,
		TermsAndConditions: (this.TermsAndConditions === undefined)? null : this.TermsAndConditions,
		VATDetails: (this.VATDetails === undefined)? null : this.VATDetails.toJSON()
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
module.exports = BusinessSellerDetailsType;