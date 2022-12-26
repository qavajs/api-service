import { sendHttpRequest } from './src/httpRequest';
import { sendWebsocketMessage } from './src/websocket';

declare module '@qavajs/api-service' {
  export { sendHttpRequest, sendWebsocketMessage };
}
