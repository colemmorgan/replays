import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
    <div className="">
      <form
        action=""
        onSubmit={registerUser}
        className="min-h-[600px] w-full px-4 flex flex-col items-center justify-center gap-y-3"
      >
        <div className="flex flex-col w-full">
          <label htmlFor="" className="">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className="bg-black text-white px-2 py-1"
          />
        </div>
        <div className="flex flex-col  w-full">
          <label htmlFor="" className="">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="bg-black text-white px-2 py-1"
          />
        </div>
        <div className="flex flex-col  w-full">
          <label htmlFor="" className="">
            Epic Account Username
          </label>
          <input
            type="text"
            placeholder="Enter Epic Username"
            value={data.epicUsername}
            onChange={(e) => setData({ ...data, epicUsername: e.target.value })}
            className="bg-black text-white px-2 py-1"
          />
        </div>
        <div className="flex flex-col  w-full">
          <label htmlFor="" className="">
            Epic Account Id
          </label>
          <input
            type="text"
            placeholder="Enter Epic Id"
            value={data.epicId}
            onChange={(e) => setData({ ...data, epicId: e.target.value })}
            className="bg-black text-white px-2 py-1"
          />
        </div>
        <div className="flex flex-col  w-full">
          <label htmlFor="" className="">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className="bg-black text-white px-2 py-1"
          />
        </div>
        <button
          type="submit"
          className=" p-1 w-full mt-3 bg-black text-white text-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Register;
