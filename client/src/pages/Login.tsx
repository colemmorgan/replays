import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../atoms/userState";

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

  const navigate = useNavigate()

  const loginUser = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await axios.post("/login", { email, password }, { withCredentials: true });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({ email: "", password: "" });
        axios.get('/profile', { withCredentials: true })
          .then(({ data }) => {
            setUser(data);
          })
          .catch(error => {
            console.error('Error fetching profile:', error);
          });
        navigate('/');
      }
    } catch (error: any) {
      toast.error(error.response?.data?.error || "An error occurred");
    }
  };
  return (
    <div className="">
      <form action="" onSubmit={loginUser}>
        <label htmlFor="" className="px-2">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter Name"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="bg-black text-white px-2 py-1"
        />
        <label htmlFor="" className="px-2">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter Email"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className="bg-black text-white px-2 py-1"
        />
        <button type="submit" className="block m-2">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
