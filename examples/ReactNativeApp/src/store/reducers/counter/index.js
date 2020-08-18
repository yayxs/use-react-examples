const initState = {
  counter: 0,
};
export default function onAction(state = initState, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
      };
    case 'minus':
      return {
        ...state,
      };
    default:
      return state;
  }
}
