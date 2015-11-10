var SortOrderCodeType = require('./SortOrderCodeType');

function MyeBaySelectionType(Include, IncludeItemCount, IncludeFavoriteSearcheCount, IncludeFavoriteSellerCount, Sort, MaxResults, UserDefinedListName, IncludeListContents) {

	/**
	  Documentation
	   
                Specifies how to return the result list for My eBay features such as saved searches, favorite sellers, and second chance offers.
            
	 */

	/**
	 * Arrays
	 */
	var _Sort;
	Object.defineProperty(this, 'Sort', {
		 get: function(){
			 return _Sort;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SortOrderCodeType){ 
					_Sort = value; 
				}else{
					console.log('Sort expects type SortOrderCodeType');
				}
			}
		}
	});
	this.Include = Include;
	this.IncludeItemCount = IncludeItemCount;
	this.IncludeFavoriteSearcheCount = IncludeFavoriteSearcheCount;
	this.IncludeFavoriteSellerCount = IncludeFavoriteSellerCount;
	this.Sort = Sort;
	this.MaxResults = MaxResults;
	this.UserDefinedListName = UserDefinedListName;
	this.IncludeListContents = IncludeListContents;
}
MyeBaySelectionType.prototype.toJSON = function(with_null) {
	var json = { 
		Include: (this.Include === undefined)? null : this.Include,
		IncludeItemCount: (this.IncludeItemCount === undefined)? null : this.IncludeItemCount,
		IncludeFavoriteSearcheCount: (this.IncludeFavoriteSearcheCount === undefined)? null : this.IncludeFavoriteSearcheCount,
		IncludeFavoriteSellerCount: (this.IncludeFavoriteSellerCount === undefined)? null : this.IncludeFavoriteSellerCount,
		Sort: (this.Sort === undefined)? null : this.Sort.toJSON(),
		MaxResults: (this.MaxResults === undefined)? null : this.MaxResults,
		UserDefinedListName: (this.UserDefinedListName === undefined)? null : this.UserDefinedListName,
		IncludeListContents: (this.IncludeListContents === undefined)? null : this.IncludeListContents
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
module.exports = MyeBaySelectionType;