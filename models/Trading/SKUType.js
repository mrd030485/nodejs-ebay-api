function SKUType(value) {
	this.SKUType = value;
}
SKUType.prototype.toJSON = function() {
	if(this.SKUType !== null) {
		return {
			SKUType: this.SKUType
		};
	} else {
		return {};
	}
};
module.exports = SKUType;