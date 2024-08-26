import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { PiHandWavingFill } from "react-icons/pi";
import { useSetRecoilState } from "recoil";
import { userState } from "../atoms/userState";

type RegisterProps = {};

const Register: React.FC<RegisterProps> = () => {
  type RegisterCredentials = {
    email: string;
    password: string;
    epicId: string;
    epicUsername: string;
  };
  const [data, setData] = useState<RegisterCredentials>({
    email: "",
    password: "",
    epicId: "",
    epicUsername: "",
  });

  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  const registerUser = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const { email, password, epicId, epicUsername } = data;
    try {
      const { data } = await axios.post("/register", {
        email,
        password,
        epicId,
        epicUsername,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({
          email: "",
          password: "",
          epicId: "",
          epicUsername: "",
        });
        axios
          .get("/profile", { withCredentials: true })
          .then(({ data }) => {
            setUser(data);
          })
          .catch((error) => {
            console.error("Error fetching profile:", error);
          });
        toast.success("Login successful. Welcome!");
        navigate("/");
      }
    } catch (error: any) {
      toast.error(error);
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
          <Link to="/login">Login</Link>
        </ul>
      </nav>
      <div className="min-h-[calc(100vh-90px)] pt-8 sm:pt-16">
        <div className="sm:border border-white border-opacity-25 rounded-xl overflow-hidden max-w-[600px] mx-auto py-12 px-6 sm:px-12 flex flex-col items-center">
          <span className="text-red text-3xl">
            <PiHandWavingFill />
          </span>
          <p className="mt-4 text-xl sm:text-2xl font-semibold">
            Welcome to Re<span className="text-red">Played</span>
          </p>
          <p className="mt-2 opacity-80 text-sm sm:text-base">Enter your credentials to register.</p>
          <form action="" className="w-full mt-8" onSubmit={registerUser}>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-xs sm:text-sm">
                Epic Username:
              </label>
              <input
                type="text"
                className="py-1.5 px-4 outline-none border border-white border-opacity-25 rounded-md focus:border-red text-sm sm:text-base"
                placeholder="Epic/Fortnite Username"
                value={data.epicUsername}
                onChange={(e) => setData({...data, epicUsername: e.target.value})}
              />
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <label htmlFor="" className="text-xs sm:text-sm">
                Email:
              </label>
              <input
                type="text"
                className="py-1.5 px-4 outline-none border border-white border-opacity-25 rounded-md focus:border-red text-sm sm:text-base"
                placeholder="Your Email"
                value={data.email}
                onChange={(e) => setData({...data, email: e.target.value})}
              />
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <label htmlFor="" className="text-xs sm:text-sm">
                Password:
              </label>
              <input
                type="text"
                className="py-1.5 px-4 outline-none border border-white border-opacity-25 rounded-md focus:border-red text-sm sm:text-base"
                placeholder="Secure Password"
                value={data.password}
                onChange={(e) => setData({...data, password: e.target.value})}
              />
            </div>
            <button
              type="submit"
              className="bg-red mt-6 sm:mt-8 w-full rounded-md py-1.5 text-xs sm:text-sm"
            >
              Register
            </button>
            <p className="text-xs sm:text-sm mt-6">
              Already have an account?{" "}
              <Link to={"/login"}>
                <span className="text-red underline">Sign In</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
