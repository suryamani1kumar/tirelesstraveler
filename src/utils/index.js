import Cookies from "js-cookie";

export const isToken = () => {
  const token = Cookies.get("token");
  return token;
};
