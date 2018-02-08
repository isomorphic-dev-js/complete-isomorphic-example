import {
  PARSE_USER_AGENT,
  STORE_USER_ID
} from './app-action-creators.es6';

export default function app(state = {}, action) {
  switch (action.type) {
    case PARSE_USER_AGENT:
      return {
        ...state,
        userAgent: action.userAgent ? action.userAgent : state.userAgent
      };
    case STORE_USER_ID:
      return {
        ...state,
        userId: action.userId
      };
    default:
      return state;
  }
}
