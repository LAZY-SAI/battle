import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import anime from "animejs";
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

const codeSnippet = `function battle(players) {
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
  const navigate = useNavigate();
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const codeCardRef = useRef(null);
  const featureRefs = useRef([]);
  const testimonialRefs = useRef([]);
  const ctaRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Competitions", path: "/competition" },
    { name: "LeaderBoards", path: "/leader" },
    { name: "About", path: "/about" },
  ];
  // Initialize prism highlighting
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  // Main animations
  useEffect(() => {
    // Hero section animations
    anime({
      targets: title1Ref.current,
      translateX: [-100, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutExpo",
    });

    anime({
      targets: title2Ref.current,
      translateX: [100, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: 300,
      easing: "easeOutExpo",
    });

    anime({
      targets: codeCardRef.current,
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 800,
      delay: 600,
      easing: "easeOutExpo",
    });

    // Hero buttons animation
    anime({
      targets: ".hero-buttons button",
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      delay: anime.stagger(200, { start: 900 }),
      easing: "easeOutExpo",
    });

    // Features animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: entry.target,
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 800,
              easing: "easeOutExpo",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Navbar animation when menu opens/closes
  useEffect(() => {
    if (isOpen) {
      anime({
        targets: ".mobile-menu a",
        translateX: [-20, 0],
        opacity: [0, 1],
        duration: 300,
        delay: anime.stagger(100),
        easing: "easeOutExpo",
      });
    }
  }, [isOpen]);

  const handleMatch = () => {
    // Button click animation
    anime({
      targets: ".start-match-btn",
      scale: [1, 0.9, 1],
      duration: 300,
      easing: "easeInOutQuad",
    });
    setTimeout(() => navigate("/dashboard"), 300);
  };

  return (
    <div className="bg-slate-800 min-h-screen text-white">
      {/* Navbar */}
      <nav className="w-full h-16 flex items-center justify-between px-4 sm:px-6 sticky top-0 bg-slate-800 z-10 border-b border-slate-700">
        {/* Logo with animation */}
        <div className="flex items-center">
          <h1 className="font-bold text-2xl mr-4 sm:mr-10 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text hover:scale-105 transition-transform">
            CODEWAR
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <ul className="flex items-center space-x-6 lg:space-x-10">
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className="text-white text-sm hover:text-blue-400 transition-colors relative group"
                >
                  {name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="bg-transparent hover:bg-blue-600 text-white px-4 py-2 border border-blue-500 rounded-md text-sm transition-all hover:scale-105"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-all hover:scale-105"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none transition-transform hover:scale-110"
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
          <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-800 border-t border-slate-700 mobile-menu">
            <div className="px-4 py-2 space-y-4">
              {["Home", "Competitions", "LeaderBoards", "About"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="block text-white hover:text-blue-400 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="flex space-x-4 pt-2 pb-4">
                <button className="bg-transparent hover:bg-blue-600 text-white px-4 py-2 border border-blue-500 rounded-md text-sm transition-colors w-full text-center hover:scale-105">
                  Login
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors w-full hover:scale-105">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col bg-slate-900 md:flex-row gap-12 items-center text-center rounded mt-12">
          <div className="flex-1 px-5 py-12">
            <h1 className="font-bold text-5xl md:text-6xl mb-4" ref={title1Ref}>
              REAL-TIME
            </h1>
            <h2
              className="font-bold text-5xl md:text-6xl text-blue-500 mb-6"
              ref={title2Ref}
            >
              CODING BATTLES
            </h2>
            <p className="text-xl max-w-lg mb-8 ml-[5rem] animate-on-scroll">
              Compete head-to-head with programmers worldwide, solve challenges
              in real-time, and climb the global leaderboards.
            </p>
            <div className="flex gap-4 justify-center hero-buttons">
              <button
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition-all hover:scale-105 start-match-btn"
                onClick={handleMatch}
              >
                <FaBolt /> Start Match
              </button>
              <button
                className="flex items-center gap-2 bg-transparent hover:bg-blue-600 text-white px-6 py-3 border border-blue-500 rounded-md transition-all hover:scale-105"
                onClick={() => navigate("/option")}
              >
                <FaUserGroup /> Join Match
              </button>
            </div>
          </div>

          {/* Code Card */}
          <div
            className="flex-1x-auto md:mx-0 bg-slate-700 rounded-lg p-6 shadow-xl border border-slate-600 mt-12 -translate-x-8 translate-y-2"
            ref={codeCardRef}
          >
            <div className="flex items-center gap-2 mb-4 -mt-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-400 ml-2 text-sm">battle.js</span>
            </div>
            <pre className="!m-0 !p-0 !bg-transparent overflow-x-auto">
              <code className="language-javascript">{codeSnippet}</code>
            </pre>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32 text-center">
          <h2 className="font-bold text-3xl mb-4 text-blue-500 animate-on-scroll">
            FEATURES
          </h2>
          <h3 className="text-4xl text-white-400 mb-12 font-bold animate-on-scroll">
            Not Just Another Coding Platform
          </h3>
          <p className="text-xl mx-auto max-w-lg text-center px-4 animate-on-scroll">
            Code, compete, and collaborate in real-time with features designed
            for competitive programmers.
          </p>

          <div className="grid grid-cols-2 grid-rows-3 gap-4 mt-12 ml-[4rem]">
            {[
              {
                icon: <FaBolt className="text-5xl text-blue-500 mb-4" />,
                title: "Real-Time Battles",
                text: "Compete in real-time with players worldwide.",
              },
              {
                icon: <FaUserGroup className="text-5xl text-blue-500 mb-4" />,
                title: "Multiplayer matched",
                text: "Create private rooms to compete against friends or join public contests with coders worldwide.",
              },
              {
                icon: <FaCode className="text-5xl text-blue-500 mb-4" />,
                title: "Multiple Languages",
                text: "Solve problems in your language of choice. We support Python, Java, C++, JavaScript, and more.",
              },
              {
                icon: (
                  <GoCommandPalette className="text-5xl text-blue-500 mb-4" />
                ),
                title: "Code Collaboration",
                text: "Work together in team matches with real-time code sharing and pair programming features.",
              },
              {
                icon: <FaTrophy className="text-5xl text-blue-500 mb-4" />,
                title: "Global Leaderboards",
                text: "Track your progress and compare yourself against the best competitive programmers worldwide.",
              },
              {
                icon: <FaChartBar className="text-5xl text-blue-500 mb-4" />,
                title: "Performance Analytics",
                text: "Detailed breakdowns of your solution efficiency with comparisons to other approaches.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center mt-8 animate-on-scroll"
                ref={(el) => (featureRefs.current[index] = el)}
              >
                {feature.icon}
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-400 max-w-xs">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mt-32 text-center">
          <h1 className="text-4xl font-bold text-sky-600 animate-on-scroll">
            How It Works
          </h1>
          <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center text-white mb-12 animate-on-scroll">
              Join the Battle in 3 Simple Steps
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
              {[
                {
                  num: 1,
                  title: "Create or Join a Match",
                  text: "Start a new coding battle or join an existing one. Choose from different difficulty levels and programming languages.",
                },
                {
                  num: 2,
                  title: "Solve the Challenge",
                  text: "Read the problem statement, write your solution in the code editor, and submit it before time runs out.",
                },
                {
                  num: 3,
                  title: "See the Results",
                  text: "Watch real-time rankings as solutions are evaluated. See how your approach compares to others.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-transparent hover:border-blue-500 animate-on-scroll hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                      {step.num}
                    </div>
                    <h2 className="text-xl font-semibold text-white">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-gray-300">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-32 text-center">
          <h1 className="text-2xl font-bold text-sky-600 animate-on-scroll">
            Testimonials
          </h1>
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-white mb-12 animate-on-scroll">
              What Our Users Say
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-15">
              {[
                {
                  initials: "JD",
                  name: "John Doe",
                  role: "Competitive Programmer",
                  quote:
                    "CodeWar has transformed the way I practice coding. The real-time battles are exhilarating!",
                },
                {
                  initials: "AS",
                  name: "Alice Smith",
                  role: "Software Engineer",
                  quote:
                    "The competitive environment pushed me to improve my problem-solving skills dramatically.",
                },
                {
                  initials: "RJ",
                  name: "Robert Johnson",
                  role: "CS Student",
                  quote:
                    "Perfect platform for preparing for coding interviews. The leaderboards add great motivation!",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-lg transition-all border border-transparent hover:border-blue-500 animate-on-scroll hover:scale-105"
                  ref={(el) => (testimonialRefs.current[index] = el)}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="flex flex-col bg-gradient-to-br from-gray-800 via-gray-900 to-black md:flex-row gap-12 items-center text-center rounded-xl mt-12 border border-gray-700 p-8 animate-on-scroll"
          ref={ctaRef}
        >
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
                onClick={() => {
                  anime({
                    targets: ".cta-button",
                    scale: [1, 0.95, 1],
                    duration: 300,
                  });
                  navigate("/login");
                }}
              >
                Sign In
              </button>
            </div>
          </div>

          <div className="flex-1 bg-slate-700 rounded-lg p-6 shadow-xl border border-slate-600">
            <div className="flex items-center gap-2 mb-4 -mt-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-400 ml-2 text-sm">codewar.js</span>
            </div>
            <pre className="!m-0 !p-0 !bg-transparent overflow-x-auto">
              <code className="language-javascript">
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
        <footer className="bg-slate-900 text-center py-20 mt-32 w-full animate-on-scroll">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-center space-x-6 mb-6">
              {[
                {
                  icon: <FaFacebook className="w-6 h-6" />,
                  url: "https://facebook.com",
                },
                {
                  icon: <FaGithub className="w-6 h-6" />,
                  url: "https://github.com",
                },
                {
                  icon: <FaLinkedin className="w-6 h-6" />,
                  url: "https://linkedin.com",
                },
                {
                  icon: <FaTwitter className="w-6 h-6" />,
                  url: "https://twitter.com",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-all hover:scale-125"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <p className="text-gray-400 text-sm mb-4">
              &copy; {new Date().getFullYear()} CodeWar. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Contact Us",
                "About",
              ].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-blue-400 transition-colors hover:underline"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
