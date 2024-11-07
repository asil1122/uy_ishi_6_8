import { useEffect } from "react";
import { useNavigate } from "react-router";
import { loadState } from "../config/storege";
import { useSelector } from "react-redux";

export const useLocation = () => {
  const navigate = useNavigate("");
  const { user } = useSelector((state) => state); 

  useEffect(() => {
    if (user.accessToken) navigate("/", { replace: true });
    else {
      navigate("/register", { replace: true });
    }
  }, [user.accessToken]);
};