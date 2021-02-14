export const findProps = (state, path, action) =>
  state
    .getIn(path)
    .toJSON()
    .find((el) => el.id === action);
