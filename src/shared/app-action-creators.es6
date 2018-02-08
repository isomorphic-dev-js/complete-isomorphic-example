import UAParser from 'ua-parser-js';
import cookies from './cookies.es6';

export const PARSE_USER_AGENT = 'PARSE_USER_AGENT';
export const STORE_USER_ID = 'STORE_USER_ID';

export function parseUserAgent(requestHeaders) {
  const uaParser = new UAParser();
  let userAgentObject;
  if (requestHeaders && requestHeaders['User-Agent']) {
    const userAgent = requestHeaders['User-Agent'];
    uaParser.setUA(userAgent);
    userAgentObject = uaParser.getResult(userAgent);
  }
  return {
    userAgent: userAgentObject,
    type: PARSE_USER_AGENT
  };
}

export function storeUserId(requestHeaders) {
  const userId = cookies.get('userId', requestHeaders);
  return {
    userId,
    type: STORE_USER_ID
  };
}

export default {
  parseUserAgent,
  storeUserId
};
