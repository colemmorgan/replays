import axios from "axios";
import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
  DragEvent,
  useRef,
} from "react";
import { userState } from "../../atoms/userState";
import { useRecoilValue } from "recoil";

type UploadProps = {};

const Upload: React.FC<UploadProps> = () => {
  const [file, setFile] = useState<File | null>(null);
  const user = useRecoilValue(userState);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!user) {
      console.log("no user");
      return;
    }
    if (file) {
      const formData = new FormData();
      formData.append("replayFile", file);
      formData.append("userId", user.id || "");

      try {
        const response = await axios.post("/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        });
        console.log("File uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      console.log("No file selected");
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFileChange({ target: { files } } as ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div className="min-h-[800px] justify-center items-center">
      <p className="text-dull">Replay upload station:</p>
      <form action="" onSubmit={handleSubmit}>
        <div
          className="w-full min-h-[500px] mt-4 border border-red border-dashed flex flex-col items-center justify-center"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <p className="text-3xl">
            Drop a replay file here to upload
          </p>
          <p className="my-6 text-lg"> or</p>
          <button className="bg-red font-semibold py-2 px-32 rounded-md" onClick={handleButtonClick}>
            Add replay from files
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
            accept=".replay"
          />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Upload;
