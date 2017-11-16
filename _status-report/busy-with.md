- **Release of GUI TestNet Ver 0.1.1**
    + GUI Components
        * Adjustment to receive and send arrows
        * History first and last page access buttons
        * Number of confirmations doesn't update in "Overview" tab
        * Bug Fixing (UAT Testing)
            - Pinning and Un-Pinning of Side menu
			- Uncaught exception on close : object has been destroyed [win]
			- After update, -reindex flag not working automatically
			- syncing modal broken for the first seconds of sync
			- Wallet creation fails with mnemonic-related errors
			- OSX menu should have a fixed width
			- Splash Screen stuck in wallet startup process
			- Can't paste address in "Add new address to Address book" (osx)
			- Only 24 words seeds are allowed - allow 12, 15 and 18 words too
			- Cannot make a balance transfer from blind to public
- **Particl Market Place**
    + Current Bootstrap to Material migration
        * Resolve issues picked up in testing Material - Electron GUI
    + Market Place GUI Designs
        * Categories - UX/UI Design
        * GUI Design - Seller Side
        * GUI Design - Buyer Side
    + Messaging (Daemon / Core) - Paid messages / Listing fee
    + Functions (Backend)
