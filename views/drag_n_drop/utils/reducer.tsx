export type Outline = {
  title: string;
};

export type Action = {
  type: string;
  source: number;
  destination: number;
};

const reducer = (state: Array<Outline>, action: Action) => {
  switch (action.type) {
    case "addTask":
      return state; // TODO : Can be implemented as an improvement
    case "removeTask":
      return state; // TODO : Can be implemented as an improvement
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
