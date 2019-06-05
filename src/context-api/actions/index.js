export const changeLightBulbState = (value) => ({
  type: 'CHANGE_LIGHTBULB_STATE',
  payload: value
});

export const changeLightBulbColor = (color) => ({
  type: 'CHANGE_LIGHTBULB_COLOR',
  payload: color
});
