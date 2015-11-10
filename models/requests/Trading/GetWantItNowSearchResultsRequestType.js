var PaginationType = require('../../Trading/PaginationType');

function GetWantItNowSearchResultsRequestType(CategoryID, Query, SearchInDescription, SearchWorldwide, Pagination) {

	/**
	  Documentation
	   Retrieves a list of active Want It Now posts that match specified keywords and/or a specific category ID. The response contains the following data: CategoryID, PostID, StartTime, ResponseCount, Site, and Title. To get the post description
                    (Description), you must use GetWantItNowPost to retrieve individual posts.
	 */

	/**
	 * Arrays
	 */
	var _Pagination;
	Object.defineProperty(this, 'Pagination', {
		 get: function(){
			 return _Pagination;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PaginationType){ 
					_Pagination = value; 
				}else{
					console.log('Pagination expects type PaginationType');
				}
			}
		}
	});
	this.CategoryID = CategoryID;
	this.Query = Query;
	this.SearchInDescription = SearchInDescription;
	this.SearchWorldwide = SearchWorldwide;
	this.Pagination = Pagination;
}
GetWantItNowSearchResultsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		CategoryID: (this.CategoryID === undefined)? null : this.CategoryID,
		Query: (this.Query === undefined)? null : this.Query,
		SearchInDescription: (this.SearchInDescription === undefined)? null : this.SearchInDescription,
		SearchWorldwide: (this.SearchWorldwide === undefined)? null : this.SearchWorldwide,
		Pagination: (this.Pagination === undefined)? null : this.Pagination.toJSON()
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
module.exports = GetWantItNowSearchResultsRequestType;