import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaBars,
  FaBolt,
  FaUserGroup,
  FaCode,
  FaTrophy,
  FaChartBar,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

import { FaTimes } from "react-icons/fa";

import { GoCommandPalette } from "react-icons/go";

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";

const codeSnippet = `              function battle(players) {
                  const results = players.map(player => {
                    const solution = player.solve(challenge());
                    const time = performance.now();
                    return { player, solution, time };
                  });

                  // Sort by fastest correct solution
                  return results
                    .filter(s => s.solution.passed)
                    .sort((a, b) => a.time - b.time);
                }

                // Current match: 3 players, 2 correct solutions
                const winners = battle([player1, player2, player3]);
                console.log(\`winner: \${winners[0].player.name}\`);`;

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const navigate = useNavigate();
  const handleMatch = () => {
    navigate("/dashboard");
  };
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
              Home
            </Link>
            <Link
              to="/competitions"
              className="text-white text-sm hover:text-blue-400 transition-colors"
            >
              Competitions
            </Link>
            <Link
              to="/leaderboards"
              className="text-white text-sm hover:text-blue-400 transition-colors"
            >
              LeaderBoards
            </Link>
            <Link
              to="/about"
              className="text-white text-sm hover:text-blue-400 transition-colors"
            >
              About
            </Link>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="bg-transparent hover:bg-blue-600 text-white px-4 py-2 border border-blue-500 rounded-md text-sm transition-colors inline-block"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors"
          >
            Sign Up
          </Link>
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
                Home
              </Link>
              <Link
                to="/competitions"
                className="block text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Competitions
              </Link>
              <Link
                to="/leaderboards"
                className="block text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                LeaderBoards
              </Link>
              <Link
                to="/about"
                className="block text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <div className="flex space-x-4 pt-2 pb-4">
                <buttton className="bg-transparent hover:bg-blue-600 text-white px-4 py-2 border border-blue-500 rounded-md text-sm transition-colors w-full text-center">
                  Login
                </buttton>
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors w-full">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="container mx-auto  ">
        {/* Hero Section */}
        <div className="flex flex-col bg-slate-900 md:flex-row gap-12 items-center text-center rounded mt-12">
          <div className="flex-1 px-5 py-12 ">
            <h1 className="font-bold text-5xl md:text-6xl mb-4 ">REAL-TIME</h1>
            <h2 className="font-bold text-5xl md:text-6xl text-blue-500 mb-6">
              CODING BATTLES
            </h2>
            <p className="text-xl max-w-lg mb-8 ml-[5rem]">
              Compete head-to-head with programmers worldwide, solve challenges
              in real-time, and climb the global leaderboards.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition-colors"
                onClick={handleMatch}
              >
                <FaBolt /> Start Match
              </button>
              <button className="flex items-center gap-2 bg-transparent hover:bg-blue-600 text-white px-6 py-3 border border-blue-500 rounded-md transition-colors"
              onClick={() => 
                navigate('/option')
              }>
                <FaUserGroup /> Join Match
              </button>
            </div>
          </div>

          {/* Code Card */}
          <div className="flex-1x-auto md:mx-0  bg-slate-700 rounded-lg p-6 shadow-xl border border-slate-600 mt-12  -translate-x-8 translate-y-2">
            <div className="flex items-center gap-2 mb-4 -mt-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-400 ml-2 text-sm">battle.js</span>
            </div>
            <pre className="!m-0 !p-0 !bg-transparent overflow-x-auto ">
              <code className="language-javascript ">{codeSnippet}</code>
            </pre>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32 text-center">
          <h2 className="font-bold text-3xl mb-4 text-blue-500">FEATURES</h2>
          <h3 className="text-4xl text-white-400 mb-12 font-bold">
            Not Just Another Coding Platform
          </h3>
          <p className="text-xl mx-auto max-w-lg text-center px-4">
            Code, compete, and collaborate in real-time with features designed
            for competitive programmers.
          </p>

          <div className="  grid grid-cols-2 grid-rows-3 gap-4 mt-12 ml-[4rem]">
            <div className="col-start-1 col-end-2 row-start-1 row-end-4">
              <div className="flex flex-col items-center">
                <FaBolt className="text-5xl text-blue-500 mb-4" />
                <h4 className="text-xl font-bold mb-2">Real-Time Battles</h4>
                <p className="text-sm text-gray-400">
                  Compete in real-time with players worldwide.
                </p>
              </div>
              <div className="flex flex-col items-center mt-8">
                <FaUserGroup className="text-5xl text-blue-500 mb-4" />
                <h4 className="text-xl font-bold mb-2">Multiplayer matched</h4>
                <p className="text-sm text-gray-400">
                  Create private rooms to compete against friends or join public
                  contests with coders worldwide.
                </p>
              </div>
              <div className="flex flex-col items-center mt-8">
                <FaCode className="text-5xl text-blue-500 mb-4" />

                <h4 className="text-xl font-bold mb-2">Multiple Languages</h4>
                <p className="text-sm text-gray-400">
                  Solve problems in your language of choice. We support Python,
                  Java, C++, JavaScript, and more.
                </p>
              </div>
            </div>
            <div className="col-start-2 col-end-3 row-start-1 row-end-4">
              <div className="flex flex-col items-center">
                <GoCommandPalette className="text-5xl text-blue-500 mb-4" />
                <h4 className="text-xl font-bold mb-2">Code Collaboration</h4>
                <p className="text-sm text-gray-400">
                  Work together in team matches with real-time code sharing and
                  pair programming features..
                </p>
              </div>
              <div className="flex flex-col items-center mt-8">
                <FaTrophy className="text-5xl text-blue-500 mb-4" />
                <h4 className="text-xl font-bold mb-2">Global Leaderboards</h4>
                <p className="text-sm text-gray-400">
                  Track your progress and compare yourself against the best
                  competitive programmers worldwide.
                </p>
              </div>
              <div className="flex flex-col items-center mt-8">
                <FaChartBar className="text-5xl text-blue-500 mb-4" />

                <h4 className="text-xl font-bold mb-2">
                  Performance Analytics
                </h4>
                <p className="text-sm text-gray-400">
                  Detailed breakdowns of your solution efficiency with
                  comparisons to other approaches.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="mt-32 text-center">
          <h1 className="text-4xl font-bold text-sky-600">How It Works</h1>
          <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center text-white mb-12">
              Join the Battle in 3 Simple Steps
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
              <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-transparent hover:border-blue-500">
                {" "}
            
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                    1
                  </div>
                  <h2 className="text-xl font-semibold text-white">
                    Create or Join a Match
                  </h2>
                </div>
                <p className="text-gray-300">
                  Start a new coding battle or join an existing one. Choose from
                  different difficulty levels and programming languages.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-transparent hover:border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                    2
                  </div>
                  <h2 className="text-xl font-semibold text-white">
                    Solve the Challenge
                  </h2>
                </div>
                <p className="text-gray-300">
                  Read the problem statement, write your solution in the code
                  editor, and submit it before time runs out.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-transparent hover:border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                    3
                  </div>
                  <h2 className="text-xl font-semibold text-white">
                    See the Results
                  </h2>
                </div>
                <p className="text-gray-300">
                  Watch real-time rankings as solutions are evaluated. See how
                  your approach compares to others.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* testimonials */}
        <div className="mt-32 text-center">
          <h1 className="text-2xl  font-bold text-sky-600">Testimonials</h1>
          <div className="max-w-6xl mx-auto ">
            <h1 className="text-4xl font-bold text-center text-white mb-12">
              What Our Users Say
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-15">
              {/* Card 1 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-lg transition-shadow w-sm border border-transparent hover:border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                    JD
                  </div>
                  <div>
                    <p className="font-semibold text-white">John Doe</p>
                    <p className="text-gray-400 text-sm">
                      Competitive Programmer
                    </p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "CodeWar has transformed the way I practice coding. The
                  real-time battles are exhilarating!"
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-lg transition-shadow w-sm border border-transparent hover:border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                    AS
                  </div>
                  <div>
                    <p className="font-semibold text-white">Alice Smith</p>
                    <p className="text-gray-400 text-sm">Software Engineer</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "The competitive environment pushed me to improve my
                  problem-solving skills dramatically."
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-lg transition-shadow w-sm border border-transparent hover:border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                    RJ
                  </div>
                  <div>
                    <p className="font-semibold text-white">Robert Johnson</p>
                    <p className="text-gray-400 text-sm">CS Student</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "Perfect platform for preparing for coding interviews. The
                  leaderboards add great motivation!"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* big card*/}
        <div className="flex flex-col bg-gradient-to-br from-gray-800 via-gray-900 to-black md:flex-row gap-12 items-center text-center rounded-xl mt-12 border border-gray-700 p-8">
          {/* Text content side */}
          <div className="flex-1 px-5 py-12">
            <h1 className="font-bold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Ready to test your skills?
            </h1>
            <h2 className="font-bold text-3xl md:text-4xl text-cyan-400 mb-6">
              Join CodeWar today!
            </h2>
            <p className="text-xl max-w-lg mb-8 mx-auto">
              Whether you're preparing for interviews or just love coding
              challenges, CodeWar will push your skills to the limit.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-md transition-all transform hover:scale-105"
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>
            </div>
          </div>

          {/* Code Card side - matching hero section style */}
          <div className="flex-1 bg-slate-700 rounded-lg p-6 shadow-xl border border-slate-600">
            <div className="flex items-center gap-2 mb-4 -mt-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-400 ml-2 text-sm">codewar.js</span>
            </div>
            <pre className="!m-0 !p-0 !bg-transparent overflow-x-auto">
              <code className="language-javascript ">
                {`class CodeWar {
  constructor() {
    this.players = [];
    this.challenges = [];
  }

  join(player) {
    this.players.push(player);
    console.log(\`Player \${player.name} joined the battle!\`);
  }

  startBattle() {
    const challenge = this.getRandomChallenge();
    console.log(\`Battle started with challenge: \${challenge.title}\`);
    return challenge;
  }
}`}
              </code>
            </pre>
          </div>
        </div>
        {/* Footer */}
        <footer className="bg-slate-900 text-center py-20 mt-32 w-full ">
          <div className="max-w-6xl mx-auto px-4">
            {/* Social Media Links with Icons */}
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>

            {/* Copyright and Links */}
            <p className="text-gray-400 text-sm mb-4">
              &copy; {new Date().getFullYear()} CodeWar. All rights reserved.
            </p>

            {/* Additional Links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
              <Link to="/" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/" className="hover:text-blue-400 transition-colors">
                Contact Us
              </Link>
              <Link to="/" className="hover:text-blue-400 transition-colors">
                About
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Home;
