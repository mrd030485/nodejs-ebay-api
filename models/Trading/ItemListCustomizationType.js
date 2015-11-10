var PaginationType = require('./PaginationType');

function ItemListCustomizationType(Include, ListingType, Sort, DurationInDays, IncludeNotes, Pagination, OrderStatusFilter) {

	/**
	  Documentation
	   Defines how a list of items should be returned.
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
	this.Include = Include;
	this.ListingType = ListingType;
	this.Sort = Sort;
	this.DurationInDays = DurationInDays;
	this.IncludeNotes = IncludeNotes;
	this.Pagination = Pagination;
	this.OrderStatusFilter = OrderStatusFilter;
}
ItemListCustomizationType.prototype.toJSON = function(with_null) {
	var json = { 
		Include: (this.Include === undefined)? null : this.Include,
		ListingType: (this.ListingType === undefined)? null : this.ListingType,
		Sort: (this.Sort === undefined)? null : this.Sort,
		DurationInDays: (this.DurationInDays === undefined)? null : this.DurationInDays,
		IncludeNotes: (this.IncludeNotes === undefined)? null : this.IncludeNotes,
		Pagination: (this.Pagination === undefined)? null : this.Pagination.toJSON(),
		OrderStatusFilter: (this.OrderStatusFilter === undefined)? null : this.OrderStatusFilter
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
module.exports = ItemListCustomizationType;