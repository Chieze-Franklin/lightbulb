// this action creator returns the action directly
export const changeLightBulbState = (value) => ({
  type: 'CHANGE_LIGHTBULB_STATE',
  payload: value
});

// this action creator returns a function that accepts the store's dispatch function
// a good place to use this style is when an asynchronous function has to complete
// before the action is dispatched
// NOTE: you should apply a middleware like 'redux-thunk' to your store for this to work
export const changeLightBulbColor = (color) => async (dispatch) => {
  // you can perform async function here
  // const response = await request(...);
  dispatch({
    type: 'CHANGE_LIGHTBULB_COLOR',
    payload: color
  })
};
