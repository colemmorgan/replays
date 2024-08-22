import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { PiHandWavingFill } from "react-icons/pi";

type RegisterProps = {};

const Register: React.FC<RegisterProps> = () => {
  type RegisterCredentials = {
    name: string;
    email: string;
    password: string;
    epicId: string;
    epicUsername: string;
  };
  const [data, setData] = useState<RegisterCredentials>({
    name: "",
    email: "",
    password: "",
    epicId: "",
    epicUsername: "",
  });

  const navigate = useNavigate();

  const registerUser = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const { name, email, password, epicId, epicUsername } = data;
    try {
      const { data } = await axios.post("/register", { name, email, password, epicId, epicUsername });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({
          name: "",
          email: "",
          password: "",
          epicId: "",
          epicUsername: "",
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
        <p className="text-xl font-semibold">
          Re<span className="text-red">Played</span>
        </p>
        <ul className="flex gap-8 text-sm">
          <Link to="/">Home</Link>
          <Link to="/">Register</Link>
        </ul>
      </nav>
      <div className="min-h-[calc(100vh-90px)] pt-16">
        <div className="border border-white border-opacity-25 rounded-xl overflow-hidden max-w-[600px] mx-auto py-12 px-12 flex flex-col items-center">
          <span className="text-red text-3xl"><PiHandWavingFill/></span>
          <p className="mt-4 text-2xl font-semibold">Welcome to Re<span className="text-red">Played</span></p>
          <p className="mt-2 opacity-80">Enter your credentials to register.</p>
          <form action="" className="w-full mt-8">
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-sm">Epic Username:</label>
              <input type="text" className="py-1.5 px-4 outline-none border border-white border-opacity-25 rounded-md focus:border-red"/>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <label htmlFor="" className="text-sm">Epic Id:</label>
              <input type="text" className="py-1.5 px-4 outline-none border border-white border-opacity-25 rounded-md focus:border-red"/>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <label htmlFor="" className="text-sm">Email:</label>
              <input type="text" className="py-1.5 px-4 outline-none border border-white border-opacity-25 rounded-md focus:border-red"/>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <label htmlFor="" className="text-sm">Password:</label>
              <input type="text" className="py-1.5 px-4 outline-none border border-white border-opacity-25 rounded-md focus:border-red"/>
            </div>
            <button type="submit" className="bg-red mt-8 w-full rounded-md py-1.5">Login</button>
            <p className="text-sm mt-6">Already have an account? <Link to={"/login"}><span className="text-red underline">Sign In</span></Link></p>
          </form>
        </div>
      </div></>
  );
};
export default Register;
