import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../atoms/userState";
import { FaHandPeace } from "react-icons/fa6";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  type LoginCredentials = {
    email: string;
    password: string;
  };
  const [data, setData] = useState<LoginCredentials>({
    email: "",
    password: "",
  });

  const setUser = useSetRecoilState(userState);

  const navigate = useNavigate();

  const loginUser = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await axios.post(
        "/login",
        { email, password },
        { withCredentials: true }
      );
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({ email: "", password: "" });
        axios
          .get("/profile", { withCredentials: true })
          .then(({ data }) => {
            setUser(data);
          })
          .catch((error) => {
            console.error("Error fetching profile:", error);
          });
        navigate("/");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.error || "An error occurred");
    }
  };
  return (
    <>
      <nav className="max-w-[1100px] px-4 py-8 flex justify-between mx-auto items-center">
        <p className="text-xl font-semibold">
          Re<span className="text-red">Played</span>
        </p>
        <ul className="flex gap-8 text-sm">
          <Link to="/">Home</Link>
          <Link to="/">Register</Link>
        </ul>
      </nav>
      <div className="min-h-[calc(100vh-90px)] pt-28">
        <div className="border border-white border-opacity-25 rounded-xl overflow-hidden max-w-[600px] mx-auto py-12 px-12 flex flex-col items-center ">
          <span className="text-red text-3xl"><FaHandPeace/></span>
          <p className="mt-4 text-2xl font-semibold">Welcome back to Re<span className="text-red">Played</span></p>
          <p className="mt-2 opacity-80">Enter your credentials to login.</p>
          <form action="" className="w-full mt-8">
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-sm">Email:</label>
              <input type="text" className="py-1.5 px-4 outline-none border border-white border-opacity-25 rounded-md focus:border-red"/>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <label htmlFor="" className="text-sm">Password:</label>
              <input type="text" className="py-1.5 px-4 outline-none border border-white border-opacity-25 rounded-md focus:border-red"/>
            </div>
            <button type="submit" className="bg-red mt-8 w-full rounded-md py-1.5 text-sm">Login</button>
            <p className="text-sm mt-6">Don't have an account? <Link to={"/register"}><span className="text-red underline">Create Account</span></Link></p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
