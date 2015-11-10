function ItemIDType(value) {
	this.ItemIDType = value;
}
ItemIDType.prototype.toJSON = function() {
	if(this.ItemIDType !== null) {
		return {
			ItemIDType: this.ItemIDType
		};
	} else {
		return {};
	}
};
module.exports = ItemIDType;