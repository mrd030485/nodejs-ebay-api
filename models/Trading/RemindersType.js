function RemindersType(PaymentToSendCount, FeedbackToReceiveCount, FeedbackToSendCount, OutbidCount, PaymentToReceiveCount, SecondChanceOfferCount, ShippingNeededCount, RelistingNeededCount, TotalNewLeadsCount, DocsForCCProcessingToSendCount, RTEToProcessCount, ItemReceiptToConfirmCount, RefundOnHoldCount, RefundCancelledCount, ShippingDetailsToBeProvidedCount, ItemReceiptConfirmationToReceiveCount, RefundInitiatedCount, PendingRTERequestCount, DeclinedRTERequestCount) {

	/**
	  Documentation
	   Specifies the type of reminders for which you want information.
	 */

	/**
	 * Arrays
	 */
	this.PaymentToSendCount = PaymentToSendCount;
	this.FeedbackToReceiveCount = FeedbackToReceiveCount;
	this.FeedbackToSendCount = FeedbackToSendCount;
	this.OutbidCount = OutbidCount;
	this.PaymentToReceiveCount = PaymentToReceiveCount;
	this.SecondChanceOfferCount = SecondChanceOfferCount;
	this.ShippingNeededCount = ShippingNeededCount;
	this.RelistingNeededCount = RelistingNeededCount;
	this.TotalNewLeadsCount = TotalNewLeadsCount;
	this.DocsForCCProcessingToSendCount = DocsForCCProcessingToSendCount;
	this.RTEToProcessCount = RTEToProcessCount;
	this.ItemReceiptToConfirmCount = ItemReceiptToConfirmCount;
	this.RefundOnHoldCount = RefundOnHoldCount;
	this.RefundCancelledCount = RefundCancelledCount;
	this.ShippingDetailsToBeProvidedCount = ShippingDetailsToBeProvidedCount;
	this.ItemReceiptConfirmationToReceiveCount = ItemReceiptConfirmationToReceiveCount;
	this.RefundInitiatedCount = RefundInitiatedCount;
	this.PendingRTERequestCount = PendingRTERequestCount;
	this.DeclinedRTERequestCount = DeclinedRTERequestCount;
}
RemindersType.prototype.toJSON = function(with_null) {
	var json = { 
		PaymentToSendCount: (this.PaymentToSendCount === undefined)? null : this.PaymentToSendCount,
		FeedbackToReceiveCount: (this.FeedbackToReceiveCount === undefined)? null : this.FeedbackToReceiveCount,
		FeedbackToSendCount: (this.FeedbackToSendCount === undefined)? null : this.FeedbackToSendCount,
		OutbidCount: (this.OutbidCount === undefined)? null : this.OutbidCount,
		PaymentToReceiveCount: (this.PaymentToReceiveCount === undefined)? null : this.PaymentToReceiveCount,
		SecondChanceOfferCount: (this.SecondChanceOfferCount === undefined)? null : this.SecondChanceOfferCount,
		ShippingNeededCount: (this.ShippingNeededCount === undefined)? null : this.ShippingNeededCount,
		RelistingNeededCount: (this.RelistingNeededCount === undefined)? null : this.RelistingNeededCount,
		TotalNewLeadsCount: (this.TotalNewLeadsCount === undefined)? null : this.TotalNewLeadsCount,
		DocsForCCProcessingToSendCount: (this.DocsForCCProcessingToSendCount === undefined)? null : this.DocsForCCProcessingToSendCount,
		RTEToProcessCount: (this.RTEToProcessCount === undefined)? null : this.RTEToProcessCount,
		ItemReceiptToConfirmCount: (this.ItemReceiptToConfirmCount === undefined)? null : this.ItemReceiptToConfirmCount,
		RefundOnHoldCount: (this.RefundOnHoldCount === undefined)? null : this.RefundOnHoldCount,
		RefundCancelledCount: (this.RefundCancelledCount === undefined)? null : this.RefundCancelledCount,
		ShippingDetailsToBeProvidedCount: (this.ShippingDetailsToBeProvidedCount === undefined)? null : this.ShippingDetailsToBeProvidedCount,
		ItemReceiptConfirmationToReceiveCount: (this.ItemReceiptConfirmationToReceiveCount === undefined)? null : this.ItemReceiptConfirmationToReceiveCount,
		RefundInitiatedCount: (this.RefundInitiatedCount === undefined)? null : this.RefundInitiatedCount,
		PendingRTERequestCount: (this.PendingRTERequestCount === undefined)? null : this.PendingRTERequestCount,
		DeclinedRTERequestCount: (this.DeclinedRTERequestCount === undefined)? null : this.DeclinedRTERequestCount
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
module.exports = RemindersType;