const initialState = {
  alpha: '255',
  blue: '255',
  green: '255',
  red: '255'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_LIGHTBULB_COLOR':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}
