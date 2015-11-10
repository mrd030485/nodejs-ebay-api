function UUIDType(value) {
	this.UUIDType = value;
}
UUIDType.prototype.toJSON = function() {
	if(this.UUIDType !== null) {
		return {
			UUIDType: this.UUIDType
		};
	} else {
		return {};
	}
};
module.exports = UUIDType;