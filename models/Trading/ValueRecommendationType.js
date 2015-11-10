var RecommendationValidationRulesType = require('./RecommendationValidationRulesType');

function ValueRecommendationType(Value, ValidationRules) {

	/**
	  Documentation
	   
                Defines details about recommended values for custom Item Specifics.
            
	 */

	/**
	 * Arrays
	 */
	var _ValidationRules;
	Object.defineProperty(this, 'ValidationRules', {
		 get: function(){
			 return _ValidationRules;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof RecommendationValidationRulesType){ 
					_ValidationRules = value; 
				}else{
					console.log('ValidationRules expects type RecommendationValidationRulesType');
				}
			}
		}
	});
	this.Value = Value;
	this.ValidationRules = ValidationRules;
}
ValueRecommendationType.prototype.toJSON = function(with_null) {
	var json = { 
		Value: (this.Value === undefined)? null : this.Value,
		ValidationRules: (this.ValidationRules === undefined)? null : this.ValidationRules.toJSON()
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
module.exports = ValueRecommendationType;