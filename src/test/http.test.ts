import { sendHttpRequest } from '../httpRequest';

describe('sendHttpRequest tests', () => {
  test('Check if GET Method works and return status, headers and response body', async () => {
    const response: any = await sendHttpRequest('https://jsonplaceholder.typicode.com/todos/1', { method: 'GET' });
    expect(response.status).toBe(200);
    expect(response.statusText).toBe('OK');
    expect(typeof response.headers).toBe('object');
    expect(typeof response.payload).toBe('object');
  });

  test('Check if POST Method with request body works and return status, headers and response body', async () => {
    const response: any = await sendHttpRequest('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
    });
    expect(typeof response.status).toBe('number');
    expect(typeof response.statusText).toBe('string');
    expect(typeof response.headers).toBe('object');
    expect(typeof response.payload).toBe('object');
  });
});
