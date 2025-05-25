import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function Ide() {
  const [selected, setSelected] = useState("");
  const [code, setCode] = useState(``);
  const [status, setStatus] = useState("Not Submitted");
   const handleSubmit =() =>
   {
    setStatus("Submitted");
   }
  const handleChange = (e) => {
    setSelected(e.target.value);
    setCode(``);
  };
  const navigate = useNavigate();
  const handleLeave = () => {
    navigate("/home");
  };

  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  // Format time as MM:SS
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="bg-slate-800 min-h-screen text-white flex flex-col">
      {/* Header */}
      <div className="w-full h-16 flex items-center justify-between px-4 sm:px-6 sticky top-0 bg-slate-800 z-10 border-b border-slate-700">
        <button
          className="flex flex-row items-center gap-x-2 bg-red-600 text-white px-4 py-2 rounded-md text-sm ml-5 font-semibold hover:bg-red-700 transition-colors duration-200"
          onClick={handleLeave}
        >
          <FaArrowLeft /> Leave Match
        </button>
        <div className="text-2xl font-bold text-white">
          Time-Left:{" "}
          <span className="text-blue-400 font-bold">
            {minutes}:{seconds}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex overflow-hidden">
        {/* Problem Statement Column */}
        <div className="w-1/2 p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold">Problem Statement</h1>
          <h2 className="text-xl font-semibold mt-4">Two Sum</h2>
          <div className="text-sm text-white-400 text-xl font-semibold mt-5">
            Given an array of integers nums and an integer target, return
            indices of the two numbers such that they add up to target. You may
            assume that each input would have exactly one solution, and you may
            not use the same element twice. You can return the answer in any
            order. You can return the answer in any order.
          </div>
          <div className="w-full h-[20rem] bg-gray-900 mt-4 border border-slate-800 rounded-xl py-3 px-4">
            <h2 className="text-lg font-semibold mt-4">Example 1:</h2>
            <div className="text-sm text-white-400 mt-2 font-semibold text-xl flex flex-col gap-2">
              <p>Input: nums = [2,7,11,15], target = 9</p>
              <p>Output: [0,1]</p>
              <p>
                Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
              </p>
            </div>
          </div>
        </div>

        {/* Code Editor Column */}
        <div className="w-1/2 p-6 overflow-y-auto">
          <div className="p-4 flex flex-row gap-6">
            <label className="block mb-2 text-sm font-medium text-white">
              Choose a language
            </label>
            <select
              value={selected}
              onChange={handleChange}
              className="bg-slate-700 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            
            >
            
              <option value="cpp">C++</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
              <option value="js">JavaScript</option>
            </select>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm ml-5" onClick={handleSubmit}>
              Submit
            </button>
            <div className="text-sm text-gray-400 mt-2 flex justify-end ml-2">
             <p className="text-xl font-bold">Status: {status}</p>
              </div>
          </div>

          <div className="w-full h-[30rem] bg-gray-900 border border-slate-800 rounded-xl py-3 px-4">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full bg-gray-900 text-white p-4 border-none outline-none resize-none font-mono text-sm"
              placeholder="// Write your code here..."
              spellCheck={false}
            ></textarea>
            
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <h2 className="font-bold mt-3 text-xl">Live Feed</h2>

            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <div className="text-sm text-gray-400">
                <p className="font-semibold">User1:</p>
                <p>Started coding...</p>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ide;
