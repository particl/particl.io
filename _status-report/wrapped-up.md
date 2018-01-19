- **Release of GUI Testnet 0.1.0**
	+ Features
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
	+ Bugs fixed
		* Balance transfer blind -> public
		* Blank modals
		* Diverse length seeds importing
		* Confirmations updating
		* Mac tray icon
		* Daemon messages
		* Daemon restart (encrypting wallet)
		* Auto locking wallet
		* Blind balance display
		* Various other bugs
	+ Upgraded particld to latest 15.1.1
- **Particl Market Place**
	+ Market Place Functions
		* MP: Functions (RPC API) – Bid
			- `acceptbid`, `cancelbid`, `rejectbid`, `sendbid`, `findbids`
		* MP: Functions (RPC API) – Favorites
			- `addfavorite`, `removefavorite`
		* MP: Functions (RPC API) – Item
			- `additemimage`, `additemlocation`, `finditems`, `findownitems`, `getitem`, `removeitemimage`, `removeitemlocation`, `updateiteminformation`, `updateitemlocation`
		* MP: Functions (RPC API) – Add Market
			- `addmarket`
		* MP: Functions (RPC API) – Shipping Destination
			- `addshippingdestination`, `removeshippingdestination`
		* MP: Functions (RPC API) – Category
			- `createcategory`, `findcategory`, `getcategories`, `removecategory`, `updatecategory`
		* MP: Functions (RPC API) – Escrow
			- `createescrow`, `lockescrow`, `refundescrow`, `removeescrow`, `releaseescrow`, `updateescrow`
		* MP: Functions (RPC API) – Item Template
			- `createitemtemplate`, `finditemtemplate`, `getitemtemplate`, `removelistingitemtemplate`
		* MP: Functions (RPC API) – Profile
			- `createprofile`, `getprofile`, `removeprofile`
		* MP: Functions (RPC API) – Address
			- `removeaddress`
		* MP: Functions (RPC API) – Message
			- `updatemessaginginformation`
		* MP: Functions (RPC API) – Payment
			- `updatepaymentinformation`
		* MP: Functions (RPC API) – Receive new message
			- `acceptbidmessage`, `bidmessage`, `cancelbidmessage`, `listingitemmessage`, `rejectbidmessage`
	+ Market Place integration tests
		* Added integration tests, create testapp supporting Inversify
			- Tests include: `bid`, `biddata`, `bidmessageprocessor`, `escro`, `escrowratio`, `favoriteitem`, `itemcategry`, `itemimage`, `itemcategory`, `itemimage`, `itemdata`, `itemlocation`, `itemprice`, `locationmarker`, `itemprice`, `shippingdestination`, `shippingprice` and `testdata`
	+ Market Place GUI
		* RPC Module
		* Created a RPC Command Class
		* json Object handling changes
		* Default profile creation
		* Cryptocurrency address table
		* Bid Model
		* Include address zip code
