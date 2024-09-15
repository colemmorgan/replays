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
        toast.success("Login successful. Welcome!");
        navigate("/stats");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.error || "An error occurred");
    }
  };
  return (
    <>
      <nav className="max-w-[1100px] px-4 py-8 flex justify-between mx-auto items-center">
        <div className="text-xl font-semibold flex items-center">
          <p>
            Re<span className="text-red">Played</span>
          </p>{" "}
          <img src="/favicon.svg" alt="" className="max-w-8" />
        </div>
        <ul className="flex gap-8 text-sm">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
        </ul>
      </nav>
      <div className="min-h-[calc(100vh-90px)] pt-14 sm:pt-28">
        <div className="sm:border border-white border-opacity-25 rounded-xl overflow-hidden max-w-[600px] mx-auto py-12 px-6 sm:px-12 flex flex-col items-center">
          <span className="text-red text-3xl">
            <FaHandPeace />
          </span>
          <p className="mt-4 text-xl sm:text-2xl font-semibold">
            Welcome back to Re<span className="text-red">Played</span>
          </p>
          <p className="mt-2 opacity-80 text-sm sm:text-base">Enter your credentials to login.</p>
          <form action="" className="w-full mt-8 text-sm sm:text-base" onSubmit={loginUser}>
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-xs sm:text-sm">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="py-1.5 px-4 outline-none border border-white border-opacity-25 rounded-md focus:border-red text-sm sm:text-base"
                placeholder="email@email.com"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <label htmlFor="password" className="text-xs sm:text-sm">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="py-1.5 px-4 outline-none border border-white border-opacity-25 rounded-md focus:border-red text-sm sm:text-base"
                placeholder="Your Password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
            <p className="text-end text-[11px] sm:text-xs mt-3 underline">Forgot Password?</p>
            <button
              type="submit"
              className="bg-red mt-4 sm:mt-6 w-full rounded-md py-1.5 text-xs sm:text-sm"
            >
              Login
            </button>
            <p className="text-xs sm:text-sm mt-6">
              Don't have an account?{" "}
              <Link to={"/register"}>
                <span className="text-red underline">Create Account</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
