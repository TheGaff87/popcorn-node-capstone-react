import { clearResults } from "../actions";

export const clearDropdown = (ref, dispatch) => {
  if (ref) {
    dispatch(clearResults());
  }
};
