var RecommendationValidationRulesType = require('./RecommendationValidationRulesType'),
	ItemSpecificSourceCodeType = require('./ItemSpecificSourceCodeType');

function NameRecommendationType(Name, ValidationRules, ValueRecommendation, HelpURL, Source, HelpText) {

	/**
	  Documentation
	   
                Defines details about recommended names and values for custom Item Specifics.
            
	 */

	/**
	 * Arrays
	 *	ValueRecommendation: ValueRecommendationType
	 */
	var _ValidationRules;
	var _Source;
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
	Object.defineProperty(this, 'Source', {
		 get: function(){
			 return _Source;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ItemSpecificSourceCodeType){ 
					_Source = value; 
				}else{
					console.log('Source expects type ItemSpecificSourceCodeType');
				}
			}
		}
	});
	this.Name = Name;
	this.ValidationRules = ValidationRules;
	this.ValueRecommendation = ValueRecommendation;
	this.HelpURL = HelpURL;
	this.Source = Source;
	this.HelpText = HelpText;
}
NameRecommendationType.prototype.toJSON = function(with_null) {
	var json = { 
		Name: (this.Name === undefined)? null : this.Name,
		ValidationRules: (this.ValidationRules === undefined)? null : this.ValidationRules.toJSON(),
		ValueRecommendation: (this.ValueRecommendation === undefined)? null : this.ValueRecommendation,
		HelpURL: (this.HelpURL === undefined)? null : this.HelpURL,
		Source: (this.Source === undefined)? null : this.Source.toJSON(),
		HelpText: (this.HelpText === undefined)? null : this.HelpText
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
module.exports = NameRecommendationType;