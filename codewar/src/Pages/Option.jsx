import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTh, FaList, FaRandom, FaArrowLeft } from 'react-icons/fa';

function Option() {
  const navigate = useNavigate();
  const [layout, setLayout] = useState('grid');
  const [problems, setProblems] = useState([
    {
      id: 1,
      title: "Two Sum",
      description: "Find two numbers that add up to a target.",
      time: "10-15 min",
      points: "100 pts",
      borderColor: "border-blue-500",
      pointsColor: "text-blue-400",
      difficulty: "easy",
      statement: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      examples: [
        {
          input: "nums = [2,7,11,15], target = 9",
          output: "[0,1]",
          explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
        }
      ]
    },
    {
      id: 2,
      title: "Reverse String",
      description: "Reverse a string in-place.",
      time: "5-10 min",
      points: "80 pts",
      borderColor: "border-green-500",
      pointsColor: "text-green-400",
      difficulty: "easy",
      statement: "Write a function that reverses a string in-place without using extra memory.",
      examples: [
        {
          input: "['h','e','l','l','o']",
          output: "['o','l','l','e','h']",
          explanation: "The string is reversed in the original array."
        }
      ]
    },
    {
      id: 3,
      title: "Binary Search",
      description: "Implement binary search algorithm.",
      time: "15-20 min",
      points: "150 pts",
      borderColor: "border-yellow-500",
      pointsColor: "text-yellow-400",
      difficulty: "medium",
      statement: "Given a sorted array of integers and a target value, return the index if the target is found. If not, return where it would be inserted.",
      examples: [
        {
          input: "nums = [1,3,5,6], target = 5",
          output: "2",
          explanation: "5 exists in nums and its index is 2."
        }
      ]
    },
    {
      id: 4,
      title: "Linked List Cycle",
      description: "Detect cycle in a linked list.",
      time: "20-25 min",
      points: "200 pts",
      borderColor: "border-purple-500",
      pointsColor: "text-purple-400",
      difficulty: "medium",
      statement: "Given head of a linked list, determine if it contains a cycle.",
      examples: [
        {
          input: "head = [3,2,0,-4], pos = 1",
          output: "true",
          explanation: "Last node connects to node at index 1."
        }
      ]
    },
    {
      id: 5,
      title: "Merge K Sorted Lists",
      description: "Merge multiple sorted linked lists.",
      time: "30-40 min",
      points: "300 pts",
      borderColor: "border-pink-500",
      pointsColor: "text-pink-400",
      difficulty: "hard",
      statement: "Merge k sorted linked lists and return one sorted list.",
      examples: [
        {
          input: "lists = [[1,4,5],[1,3,4],[2,6]]",
          output: "[1,1,2,3,4,4,5,6]",
          explanation: "All lists merged in sorted order."
        }
      ]
    },
    {
      id: 6,
      title: "Sliding Window Maximum",
      description: "Find maximum in sliding window.",
      time: "25-35 min",
      points: "250 pts",
      borderColor: "border-red-500",
      pointsColor: "text-red-400",
      difficulty: "hard",
      statement: "Given an array and window size k, find the max in each sliding window.",
      examples: [
        {
          input: "nums = [1,3,-1,-3,5,3,6,7], k = 3",
          output: "[3,3,5,5,6,7]",
          explanation: "Window positions and their maxima."
        }
      ]
    },
    {
      id: 7,
      title: "Valid Sudoku",
      description: "Check if Sudoku board is valid.",
      time: "20-30 min",
      points: "180 pts",
      borderColor: "border-indigo-500",
      pointsColor: "text-indigo-400",
      difficulty: "medium",
      statement: "Determine if a 9x9 Sudoku board is valid according to Sudoku rules.",
      examples: [
        {
          input: "9x9 board with numbers",
          output: "true/false",
          explanation: "Check rows, columns and 3x3 sub-boxes."
        }
      ]
    },
    {
      id: 8,
      title: "Word Break",
      description: "Determine if word can be segmented.",
      time: "25-35 min",
      points: "220 pts",
      borderColor: "border-teal-500",
      pointsColor: "text-teal-400",
      difficulty: "medium",
      statement: "Given a string and dictionary, determine if string can be segmented into words.",
      examples: [
        {
          input: "s = 'leetcode', wordDict = ['leet','code']",
          output: "true",
          explanation: "'leetcode' can be segmented as 'leet code'."
        }
      ]
    }
  ]);

  const shuffleProblems = () => {
    setProblems([...problems].sort(() => Math.random() - 0.5));
  };

  const handleProblemClick = (problemId) => {
    const selectedProblem = problems.find(p => p.id === problemId);
    navigate('/practice', { 
      state: { 
        problem: selectedProblem 
      } 
    });
  };

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <div>
        <FaArrowLeft className='text-white font-bold text-2xl ml-10 hover:text-sky-600'
        onClick={() => navigate('/dashboard')}/>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Practice Mode</h1>
          <div className="flex space-x-4">
            <button 
              onClick={shuffleProblems}
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-all"
              title="Shuffle problems"
            >
              <FaRandom />
            </button>
            <div className="flex bg-gray-800 rounded-md p-1">
              <button
                onClick={() => setLayout('grid')}
                className={`p-2 rounded ${layout === 'grid' ? 'bg-gray-700' : 'hover:bg-gray-700'} transition-colors`}
                title="Grid view"
              >
                <FaTh className={layout === 'grid' ? 'text-blue-400' : 'text-gray-400'} />
              </button>
              <button
                onClick={() => setLayout('list')}
                className={`p-2 rounded ${layout === 'list' ? 'bg-gray-700' : 'hover:bg-gray-700'} transition-colors`}
                title="List view"
              >
                <FaList className={layout === 'list' ? 'text-blue-400' : 'text-gray-400'} />
              </button>
            </div>
          </div>
        </div>

        {layout === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem) => (
              <div 
                key={problem.id}
                className={`bg-gray-800 p-6 rounded-lg border-l-4 ${problem.borderColor} hover:scale-[1.02] transition-transform duration-200 h-full cursor-pointer`}
                onClick={() => handleProblemClick(problem.id)}
              >
                <h2 className="text-xl font-semibold text-white">{problem.title}</h2>
                <p className="text-gray-400 mt-2 mb-4">{problem.description}</p>
                <div className="flex justify-between items-end">
                  <span className="text-xs text-gray-500">{problem.difficulty}</span>
                  <div className="text-right">
                    <p className="text-gray-300 text-sm">{problem.time}</p>
                    <p className={`${problem.pointsColor} font-medium`}>{problem.points}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {problems.map((problem) => (
              <div 
                key={problem.id}
                className={`bg-gray-800 p-6 rounded-lg border-l-4 ${problem.borderColor} grid grid-cols-1 md:grid-cols-3 gap-4 items-center hover:bg-gray-750 transition-colors cursor-pointer`}
                onClick={() => handleProblemClick(problem.id)}
              >
                <div className="md:col-span-2">
                  <h2 className="text-xl font-semibold text-white">{problem.title}</h2>
                  <p className="text-gray-400 mt-1">{problem.description}</p>
                </div>
                <div className="flex justify-between md:justify-end md:gap-8">
                  <div className="text-right">
                    <p className="text-gray-300">{problem.time}</p>
                    <p className={`${problem.pointsColor} font-medium`}>{problem.points}</p>
                  </div>
                  <span className="text-xs text-gray-500 hidden md:block">{problem.difficulty}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 flex justify-between items-center">
          <div className="text-gray-400 text-sm">
            Showing {problems.length} problems
          </div>
          <div className="flex space-x-2">
            <span className="text-gray-400 font-medium">Filter:</span>
            <span className="text-blue-400">All</span>
            <span className="text-gray-400">Easy</span>
            <span className="text-gray-400">Medium</span>
            <span className="text-gray-400">Hard</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Option;