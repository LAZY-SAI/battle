import { useEffect } from "react";
import anime from "animejs";
import { FaCode, FaUsers, FaTrophy, FaHeart, FaGithub } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiPython, SiCplusplus } from "react-icons/si";
import { DiJava } from "react-icons/di";

function About() {
  useEffect(() => {
    // Animate elements on mount
    anime({
      targets: '.about-feature',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      delay: anime.stagger(100),
      easing: 'easeOutExpo'
    });

    anime({
      targets: '.team-member',
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
      delay: anime.stagger(100, {start: 500}),
      easing: 'easeOutExpo'
    });
  }, []);

  return (
    <div className="bg-slate-800 min-h-screen text-white">
      {/* Hero Section */}
      <div className="bg-slate-900 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          About CodeWar
        </h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">
          The competitive programming platform that makes coding battles exciting and rewarding
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Mission */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-300 mb-6">
            At CodeWar, we believe that competitive programming should be accessible, engaging, and fun for everyone.
            Our platform brings together programmers of all skill levels to compete, learn, and grow together.
          </p>
          <p className="text-lg text-gray-300">
            Whether you're preparing for technical interviews, honing your algorithm skills, or just love coding challenges,
            CodeWar provides the perfect environment to test your abilities against others in real-time.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <FaCode className="text-4xl mb-4 text-blue-500" />, 
              title: "Real-Time Coding", 
              text: "Compete in live coding battles with real-time results and rankings." },
            { icon: <FaUsers className="text-4xl mb-4 text-green-500" />, 
              title: "Community Driven", 
              text: "Join a growing community of passionate programmers from around the world." },
            { icon: <FaTrophy className="text-4xl mb-4 text-yellow-500" />, 
              title: "Rewarding Challenges", 
              text: "Earn badges, rankings, and prizes for your coding prowess." }
          ].map((feature, index) => (
            <div 
              key={index}
              className="about-feature bg-slate-900 p-8 rounded-lg border border-slate-700 hover:border-blue-500 transition-all"
            >
              {feature.icon}
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="bg-slate-900 rounded-lg p-8 mb-16 border border-slate-700">
          <h2 className="text-3xl font-bold mb-8 text-center">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: <SiTypescript className="text-5xl text-blue-500" />, name: "TypeScript" },
              { icon: <SiJavascript className="text-5xl text-yellow-400" />, name: "JavaScript" },
              { icon: <SiPython className="text-5xl text-blue-400" />, name: "Python" },
              { icon: <DiJava className="text-5xl text-red-500" />, name: "Java" },
              { icon: <SiCplusplus className="text-5xl text-blue-600" />, name: "C++" }
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center hover:scale-105">
                {tech.icon}
                <span className="mt-2">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Bipin Karmacharya", role: "Backend ", avatar: "BK" },
              { name: "Madhav Shrestha", role: "Backend",  avatar: "MS" },
              { name: "Sita Shrestha", role: "Supervisor",  avatar: "SS" },
              {name:"Rahul Baal", role:"Frontend", avatar:"RB"}
            ].map((member, index) => (
              <div 
                key={index}
                className="team-member bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-pink-500 transition-all"
              >
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
                <p className="text-blue-400 text-center mb-4">{member.role}</p>
                <p className="text-gray-400 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Source */}
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg p-8 border border-purple-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Open Source</h2>
              <p className="text-gray-300 max-w-lg">
                CodeWar is open source and we welcome contributions from the community.
                Help us build the future of competitive programming!
              </p>
            </div>
            <a
              href="https://github.com/yourusername/codewar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium flex items-center hover:bg-gray-200 transition-all"
            >
              <FaGithub className="mr-2 text-lg" />
              Contribute on GitHub
            </a>
          </div>
        </div>

        {/* Love */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <FaHeart className="mx-2 text-red-500" /> by programmers, for programmers
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;