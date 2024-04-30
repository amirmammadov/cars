import { useSelector } from "react-redux";

export function useLoggedIn() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return isLoggedIn;
}
