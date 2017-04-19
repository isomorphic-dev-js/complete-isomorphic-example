import UAParser from 'ua-parser-js';

export const PARSE_USER_AGENT = 'PARSE_USER_AGENT';

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

export default {
  parseUserAgent
};
