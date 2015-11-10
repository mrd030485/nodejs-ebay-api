var StoreCustomPageType = require('../../Trading/StoreCustomPageType');

function SetStoreCustomPageRequestType(CustomPage) {

	/**
	  Documentation
	   Creates or updates a custom page on a user's eBay Store.
	 */

	/**
	 * Arrays
	 */
	var _CustomPage;
	Object.defineProperty(this, 'CustomPage', {
		 get: function(){
			 return _CustomPage;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof StoreCustomPageType){ 
					_CustomPage = value; 
				}else{
					console.log('CustomPage expects type StoreCustomPageType');
				}
			}
		}
	});
	this.CustomPage = CustomPage;
}
SetStoreCustomPageRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		CustomPage: (this.CustomPage === undefined)? null : this.CustomPage.toJSON()
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
module.exports = SetStoreCustomPageRequestType;