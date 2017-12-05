- **Release of GUI TestNet Ver 0.1.0**
- **Release of GUI MainNet Ver 1.0.0**
    + UI Integration
        * Identify RPC and API changes needed around UI Integration
        * API Service and Consuming
        * Headless browser
            - Setup electron test
            - Daemon tests
            - RPC Queuing      
    + GUI Components
        * RPC Service
		* Transaction Page – Design review
		* Cold Staking - Backend changes.
		* Design and Layout changes
		* Cold Staking - Backend changes
		* Add progress bar to coldstake widget
		* Convert Bootstrap Pagination to Material
		* Balance Transfer Bugs
		* Auto start daemon on all platforms
		* Multi-Wallet implementation
		* HD wallet import and generate mnemonic seed
		* Daemon Modal
		* Syncing Modal to show connected peers
		* Daemon Management plugin
		* Add Sign verify message Modal
		* Upgrade GUI to 0.15.0.4
        * Bug Fixing (UAT Testing)
            - Unlock Wallet - Blank screen loaded on press of enter
			- Restore Wallet - Recovery phrase step
			- Syncing - Modal not opening
			- Demon startup error handling
			- Splash screen display time
			- Create wallet modal on first use
			- Tray menus not working on Windows
			- Wallet Unlocking bugs
			- Enter wallet recovery phrase error handling
			- Check if Deamon should start with re-index
			- Modal Launching code changes on Material
			- Add Account - Syncing progress display as black bar
			- Add account button loads a blank page on clean install
			- Going back and next on "mnemonic phrase confirmation" does not reset the 24 word boxes correctly
			- Radio buttons 'From account' (between Send payment-/Balance transfer tabs) appear to be dependent/buggy
			- Advanced options need 'advanced' indicator
			- Radio buttons (tab: balance transfer) between from/to account not properly configured
			- Negative part amount (balance transfer) bug contributor-friendly
			- Total received, should it return a value? 
			- Incorrect wallet naming in various locations
			- Private balance not displaying on balance transfer window
			- Replace Material icons with Particl design
			- Encrypt Wallet
			- Filtering issues
			- Restore Wallet - Recovery phrase step pasting issue
        * GUI page designs
            - Staking Widget design
            - Mockup designs of exchange integration
            - Various UI changes on GUI pages
- **Particl Market Place**
    + Market Place Database Design
    + Establish Marketplace Codebase
    + Marketplace Categories
        * Initial Categories (Building and Import)
    + Current Bootstrap to Material migration
        * Create Mobile menu in Material
        * Development clean-up for merge
- **Particl Core**
    + API to filter transactions
