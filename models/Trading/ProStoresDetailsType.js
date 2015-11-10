var EnableCodeType = require('./EnableCodeType');

function ProStoresDetailsType(SellerThirdPartyUsername, StoreName, Status) {

	/**
	  Documentation
	   
                This type is deprecated along with ProStores.
            
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
				if(value instanceof EnableCodeType){ 
					_Status = value; 
				}else{
					console.log('Status expects type EnableCodeType');
				}
			}
		}
	});
	this.SellerThirdPartyUsername = SellerThirdPartyUsername;
	this.StoreName = StoreName;
	this.Status = Status;
}
ProStoresDetailsType.prototype.toJSON = function(with_null) {
	var json = { 
		SellerThirdPartyUsername: (this.SellerThirdPartyUsername === undefined)? null : this.SellerThirdPartyUsername,
		StoreName: (this.StoreName === undefined)? null : this.StoreName,
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
module.exports = ProStoresDetailsType;