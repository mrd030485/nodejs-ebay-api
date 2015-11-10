function ConditionValuesType(Condition, ConditionHelpURL) {

	/**
	  Documentation
	   Fields in this type provide condition values and display names.
	 */

	/**
	 * Arrays
	 *	Condition: ConditionType
	 */
	this.Condition = Condition;
	this.ConditionHelpURL = ConditionHelpURL;
}
ConditionValuesType.prototype.toJSON = function(with_null) {
	var json = { 
		Condition: (this.Condition === undefined)? null : this.Condition,
		ConditionHelpURL: (this.ConditionHelpURL === undefined)? null : this.ConditionHelpURL
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
module.exports = ConditionValuesType;