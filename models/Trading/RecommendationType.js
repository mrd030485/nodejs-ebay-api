function RecommendationType(FieldGroup, FieldName, RecommendationCode, RecommendedValue, Message) {

	/**
	  Documentation
	   
                This type is reserved for future or internal use.
            
	 */

	/**
	 * Arrays
	 */
	this.FieldGroup = FieldGroup;
	this.FieldName = FieldName;
	this.RecommendationCode = RecommendationCode;
	this.RecommendedValue = RecommendedValue;
	this.Message = Message;
}
RecommendationType.prototype.toJSON = function(with_null) {
	var json = { 
		FieldGroup: (this.FieldGroup === undefined)? null : this.FieldGroup,
		FieldName: (this.FieldName === undefined)? null : this.FieldName,
		RecommendationCode: (this.RecommendationCode === undefined)? null : this.RecommendationCode,
		RecommendedValue: (this.RecommendedValue === undefined)? null : this.RecommendedValue,
		Message: (this.Message === undefined)? null : this.Message
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
module.exports = RecommendationType;