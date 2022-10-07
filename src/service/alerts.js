import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NOT_ALERTS = {
  NOT_FOUND: "No any dragons found",
  FETCH_ERROR: "Database access error",
};

export const myAlert = (message) => {
  return toast.error(message, {
    autoClose: 3000,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    theme: "colored",
  });
};
