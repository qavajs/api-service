import WebSocket from 'ws';

/**
 * Sending message to a websocket channel
 *
 * @param {String} url - url that should be requested
 * @param {unknown} sendData - message that should be sent to a requested url
 */

async function sendWebsocketMessage(url: string, sendData: unknown): Promise<void> {
    const ws: WebSocket = new WebSocket(url);
    ws.on('open', () => {
        ws.send(sendData);
    });
}

export { sendWebsocketMessage };
