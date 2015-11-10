function GetApiAccessRulesRequestType() {

	/**
	  Documentation
	   Reports how many calls your application has made and is allowed to make per hour or day.&nbsp;<b>Also for Half.com</b>.
	 */

	/**
	 * Arrays
	 */
}
GetApiAccessRulesRequestType.prototype.toJSON = function(with_null) {
	var json = { 
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
module.exports = GetApiAccessRulesRequestType;