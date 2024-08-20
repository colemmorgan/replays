import axios from "axios";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { userState } from "../atoms/userState";
import { useRecoilValue } from "recoil";

const Home: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const user = useRecoilValue(userState);
  
  useEffect(() => {
    console.log(user)
  },[user])

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if(!user) {
      console.log("no user");
      return;
    }
    if (file) {
      const formData = new FormData();
      formData.append("replayFile", file);
      formData.append("userId", user.id || '');
  
      try {
        const response = await axios.post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true  // This ensures the cookie with the JWT is sent
        });
        console.log("File uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div className="min-h-[800px] justify-center items-center">
      <h2>Upload a .replay file</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".replay"
          onChange={handleFileChange}
        />
        <button type="submit">Upload</button>
      </form>
      {file && <p>Selected file: {file.name}</p>}
    </div>
  );
};

export default Home;
