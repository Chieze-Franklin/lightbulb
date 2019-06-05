const initialState = {
  on: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_LIGHTBULB_STATE':
      return {
        ...state,
        on: action.payload
      }
    default:
      return state;
  }
}
