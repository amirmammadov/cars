import { useDispatch } from "react-redux";

import { setMoreFilterValues } from "../features/appSlice";

export function useFiltersDispatch() {
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(setMoreFilterValues({ name: target.name, value: target.value }));
  };

  return handleChange;
}
