- **Release of GUI TestNet Ver 0.1.0**
	+ Features (As per Status Update 18/01/2018)
		* Cold staking widget
		* ZAP functionality for fast cold staking activation
		* Debug window console
		* History filters
		* Syncing progress bar in left side menu
		* Notifications for a new release
		* OS notifications for stakes and incoming transactions
		* Display client and daemon versions
		* Paste button in address add
		* Paste an address anywhere in send page and address book
		* Display narrations on transactions
		* Pagination - Choose how many transactions to display per page
	+ Maintenance
		* Test and finalize Zap feature 
		* Update ng2-logger to the latest version
		* Add takeWhile and OnDestroy hook in all state.observe calls
		* Update packages
		* Added RPC calls to console 
		* Added checksums for build process
		* Merge dev -> Branch 1.1.0 
		* Send Page: Updated icons and alignment tweaks
		* Redefine logging levels
		* Update Electron to the latest version
	+ Bugs fixed
		* Added background image for Mac DMG 
		* App not quitting when daemon start before the GUI 
		* Fixed preceding issue on creation of wallet, due to passwords. 
		* Sign and Verify modal refactoring
		* Remove arm command not working in builds 
		* Changed save button name on address book
		* Fixed success flash message not aligned 
		* Fix error on creation screen if no password entered 
		* App title update 
		* Fix wallet detection 
		* Fix daemon error messages 
		* Resolve create wallet without recovery passphrase
		* Fix Mac build issues
		* Various other bugs
- **Particl Market Place**
	+ Market Place Functions
		* MP: Functions (RPC API) – Listing Item
			- ListingItemGetCommand, CategoryCommand
		* MP: Functions (RPC API) – Item Category
			- ItemCategoryFindCommand, ItemCategoryCreateCommand, ItemCategoryGetCommand
		* MP: Functions (RPC API) – Address
			- AddressCreateCommand, AddressUpdateCommand, AddressCommand, AddressListCommand, AddressRemoveCommand
		* MP: Functions (RPC API) – Profile
			- ProfileCommand, ProfileListCommand 
		* MP: Functions (RPC API) – Market
			- MarketCommand, MarketListCommand
		* MP: Functions (RPC API) – Data
			- DataCommand 
		* MP: Functions (RPC API) – Listing Item
			- ListingItemService, ListingItemTemplateService
		* MP: Functions (RPC API) – Item
			- postitem, updateitem
	+ Market Place Backend
		* Design final RPC API
		* Rename blackbox test files to match the commands being tested
		* Replace the Country Enum with a library
		* Particl docker startup options
		* Remove image Metadata