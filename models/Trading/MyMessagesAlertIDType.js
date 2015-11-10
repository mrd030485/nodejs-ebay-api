function MyMessagesAlertIDType(value) {
	this.MyMessagesAlertIDType = value;
}
MyMessagesAlertIDType.prototype.toJSON = function() {
	if(this.MyMessagesAlertIDType !== null) {
		return {
			MyMessagesAlertIDType: this.MyMessagesAlertIDType
		};
	} else {
		return {};
	}
};
module.exports = MyMessagesAlertIDType;