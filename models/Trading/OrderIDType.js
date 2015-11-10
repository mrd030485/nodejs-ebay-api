function OrderIDType(value) {
	this.OrderIDType = value;
}
OrderIDType.prototype.toJSON = function() {
	if(this.OrderIDType !== null) {
		return {
			OrderIDType: this.OrderIDType
		};
	} else {
		return {};
	}
};
module.exports = OrderIDType;