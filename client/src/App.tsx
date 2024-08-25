import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import ProfileLoader from "./components/ProfileLoader";
import Stats from "./pages/Stats";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
      <ProfileLoader />
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stats" element={<Stats/>}/>
      </Routes>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
