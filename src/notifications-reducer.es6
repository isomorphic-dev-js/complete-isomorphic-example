export default function notifications(state = {}, action) {
  switch (action.type) {
    case 'FETCH_NOTIFICATIONS':
      return Object.assign({}, state, {
        notifications: action.notifications.items
      })
    case 'CLEAR_NOTIFICATION': {
      return Object.assign({}, state, {
        notifications: [
          ...state.notifications.slice(0, action.index),
          ...state.notifications.slice(action.index + 1)
        ]
      })
    }
    case 'CREATE_NOTIFICATION': {
      return Object.assign({}, state, {
        notifications: [...state.notifications, action.item]
      })
    }
    default:
      return state
  }
}
