const initialState = {
  color: {
    alpha: '255',
    blue: '255',
    green: '255',
    red: '255'
  },
  state: {
    on: false
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_LIGHTBULB_COLOR':
      return {
        ...state,
        color: {
          ...state.color,
          ...action.payload
        }
      }
    case 'CHANGE_LIGHTBULB_STATE':
      return {
        ...state,
        state: {
          ...state.state,
          on: action.payload
        }
      }
    default:
      return state;
  }
}
