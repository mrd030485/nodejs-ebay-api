function UserIDType(value) {
	this.UserIDType = value;
}
UserIDType.prototype.toJSON = function() {
	if(this.UserIDType !== null) {
		return {
			UserIDType: this.UserIDType
		};
	} else {
		return {};
	}
};
module.exports = UserIDType;