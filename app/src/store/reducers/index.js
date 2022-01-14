import { FETCH_DATA } from "../keys";

const initialState = {
  data: [],
};

export default function reducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case FETCH_DATA:
      return { ...state, data: payload };
    default:
      return state;
  }
}
