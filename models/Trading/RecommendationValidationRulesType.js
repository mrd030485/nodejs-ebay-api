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
		ValueType: (this.ValueType === undefined)? null : this.ValueType,
		MinValues: (this.MinValues === undefined)? null : this.MinValues,
		MaxValues: (this.MaxValues === undefined)? null : this.MaxValues,
		SelectionMode: (this.SelectionMode === undefined)? null : this.SelectionMode,
		Confidence: (this.Confidence === undefined)? null : this.Confidence,
		Relationship: (this.Relationship === undefined)? null : this.Relationship,
		VariationPicture: (this.VariationPicture === undefined)? null : this.VariationPicture,
		VariationSpecifics: (this.VariationSpecifics === undefined)? null : this.VariationSpecifics,
		ValueFormat: (this.ValueFormat === undefined)? null : this.ValueFormat
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