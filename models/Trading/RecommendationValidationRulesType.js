var ValueTypeCodeType = require('./ValueTypeCodeType'),
	SelectionModeCodeType = require('./SelectionModeCodeType'),
	VariationPictureRuleCodeType = require('./VariationPictureRuleCodeType'),
	VariationSpecificsRuleCodeType = require('./VariationSpecificsRuleCodeType'),
	ValueFormatCodeType = require('./ValueFormatCodeType');

function RecommendationValidationRulesType(ValueType, MinValues, MaxValues, SelectionMode, Confidence, Relationship, VariationPicture, VariationSpecifics, ValueFormat) {

	/**
	  Documentation
	   
                This type is used by the <b>ValidationRules</b> containers returned in the <b>GetCategorySpecifics</b> response, which contains some rules and limits for the recommended Item Specific name (specified in the <b>NameRecommendation.Name</b>
                field) and corresponding value(s) (specified in the <b>ValueRecommendation.Value</b> field). These rules and limits will apply when the recommended Item Specific is subsequently used in Add/Revise/Relist call.
            
	 */

	/**
	 * Arrays
	 *	Relationship: NameValueRelationshipType
	 */
	var _ValueType;
	var _SelectionMode;
	var _VariationPicture;
	var _VariationSpecifics;
	var _ValueFormat;
	Object.defineProperty(this, 'ValueType', {
		 get: function(){
			 return _ValueType;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ValueTypeCodeType){ 
					_ValueType = value; 
				}else{
					console.log('ValueType expects type ValueTypeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'SelectionMode', {
		 get: function(){
			 return _SelectionMode;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof SelectionModeCodeType){ 
					_SelectionMode = value; 
				}else{
					console.log('SelectionMode expects type SelectionModeCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'VariationPicture', {
		 get: function(){
			 return _VariationPicture;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof VariationPictureRuleCodeType){ 
					_VariationPicture = value; 
				}else{
					console.log('VariationPicture expects type VariationPictureRuleCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'VariationSpecifics', {
		 get: function(){
			 return _VariationSpecifics;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof VariationSpecificsRuleCodeType){ 
					_VariationSpecifics = value; 
				}else{
					console.log('VariationSpecifics expects type VariationSpecificsRuleCodeType');
				}
			}
		}
	});
	Object.defineProperty(this, 'ValueFormat', {
		 get: function(){
			 return _ValueFormat;
		},
		 set: function(value){
			 if(value !== undefined && value !== null){
				if(value instanceof ValueFormatCodeType){ 
					_ValueFormat = value; 
				}else{
					console.log('ValueFormat expects type ValueFormatCodeType');
				}
			}
		}
	});
	this.ValueType = ValueType;
	this.MinValues = MinValues;
	this.MaxValues = MaxValues;
	this.SelectionMode = SelectionMode;
	this.Confidence = Confidence;
	this.Relationship = Relationship;
	this.VariationPicture = VariationPicture;
	this.VariationSpecifics = VariationSpecifics;
	this.ValueFormat = ValueFormat;
}
RecommendationValidationRulesType.prototype.toJSON = function(with_null) {
	var json = { 
		ValueType: (this.ValueType === undefined)? null : this.ValueType.toJSON(),
		MinValues: (this.MinValues === undefined)? null : this.MinValues,
		MaxValues: (this.MaxValues === undefined)? null : this.MaxValues,
		SelectionMode: (this.SelectionMode === undefined)? null : this.SelectionMode.toJSON(),
		Confidence: (this.Confidence === undefined)? null : this.Confidence,
		Relationship: (this.Relationship === undefined)? null : this.Relationship,
		VariationPicture: (this.VariationPicture === undefined)? null : this.VariationPicture.toJSON(),
		VariationSpecifics: (this.VariationSpecifics === undefined)? null : this.VariationSpecifics.toJSON(),
		ValueFormat: (this.ValueFormat === undefined)? null : this.ValueFormat.toJSON()
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
module.exports = RecommendationValidationRulesType;