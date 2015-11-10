var SellingManagerSearchTypeCodeType = require('./SellingManagerSearchTypeCodeType');

function SellingManagerSearchType(SearchType, SearchValue) {

	/**
	  Documentation
	   
                For searches of Selling Manager listings, specifies search type, such as ProductID or BuyerUserID, and search value.
            
	 */

	/**
	 * Arrays
	 */
	var _SearchType;
	Object.defineProperty(this, 'SearchType', {
		 get: function(){
			 return _SearchType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerSearchTypeCodeType){ 
					_SearchType = value; 
				}else{
					console.log('SearchType expects type SellingManagerSearchTypeCodeType');
				}
			}
		}
	});
	this.SearchType = SearchType;
	this.SearchValue = SearchValue;
}
SellingManagerSearchType.prototype.toJSON = function(with_null) {
	var json = { 
		SearchType: (this.SearchType === undefined)? null : this.SearchType.toJSON(),
		SearchValue: (this.SearchValue === undefined)? null : this.SearchValue
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
module.exports = SellingManagerSearchType;