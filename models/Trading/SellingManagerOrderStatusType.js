function SellingManagerOrderStatusType(CheckoutStatus, PaidStatus, ShippedStatus, eBayPaymentStatus, PayPalTransactionID, PaymentMethodUsed, FeedbackReceived, FeedbackSent, TotalEmailsSent, PaymentHoldStatus, SellerInvoiceNumber, ShippedTime, PaidTime, LastEmailSentTime, SellerInvoiceTime, IntegratedMerchantCreditCardEnabled) {

	/**
	  Documentation
	   This type contains details on the status of an order.
	 */

	/**
	 * Arrays
	 */
	this.CheckoutStatus = CheckoutStatus;
	this.PaidStatus = PaidStatus;
	this.ShippedStatus = ShippedStatus;
	this.eBayPaymentStatus = eBayPaymentStatus;
	this.PayPalTransactionID = PayPalTransactionID;
	this.PaymentMethodUsed = PaymentMethodUsed;
	this.FeedbackReceived = FeedbackReceived;
	this.FeedbackSent = FeedbackSent;
	this.TotalEmailsSent = TotalEmailsSent;
	this.PaymentHoldStatus = PaymentHoldStatus;
	this.SellerInvoiceNumber = SellerInvoiceNumber;
	this.ShippedTime = ShippedTime;
	this.PaidTime = PaidTime;
	this.LastEmailSentTime = LastEmailSentTime;
	this.SellerInvoiceTime = SellerInvoiceTime;
	this.IntegratedMerchantCreditCardEnabled = IntegratedMerchantCreditCardEnabled;
}
SellingManagerOrderStatusType.prototype.toJSON = function(with_null) {
	var json = { 
		CheckoutStatus: (this.CheckoutStatus === undefined)? null : this.CheckoutStatus,
		PaidStatus: (this.PaidStatus === undefined)? null : this.PaidStatus,
		ShippedStatus: (this.ShippedStatus === undefined)? null : this.ShippedStatus,
		eBayPaymentStatus: (this.eBayPaymentStatus === undefined)? null : this.eBayPaymentStatus,
		PayPalTransactionID: (this.PayPalTransactionID === undefined)? null : this.PayPalTransactionID,
		PaymentMethodUsed: (this.PaymentMethodUsed === undefined)? null : this.PaymentMethodUsed,
		FeedbackReceived: (this.FeedbackReceived === undefined)? null : this.FeedbackReceived,
		FeedbackSent: (this.FeedbackSent === undefined)? null : this.FeedbackSent,
		TotalEmailsSent: (this.TotalEmailsSent === undefined)? null : this.TotalEmailsSent,
		PaymentHoldStatus: (this.PaymentHoldStatus === undefined)? null : this.PaymentHoldStatus,
		SellerInvoiceNumber: (this.SellerInvoiceNumber === undefined)? null : this.SellerInvoiceNumber,
		ShippedTime: (this.ShippedTime === undefined)? null : this.ShippedTime,
		PaidTime: (this.PaidTime === undefined)? null : this.PaidTime,
		LastEmailSentTime: (this.LastEmailSentTime === undefined)? null : this.LastEmailSentTime,
		SellerInvoiceTime: (this.SellerInvoiceTime === undefined)? null : this.SellerInvoiceTime,
		IntegratedMerchantCreditCardEnabled: (this.IntegratedMerchantCreditCardEnabled === undefined)? null : this.IntegratedMerchantCreditCardEnabled
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
module.exports = SellingManagerOrderStatusType;