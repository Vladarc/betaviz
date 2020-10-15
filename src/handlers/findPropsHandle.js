export const findProps = (state, path, action) => {
    return state
        .getIn(path)
        .toJSON()
        .find((el) => el.id === action);
};

