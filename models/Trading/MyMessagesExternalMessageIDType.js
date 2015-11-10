function MyMessagesExternalMessageIDType(value) {
	this.MyMessagesExternalMessageIDType = value;
}
MyMessagesExternalMessageIDType.prototype.toJSON = function() {
	if(this.MyMessagesExternalMessageIDType !== null) {
		return {
			MyMessagesExternalMessageIDType: this.MyMessagesExternalMessageIDType
		};
	} else {
		return {};
	}
};
module.exports = MyMessagesExternalMessageIDType;