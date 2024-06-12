import { useSelector, useDispatch } from "react-redux";

import { setMoreFiltersCleared } from "../features/appSlice";

export function useClearFilter() {
  const isClear = useSelector((state) => state.moreFiltersCleared);

  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(setMoreFiltersCleared());
  };

  return [isClear, handleClear];
}
