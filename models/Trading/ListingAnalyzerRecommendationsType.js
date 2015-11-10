var ListingTipArrayType = require('./ListingTipArrayType');

function ListingAnalyzerRecommendationsType(ListingTipArray) {

	/**
	  Documentation
	   
                Contains results returned from the Listing Analyzer recommendation engine.
            
	 */

	/**
	 * Arrays
	 */
	var _ListingTipArray;
	Object.defineProperty(this, 'ListingTipArray', {
		 get: function(){
			 return _ListingTipArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ListingTipArrayType){ 
					_ListingTipArray = value; 
				}else{
					console.log('ListingTipArray expects type ListingTipArrayType');
				}
			}
		}
	});
	this.ListingTipArray = ListingTipArray;
}
ListingAnalyzerRecommendationsType.prototype.toJSON = function(with_null) {
	var json = { 
		ListingTipArray: (this.ListingTipArray === undefined)? null : this.ListingTipArray.toJSON()
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
module.exports = ListingAnalyzerRecommendationsType;