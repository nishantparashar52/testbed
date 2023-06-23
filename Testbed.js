var SDK = require('./SDK');

// Initialize the SDK
SDK.initialize(config);

// Subscribe to the stream
SDK.subscribeToStream();

// Simulate network conditions for testing
SDK.simulateNetworkConditions('lowBandwidth');

// Generate load for testing
SDK.generateLoad(5);

// Collect metrics during the streaming session
SDK.collectMetrics();

// Handle errors
SDK.handleError(error);

/*** To Test Zoom */

var ZoomSDK = require('./ZoomSDk');

// Set up the Zoom SDK with your API key and secret
ZoomSDK.apiKey = 'YOUR_API_KEY';
ZoomSDK.apiSecret = 'YOUR_API_SECRET';

// Create a meeting
ZoomSDK.createMeeting();

// Join the meeting with the created meeting ID
ZoomSDK.joinMeeting();