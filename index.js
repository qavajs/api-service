/* eslint @typescript-eslint/no-var-requires: "off" */
const { sendHttpRequest } = require('./lib/httpRequest');
const { sendWebsocketMessage } = require('./lib/websocket');

module.exports = {
  sendHttpRequest,
  sendWebsocketMessage,
};
