"use client";

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const companies = [
  { name: "Anodos", photo: "/anodos.svg" },
  { name: "Intelcoin", photo: "/intel.png" },
  { name: "Binance", photo: "/binance.png" },
  { name: "Crypto", photo: "crypto.png" },
  { name: "Zilliqa Zil", photo: "zilli.webp" },
];

const Vote = () => {
  const router = useRouter();

  const handleVote = () => {
    Swal.fire({
      title: "Success!",
      text: "You have successfully voted!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <h2 className="text-3xl font-bold text-white mb-8">
        Welcome to our Voting System
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <img
              src={company.photo}
              alt={company.name}
              className="w-24 h-24 object-contain mb-4"
            />
            <h3 className="text-2xl font-semibold text-white mb-2">
              {company.name}
            </h3>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleVote}
            >
              Vote for {company.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vote;
