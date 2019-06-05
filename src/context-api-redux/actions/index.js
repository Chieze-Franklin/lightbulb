// our action producers can return either actions or functions

export const changeLightBulbState = (value) => ({
  type: 'CHANGE_LIGHTBULB_STATE',
  payload: value
});

export const changeLightBulbColor = (color) => (dispatch) => {
  dispatch({
    type: 'CHANGE_LIGHTBULB_COLOR',
    payload: color
  })
};
