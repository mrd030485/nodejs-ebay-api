function ThemeGroupType(GroupID, GroupName, ThemeID, ThemeTotal) {

	/**
	  Documentation
	   Data for one theme group. Returned for GetDescriptionTemplates if theme groups are requested.
	 */

	/**
	 * Arrays
	 */
	this.GroupID = GroupID;
	this.GroupName = GroupName;
	this.ThemeID = ThemeID;
	this.ThemeTotal = ThemeTotal;
}
ThemeGroupType.prototype.toJSON = function(with_null) {
	var json = { 
		GroupID: (this.GroupID === undefined)? null : this.GroupID,
		GroupName: (this.GroupName === undefined)? null : this.GroupName,
		ThemeID: (this.ThemeID === undefined)? null : this.ThemeID,
		ThemeTotal: (this.ThemeTotal === undefined)? null : this.ThemeTotal
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
module.exports = ThemeGroupType;