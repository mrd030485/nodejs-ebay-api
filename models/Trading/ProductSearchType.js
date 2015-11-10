var PaginationType = require('./PaginationType'),
	CharacteristicSetIDsType = require('./CharacteristicSetIDsType'),
	ExternalProductIDType = require('./ExternalProductIDType');

function ProductSearchType(ProductSearchID, AttributeSetID, ProductFinderID, ProductID, SortAttributeID, MaxChildrenPerFamily, SearchAttributes, Pagination, AvailableItemsOnly, QueryKeywords, CharacteristicSetIDs, ProductReferenceID, ExternalProductID) {

	/**
	  Documentation
	   
                This type is deprecated as <b>GetProduct*</b> calls were deprecated.
                
            
	 */

	/**
	 * Arrays
	 *	SearchAttributes: SearchAttributesType
	 */
	var _Pagination;
	var _CharacteristicSetIDs;
	var _ExternalProductID;
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
	Object.defineProperty(this, 'CharacteristicSetIDs', {
		 get: function(){
			 return _CharacteristicSetIDs;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CharacteristicSetIDsType){ 
					_CharacteristicSetIDs = value; 
				}else{
					console.log('CharacteristicSetIDs expects type CharacteristicSetIDsType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ExternalProductID', {
		 get: function(){
			 return _ExternalProductID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ExternalProductIDType){ 
					_ExternalProductID = value; 
				}else{
					console.log('ExternalProductID expects type ExternalProductIDType');
				}
			}
		}
	});
	this.ProductSearchID = ProductSearchID;
	this.AttributeSetID = AttributeSetID;
	this.ProductFinderID = ProductFinderID;
	this.ProductID = ProductID;
	this.SortAttributeID = SortAttributeID;
	this.MaxChildrenPerFamily = MaxChildrenPerFamily;
	this.SearchAttributes = SearchAttributes;
	this.Pagination = Pagination;
	this.AvailableItemsOnly = AvailableItemsOnly;
	this.QueryKeywords = QueryKeywords;
	this.CharacteristicSetIDs = CharacteristicSetIDs;
	this.ProductReferenceID = ProductReferenceID;
	this.ExternalProductID = ExternalProductID;
}
ProductSearchType.prototype.toJSON = function(with_null) {
	var json = { 
		ProductSearchID: (this.ProductSearchID === undefined)? null : this.ProductSearchID,
		AttributeSetID: (this.AttributeSetID === undefined)? null : this.AttributeSetID,
		ProductFinderID: (this.ProductFinderID === undefined)? null : this.ProductFinderID,
		ProductID: (this.ProductID === undefined)? null : this.ProductID,
		SortAttributeID: (this.SortAttributeID === undefined)? null : this.SortAttributeID,
		MaxChildrenPerFamily: (this.MaxChildrenPerFamily === undefined)? null : this.MaxChildrenPerFamily,
		SearchAttributes: (this.SearchAttributes === undefined)? null : this.SearchAttributes,
		Pagination: (this.Pagination === undefined)? null : this.Pagination.toJSON(),
		AvailableItemsOnly: (this.AvailableItemsOnly === undefined)? null : this.AvailableItemsOnly,
		QueryKeywords: (this.QueryKeywords === undefined)? null : this.QueryKeywords,
		CharacteristicSetIDs: (this.CharacteristicSetIDs === undefined)? null : this.CharacteristicSetIDs.toJSON(),
		ProductReferenceID: (this.ProductReferenceID === undefined)? null : this.ProductReferenceID,
		ExternalProductID: (this.ExternalProductID === undefined)? null : this.ExternalProductID.toJSON()
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
module.exports = ProductSearchType;