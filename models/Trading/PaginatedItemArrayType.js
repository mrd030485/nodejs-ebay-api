var ItemArrayType = require('./ItemArrayType'),
	PaginationResultType = require('./PaginationResultType');

function PaginatedItemArrayType(ItemArray, PaginationResult) {

	/**
	  Documentation
	   
                Contains a paginated list of items.
            
	 */

	/**
	 * Arrays
	 */
	var _ItemArray;
	var _PaginationResult;
	Object.defineProperty(this, 'ItemArray', {
		 get: function(){
			 return _ItemArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemArrayType){ 
					_ItemArray = value; 
				}else{
					console.log('ItemArray expects type ItemArrayType');
				}
			}
		}
	});
	Object.defineProperty(this, 'PaginationResult', {
		 get: function(){
			 return _PaginationResult;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof PaginationResultType){ 
					_PaginationResult = value; 
				}else{
					console.log('PaginationResult expects type PaginationResultType');
				}
			}
		}
	});
	this.ItemArray = ItemArray;
	this.PaginationResult = PaginationResult;
}
PaginatedItemArrayType.prototype.toJSON = function(with_null) {
	var json = { 
		ItemArray: (this.ItemArray === undefined)? null : this.ItemArray.toJSON(),
		PaginationResult: (this.PaginationResult === undefined)? null : this.PaginationResult.toJSON()
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
module.exports = PaginatedItemArrayType;