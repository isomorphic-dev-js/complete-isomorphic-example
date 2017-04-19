import {
  PARSE_USER_AGENT
} from './app-action-creators.es6';

export default function app(state = {}, action) {
  switch (action.type) {
    case PARSE_USER_AGENT:
      return {
        ...state,
        userAgent: action.userAgent ? action.userAgent : state.userAgent
      };
    default:
      return state;
  }
}
