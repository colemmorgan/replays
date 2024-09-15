import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../atoms/userState";
import { toast } from "react-hot-toast";

const useLogoutUser = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);
  const logout = useCallback(async () => {
    try {
      await fetch("/logout", {
        method: "POST",
        credentials: "include",
      });
      navigate("/");
      setUser(null)
      toast.success("Logout Successful");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout Failed");
    }
  }, []);

  return logout;
};

export default useLogoutUser;
