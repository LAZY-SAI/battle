import { useState, useEffect } from "react";
import anime from "animejs";
import { FaTrophy, FaUserAlt, FaChartLine, FaGlobeAmericas, FaSearch } from "react-icons/fa";

function LeaderBoards() {
  const [activeTab, setActiveTab] = useState("global");
  const [timeRange, setTimeRange] = useState("all-time");
  const [searchQuery, setSearchQuery] = useState("");
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading leaderboard data
    setTimeout(() => {
      setLeaders([
        { rank: 1, name: "CodeMaster", score: 9850, problemsSolved: 342, country: "US", isYou: false },
        { rank: 2, name: "AlgoKing", score: 9720, problemsSolved: 335, country: "CA", isYou: false },
        { rank: 3, name: "BinaryNinja", score: 9650, problemsSolved: 328, country: "UK", isYou: false },
        { rank: 4, name: "DataWizard", score: 9520, problemsSolved: 315, country: "IN", isYou: false },
        { rank: 5, name: "SyntaxSquad", score: 9450, problemsSolved: 310, country: "AU", isYou: false },
        { rank: 6, name: "ByteMe", score: 9320, problemsSolved: 302, country: "DE", isYou: false },
        { rank: 7, name: "RecursionPro", score: 9250, problemsSolved: 298, country: "FR", isYou: false },
        { rank: 8, name: "YourUsername", score: 9150, problemsSolved: 290, country: "NE", isYou: true },
        { rank: 9, name: "LambdaLord", score: 9020, problemsSolved: 285, country: "BR", isYou: false },
        { rank: 10, name: "NullPointer", score: 8950, problemsSolved: 280, country: "JP", isYou: false }
      ]);
      setLoading(false);
    }, 1000);

    // Animate on mount
    anime({
      targets: '.leader-row',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      delay: anime.stagger(50),
      easing: 'easeOutExpo'
    });
  }, []);

  const filteredLeaders = leaders.filter(leader =>
    leader.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-slate-800 min-h-screen text-white">
      {/* Hero Section */}
      <div className="bg-slate-900 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-yellow-300 text-transparent bg-clip-text">
          LeaderBoards
        </h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">
          See where you stand among the best competitive programmers in the world
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex space-x-2">
            {['global', 'friends', 'country'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-md capitalize flex items-center ${
                  activeTab === tab 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'global' && <FaGlobeAmericas className="mr-2" />}
                {tab === 'friends' && <FaUserAlt className="mr-2" />}
                {tab === 'country' && <FaChartLine className="mr-2" />}
                {tab}
              </button>
            ))}
          </div>
          
          <div className="flex space-x-2">
            {['all-time', 'monthly', 'weekly'].map((range) => (
              <button
                key={range}
                className={`px-4 py-2 rounded-md capitalize ${
                  timeRange === range 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
                onClick={() => setTimeRange(range)}
              >
                {range}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-auto">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              className="bg-slate-700 text-white pl-10 pr-4 py-2 rounded-md w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-slate-800">
                <tr>
                  <th className="py-4 px-6 text-left">Rank</th>
                  <th className="py-4 px-6 text-left">User</th>
                  <th className="py-4 px-6 text-left">Country</th>
                  <th className="py-4 px-6 text-right">Score</th>
                  <th className="py-4 px-6 text-right">Solved</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeaders.map((leader) => (
                  <tr 
                    key={leader.rank}
                    className={`leader-row border-t border-slate-700 ${
                      leader.isYou ? 'bg-blue-900 bg-opacity-30' : 'hover:bg-slate-800'
                    }`}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        {leader.rank <= 3 ? (
                          <FaTrophy className={`mr-2 ${
                            leader.rank === 1 ? 'text-yellow-400' : 
                            leader.rank === 2 ? 'text-gray-300' : 
                            'text-yellow-700'
                          }`} />
                        ) : null}
                        {leader.rank}
                      </div>
                    </td>
                    <td className="py-4 px-6 font-medium">
                      {leader.name}
                      {leader.isYou && (
                        <span className="ml-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                          You
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6">{leader.country}</td>
                    <td className="py-4 px-6 text-right font-bold">{leader.score.toLocaleString()}</td>
                    <td className="py-4 px-6 text-right">{leader.problemsSolved}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Your Position */}
        <div className="mt-8 bg-slate-900 rounded-lg p-6 border border-slate-700">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <FaUserAlt className="mr-2 text-blue-500" />
            Your Position
          </h3>
          {loading ? (
            <div className="h-20 flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-800 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Global Rank</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Country Rank</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Total Score</p>
                <p className="text-2xl font-bold">9,150</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Problems Solved</p>
                <p className="text-2xl font-bold">290</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeaderBoards;