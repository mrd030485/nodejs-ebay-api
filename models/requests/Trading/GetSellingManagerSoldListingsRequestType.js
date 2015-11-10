var SellingManagerSearchType = require('../../Trading/SellingManagerSearchType'),
	PaginationType = require('../../Trading/PaginationType'),
	TimeRangeType = require('../../Trading/TimeRangeType');

function GetSellingManagerSoldListingsRequestType(Search, StoreCategoryID, Filter, Archived, Sort, SortOrder, Pagination, SaleDateRange) {

	/**
	  Documentation
	   Returns a Selling Manager user's sold listings. <br><br> This call is subject to change without notice; the deprecation process is inapplicable to this call.
	 */

	/**
	 * Arrays
	 */
	var _Search;
	var _Pagination;
	var _SaleDateRange;
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
	Object.defineProperty(this, 'SaleDateRange', {
		 get: function(){
			 return _SaleDateRange;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof TimeRangeType){ 
					_SaleDateRange = value; 
				}else{
					console.log('SaleDateRange expects type TimeRangeType');
				}
			}
		}
	});
	this.Search = Search;
	this.StoreCategoryID = StoreCategoryID;
	this.Filter = Filter;
	this.Archived = Archived;
	this.Sort = Sort;
	this.SortOrder = SortOrder;
	this.Pagination = Pagination;
	this.SaleDateRange = SaleDateRange;
}
GetSellingManagerSoldListingsRequestType.prototype.toJSON = function(with_null) {
	var json = { 
		Search: (this.Search === undefined)? null : this.Search.toJSON(),
		StoreCategoryID: (this.StoreCategoryID === undefined)? null : this.StoreCategoryID,
		Filter: (this.Filter === undefined)? null : this.Filter,
		Archived: (this.Archived === undefined)? null : this.Archived,
		Sort: (this.Sort === undefined)? null : this.Sort,
		SortOrder: (this.SortOrder === undefined)? null : this.SortOrder,
		Pagination: (this.Pagination === undefined)? null : this.Pagination.toJSON(),
		SaleDateRange: (this.SaleDateRange === undefined)? null : this.SaleDateRange.toJSON()
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
module.exports = GetSellingManagerSoldListingsRequestType;