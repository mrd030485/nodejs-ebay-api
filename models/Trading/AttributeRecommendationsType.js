var AttributeSetArrayType = require('./AttributeSetArrayType');

function AttributeRecommendationsType(AttributeSetArray) {

	/**
	  Documentation
	   
                This type was deprecated along with the <b>GetItemRecommendations</b> call.
            
	 */

	/**
	 * Arrays
	 */
	var _AttributeSetArray;
	Object.defineProperty(this, 'AttributeSetArray', {
		 get: function(){
			 return _AttributeSetArray;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof AttributeSetArrayType){ 
					_AttributeSetArray = value; 
				}else{
					console.log('AttributeSetArray expects type AttributeSetArrayType');
				}
			}
		}
	});
	this.AttributeSetArray = AttributeSetArray;
}
AttributeRecommendationsType.prototype.toJSON = function(with_null) {
	var json = { 
		AttributeSetArray: (this.AttributeSetArray === undefined)? null : this.AttributeSetArray.toJSON()
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
module.exports = AttributeRecommendationsType;