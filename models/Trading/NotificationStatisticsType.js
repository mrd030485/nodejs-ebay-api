function NotificationStatisticsType(DeliveredCount, QueuedNewCount, QueuedPendingCount, ExpiredCount, ErrorCount) {

	/**
	  Documentation
	   Summary information about notifications delivered, failed, errors, queued for a given application ID and time period.
	 */

	/**
	 * Arrays
	 */
	this.DeliveredCount = DeliveredCount;
	this.QueuedNewCount = QueuedNewCount;
	this.QueuedPendingCount = QueuedPendingCount;
	this.ExpiredCount = ExpiredCount;
	this.ErrorCount = ErrorCount;
}
NotificationStatisticsType.prototype.toJSON = function(with_null) {
	var json = { 
		DeliveredCount: (this.DeliveredCount === undefined)? null : this.DeliveredCount,
		QueuedNewCount: (this.QueuedNewCount === undefined)? null : this.QueuedNewCount,
		QueuedPendingCount: (this.QueuedPendingCount === undefined)? null : this.QueuedPendingCount,
		ExpiredCount: (this.ExpiredCount === undefined)? null : this.ExpiredCount,
		ErrorCount: (this.ErrorCount === undefined)? null : this.ErrorCount
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
module.exports = NotificationStatisticsType;