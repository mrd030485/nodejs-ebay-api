var PaginationType = require('../../Trading/PaginationType'),
	SellingManagerSearchType = require('../../Trading/SellingManagerSearchType');

function GetSellingManagerInventoryRequestType(Sort, FolderID, Pagination, SortOrder, Search, StoreCategoryID, Filter) {

	/**
	  Documentation
	   Retrieves a paginated list containing details of a user's Selling Manager inventory. This call is subject to change without notice; the deprecation process is inapplicable to this call.
	 */

	/**
	 * Arrays
	 */
	var _Pagination;
	var _Search;
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
	Object.defineProperty(this, 'Search', {
		 get: function(){
			 return _Search;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SellingManagerSearchType){ 
					_Search = value; 
				}else{
					console.log('Search expects type SellingManagerSearchType');
				}
			}
		}
	});
	this.Sort = Sort;
	this.FolderID = FolderID;
	this.Pagination = Pagination;
	this.SortOrder = SortOrder;
	this.Search = Search;
	this.StoreCategoryID = StoreCategoryID;
	this.Filter = Filter;
}
GetSellingManagerInventoryRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		Sort: (this.Sort === undefined)? null : this.Sort,
		FolderID: (this.FolderID === undefined)? null : this.FolderID,
		Pagination: (this.Pagination === undefined)? null : this.Pagination.toJSON(),
		SortOrder: (this.SortOrder === undefined)? null : this.SortOrder,
		Search: (this.Search === undefined)? null : this.Search.toJSON(),
		StoreCategoryID: (this.StoreCategoryID === undefined)? null : this.StoreCategoryID,
		Filter: (this.Filter === undefined)? null : this.Filter
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
module.exports = GetSellingManagerInventoryRequestType;