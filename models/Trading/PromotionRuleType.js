var ItemIDType = require('./ItemIDType');

function PromotionRuleType(PromotedStoreCategoryID, PromotedeBayCategoryID, PromotedKeywords, ReferringItemID, ReferringStoreCategoryID, ReferringeBayCategoryID, ReferringKeywords, PromotionScheme, PromotionMethod) {

	/**
	  Documentation
	   
	 */

	/**
	 * Arrays
	 */
	var _ReferringItemID;
	Object.defineProperty(this, 'ReferringItemID', {
		 get: function(){
			 return _ReferringItemID;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemIDType){ 
					_ReferringItemID = value; 
				}else{
					console.log('ReferringItemID expects type ItemIDType');
				}
			}
		}
	});
	this.PromotedStoreCategoryID = PromotedStoreCategoryID;
	this.PromotedeBayCategoryID = PromotedeBayCategoryID;
	this.PromotedKeywords = PromotedKeywords;
	this.ReferringItemID = ReferringItemID;
	this.ReferringStoreCategoryID = ReferringStoreCategoryID;
	this.ReferringeBayCategoryID = ReferringeBayCategoryID;
	this.ReferringKeywords = ReferringKeywords;
	this.PromotionScheme = PromotionScheme;
	this.PromotionMethod = PromotionMethod;
}
PromotionRuleType.prototype.toJSON = function(with_null) {
	var json = { 
		PromotedStoreCategoryID: (this.PromotedStoreCategoryID === undefined)? null : this.PromotedStoreCategoryID,
		PromotedeBayCategoryID: (this.PromotedeBayCategoryID === undefined)? null : this.PromotedeBayCategoryID,
		PromotedKeywords: (this.PromotedKeywords === undefined)? null : this.PromotedKeywords,
		ReferringItemID: (this.ReferringItemID === undefined)? null : this.ReferringItemID.toJSON(),
		ReferringStoreCategoryID: (this.ReferringStoreCategoryID === undefined)? null : this.ReferringStoreCategoryID,
		ReferringeBayCategoryID: (this.ReferringeBayCategoryID === undefined)? null : this.ReferringeBayCategoryID,
		ReferringKeywords: (this.ReferringKeywords === undefined)? null : this.ReferringKeywords,
		PromotionScheme: (this.PromotionScheme === undefined)? null : this.PromotionScheme,
		PromotionMethod: (this.PromotionMethod === undefined)? null : this.PromotionMethod
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
module.exports = PromotionRuleType;