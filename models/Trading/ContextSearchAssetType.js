var CategoryType = require('./CategoryType');

function ContextSearchAssetType(Keyword, Category, Ranking) {

	/**
	  Documentation
	   Type defining the <b>ContextSearchAsset</b> container that is returned in the <b>GetContextualKeywords</b> response for each keyword that is found.
	 */

	/**
	 * Arrays
	 */
	var _Category;
	Object.defineProperty(this, 'Category', {
		 get: function(){
			 return _Category;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof CategoryType){ 
					_Category = value; 
				}else{
					console.log('Category expects type CategoryType');
				}
			}
		}
	});
	this.Keyword = Keyword;
	this.Category = Category;
	this.Ranking = Ranking;
}
ContextSearchAssetType.prototype.toJSON = function(with_null) {
	var json = { 
		Keyword: (this.Keyword === undefined)? null : this.Keyword,
		Category: (this.Category === undefined)? null : this.Category.toJSON(),
		Ranking: (this.Ranking === undefined)? null : this.Ranking
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
module.exports = ContextSearchAssetType;