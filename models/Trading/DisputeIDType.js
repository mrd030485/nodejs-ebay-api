function DisputeIDType(value) {
	this.DisputeIDType = value;
}
DisputeIDType.prototype.toJSON = function() {
	if(this.DisputeIDType !== null) {
		return {
			DisputeIDType: this.DisputeIDType
		};
	} else {
		return {};
	}
};
module.exports = DisputeIDType;