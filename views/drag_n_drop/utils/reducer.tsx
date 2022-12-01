export type Outline = {
  title: string;
};

const reducer = ({ state, action }: any) => {
  switch (action.type) {
    case "addTask":
      return [
        ...state,
        {
          title: action.title,
          status: action.status,
        },
      ];
    case "removeTask":
      return state.filter((outline: Outline) => outline.title !== action.title);
    case "reorderList":
      return (() => {
        const items = Array.from(state);
        const [movedItem] = items.splice(action.source, 1);
        items.splice(action.destination, 0, movedItem);
        return items;
      })();
    default:
      return state;
  }
};

export default reducer;
