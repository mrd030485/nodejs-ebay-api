function MyMessagesMessageIDType(value) {
	this.MyMessagesMessageIDType = value;
}
MyMessagesMessageIDType.prototype.toJSON = function() {
	if(this.MyMessagesMessageIDType !== null) {
		return {
			MyMessagesMessageIDType: this.MyMessagesMessageIDType
		};
	} else {
		return {};
	}
};
module.exports = MyMessagesMessageIDType;