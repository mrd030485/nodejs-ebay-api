var ItemType = require('./ItemType');

function GetRecommendationsRequestContainerType(ListingFlow, Item, RecommendationEngine, Query, CorrelationID, DeletedField, ExcludeRelationships, IncludeConfidence) {

	/**
	  Documentation
	   Specifies the data for a single item and configures the recommendation engines to use when processing the item with GetItemRecommendations.
	 */

	/**
	 * Arrays
	 */
	var _Item;
	Object.defineProperty(this, 'Item', {
		 get: function(){
			 return _Item;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemType){ 
					_Item = value; 
				}else{
					console.log('Item expects type ItemType');
				}
			}
		}
	});
	this.ListingFlow = ListingFlow;
	this.Item = Item;
	this.RecommendationEngine = RecommendationEngine;
	this.Query = Query;
	this.CorrelationID = CorrelationID;
	this.DeletedField = DeletedField;
	this.ExcludeRelationships = ExcludeRelationships;
	this.IncludeConfidence = IncludeConfidence;
}
GetRecommendationsRequestContainerType.prototype.toJSON = function(with_null) {
	var json = { 
		ListingFlow: (this.ListingFlow === undefined)? null : this.ListingFlow,
		Item: (this.Item === undefined)? null : this.Item.toJSON(),
		RecommendationEngine: (this.RecommendationEngine === undefined)? null : this.RecommendationEngine,
		Query: (this.Query === undefined)? null : this.Query,
		CorrelationID: (this.CorrelationID === undefined)? null : this.CorrelationID,
		DeletedField: (this.DeletedField === undefined)? null : this.DeletedField,
		ExcludeRelationships: (this.ExcludeRelationships === undefined)? null : this.ExcludeRelationships,
		IncludeConfidence: (this.IncludeConfidence === undefined)? null : this.IncludeConfidence
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
module.exports = GetRecommendationsRequestContainerType;