function AccountEntriesType(AccountEntry) {

	/**
	  Documentation
	   
                Type defining the array of <b>AccountEntry</b> objects that are conditionally returned in the <b>GetAccount</b> response.
            
	 */

	/**
	 * Arrays
	 *	AccountEntry: AccountEntryType
	 */
	this.AccountEntry = AccountEntry;
}
AccountEntriesType.prototype.toJSON = function(with_null) {
	var json = { 
		AccountEntry: (this.AccountEntry === undefined)? null : this.AccountEntry
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
module.exports = AccountEntriesType;