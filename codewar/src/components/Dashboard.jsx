import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars,FaTrophy } from "react-icons/fa6";
import { FaTimes,FaClock } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/home");
   
  };
  const handlePractice = () => {
    navigate("/practice");
  }

  return (
    <div className="bg-slate-800 min-h-screen text-white">
      {/* Navbar */}
      <nav className="w-full h-16 flex items-center justify-between px-4 sm:px-6 sticky top-0 bg-slate-800 z-10 border-b border-slate-700">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="font-bold text-2xl mr-4 sm:mr-10 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            CODEWAR
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <ul className="flex items-center space-x-6 lg:space-x-10">
            <Link
              to="/"
              className="text-white text-sm hover:text-blue-400 transition-colors"
            >
              OverView
            </Link>
            <Link
              to="/competitions"
              className="text-white text-sm hover:text-blue-400 transition-colors"
            >
              My Matches
            </Link>
            <Link
              to="/leaderboards"
              className="text-white text-sm hover:text-blue-400 transition-colors"
            >
              LeaderBoards
            </Link>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <span className="text-white-400 font-bold">
            Welcome back, Player 1{" "}
          </span>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors"
            onClick={handleLogout}
          >
            Sign Out
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-2 space-y-4">
              <Link
                to="/"
                className="block text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                OverView
              </Link>
              <Link
                to="/competitions"
                className="block text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                My Matches
              </Link>
              <Link
                to="/leaderboards"
                className="block text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                LeaderBoards
              </Link>

              <button
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors w-full"
                onClick={handleLogout}
              >
                Signout
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Two-row layout */}
        <div className="grid grid-cols-1 gap-8">
          {/* First Row - Quick Actions and Recent Matches */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Quick Actions Box */}
            <div className="bg-slate-700 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
                  + Create New Match
                </button>
                <button className="w-full bg-slate-600 hover:bg-slate-500 text-white py-2 px-4 rounded-md transition-colors">
                  Join Existing Match
                </button>
                <button className="w-full bg-slate-600 hover:bg-slate-500 text-white py-2 px-4 rounded-md transition-colors" onClick={handlePractice}>
                  Practice Mode
                </button>
             
              </div>
            </div>

            <div className="bg-slate-700 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Recent Matches</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Two Sum</h3>
                    <p className="text-slate-400 text-sm">2024-05-18</p>
                  </div>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                    Win 08:45s
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Binary Search</h3>
                    <p className="text-slate-400 text-sm">2024-05-17</p>
                  </div>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                    Loss 16:32s
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Quick Sort</h3>
                    <p className="text-slate-400 text-sm">2024-05-16</p>
                  </div>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                    Win 11:20s
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Stats Box 1 */}
            <div className="bg-slate-700 rounded-lg p-6 shadow-lg flex flex-col items-center">
              <FaTrophy className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">Total Wins</h3>
              <p className="text-3xl font-bold">42</p>
            </div>

            <div className="bg-slate-700 rounded-lg p-6 shadow-lg flex flex-col items-center">
                         <GoGraph className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">Rank</h3>
   
              <p className="text-3xl font-bold">#156</p>
            </div>

            <div className="bg-slate-700 rounded-lg p-6 shadow-lg flex flex-col items-center">
              <FaClock className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">Avg. Time</h3>
              <p className="text-3xl font-bold">12:34s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
