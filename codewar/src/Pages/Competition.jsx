import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import anime from "animejs";
import { FaTrophy, FaCalendarAlt, FaUsers, FaLock, FaGlobe } from "react-icons/fa";

function Competitions() {
  const [activeTab, setActiveTab] = useState("ongoing");
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading competitions data
    setTimeout(() => {
      setCompetitions([
        {
          id: 1,
          title: "Weekly Coding Challenge",
          description: "Solve 5 problems in 2 hours. Top 10% win prizes!",
          participants: 342,
          prize: "$500",
          status: "ongoing",
          startDate: "2023-06-01",
          endDate: "2023-06-08",
          type: "public"
        },
        {
          id: 2,
          title: "Algorithm Masters Tournament",
          description: "Advanced algorithms only. Elite competition.",
          participants: 87,
          prize: "$1000",
          status: "upcoming",
          startDate: "2023-06-15",
          endDate: "2023-06-17",
          type: "public"
        },
        {
          id: 3,
          title: "Team Coding Battle",
          description: "Form teams of 3 and compete against others.",
          participants: 56,
          prize: "Exclusive badges",
          status: "ongoing",
          startDate: "2023-06-05",
          endDate: "2023-06-07",
          type: "private"
        }
      ]);
      setLoading(false);
    }, 1000);

    // Animate on mount
    anime({
      targets: '.competition-card',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      delay: anime.stagger(100),
      easing: 'easeOutExpo'
    });
  }, []);

  const filteredCompetitions = competitions.filter(comp => 
    activeTab === "all" ? true : comp.status === activeTab
  );

  return (
    <div className="bg-slate-800 min-h-screen text-white">
      {/* Hero Section */}
      <div className="bg-slate-900 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Competitions
        </h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">
          Join thrilling coding battles, compete for prizes, and prove your skills against programmers worldwide.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Tabs */}
        <div className="flex border-b border-slate-700 mb-8">
          {['ongoing', 'upcoming', 'past', 'all'].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 font-medium capitalize ${activeTab === tab ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Competition Cards */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompetitions.map((competition) => (
              <div 
                key={competition.id}
                className="competition-card bg-slate-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all border border-slate-600 hover:border-blue-500"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{competition.title}</h3>
                    {competition.type === "private" ? (
                      <FaLock className="text-yellow-500" />
                    ) : (
                      <FaGlobe className="text-blue-500" />
                    )}
                  </div>
                  <p className="text-gray-300 mb-4">{competition.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <FaUsers className="mr-2" />
                      <span>{competition.participants} participants</span>
                    </div>
                    <div className="flex items-center">
                      <FaTrophy className="mr-2" />
                      <span>{competition.prize}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      <span>{competition.startDate} to {competition.endDate}</span>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs ${
                      competition.status === 'ongoing' ? 'bg-green-900 text-green-300' : 
                      competition.status === 'upcoming' ? 'bg-blue-900 text-blue-300' : 
                      'bg-gray-700 text-gray-300'
                    }`}>
                      {competition.status}
                    </span>
                  </div>
                </div>
                
                <div className="bg-slate-800 px-6 py-3 flex justify-end">
                  <Link
                    to={`/competitions/${competition.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-all hover:scale-105"
                  >
                    {competition.status === 'upcoming' ? 'Register Now' : 'Join Competition'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredCompetitions.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl text-gray-400 mb-4">No {activeTab} competitions found</h3>
            <p className="text-gray-500 mb-6">Check back later for new competitions</p>
            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md inline-block"
            >
              Back to Home
            </Link>
          </div>
        )}

        {/* Create Competition */}
        <div className="mt-16 bg-slate-900 rounded-lg p-8 border border-slate-700">
          <h2 className="text-2xl font-bold mb-4">Host Your Own Competition</h2>
          <p className="text-gray-400 mb-6">
            Create a private competition for your team, friends, or community with custom rules and challenges.
          </p>
          <Link
            to="/competitions/create"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md inline-block transition-all hover:scale-105"
          >
            Create Competition
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Competitions;