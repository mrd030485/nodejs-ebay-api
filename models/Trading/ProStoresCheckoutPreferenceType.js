var ProStoresDetailsType = require('./ProStoresDetailsType');

function ProStoresCheckoutPreferenceType(CheckoutRedirectProStores, ProStoresDetails) {

	/**
	  Documentation
	   
                <b>This type is deprecated because 3rd Party Checkout was deprecated.</b>
            
	 */

	/**
	 * Arrays
	 */
	var _ProStoresDetails;
	Object.defineProperty(this, 'ProStoresDetails', {
		 get: function(){
			 return _ProStoresDetails;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ProStoresDetailsType){ 
					_ProStoresDetails = value; 
				}else{
					console.log('ProStoresDetails expects type ProStoresDetailsType');
				}
			}
		}
	});
	this.CheckoutRedirectProStores = CheckoutRedirectProStores;
	this.ProStoresDetails = ProStoresDetails;
}
ProStoresCheckoutPreferenceType.prototype.toJSON = function(with_null) {
	var json = { 
		CheckoutRedirectProStores: (this.CheckoutRedirectProStores === undefined)? null : this.CheckoutRedirectProStores,
		ProStoresDetails: (this.ProStoresDetails === undefined)? null : this.ProStoresDetails.toJSON()
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
module.exports = ProStoresCheckoutPreferenceType;