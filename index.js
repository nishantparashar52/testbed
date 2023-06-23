var SDK = require('./SDK');
// Initialize the SDK
SDK.initialize('config');

// Subscribe to the stream
SDK.subscribeToStream();

// Handle errors
SDK.handleError('error');

// Integrate with the portal
SDK.integrateWithPortal();