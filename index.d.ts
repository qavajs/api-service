import {sendHttpRequest} from './src/httpRequest';

declare module '@qavajs/api-service' {
    export { sendHttpRequest }
}
