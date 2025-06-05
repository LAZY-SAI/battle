import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Editor from '@monaco-editor/react';

function Ide() {
  // Define default code templates first
  const defaultCode = {
    python: `def two_sum(nums, target):\n    # Your code here\n    pass`,
    cpp: `vector<int> twoSum(vector<int>& nums, int target) {\n    // Your code here\n}`,
    java: `class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Your code here\n    }\n}`,
    js: `function twoSum(nums, target) {\n    // Your code here\n};`
  };

  const location = useLocation();
  const { problem } = location.state || {};
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const [code, setCode] = useState(defaultCode[selectedLanguage]);
  const [status, setStatus] = useState("Not Submitted");
  const [output, setOutput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!problem) {
      navigate("/option");
    }
    setCode(defaultCode[selectedLanguage]);
  }, [selectedLanguage, problem, navigate]);

  const handleSubmit = () => {
    setStatus("Submitted");
    setTimeout(() => {
      setOutput("Test cases passed: 3/3\nSuccess! Your solution is correct.");
    }, 2000);
  };

  const handleLeave = () => {
    navigate("/option");
  };

  const [timeLeft, setTimeLeft] = useState(20 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");


  const languageMap = {
    python: "python",
    cpp: "cpp",
    java: "java",
    js: "javascript"
  };

    const setupEditor = (monaco) => {
    monaco.editor.defineTheme('slate-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#1e293b', // slate-800
        'editor.lineHighlightBackground': '#334155', // slate-700
        'editor.lineNumbers': '#94a3b8', // slate-400
        'editor.selectionBackground': '#475569', // slate-600
        'editor.inactiveSelectionBackground': '#47556980', // slate-600 with 50% opacity
        'editorCursor.foreground': '#f8fafc', // slate-50
        'editor.lineHighlightBorder': '#334155', // slate-700
        'editorGutter.background': '#1e293b', // slate-800
      },
    });
  };
  if (!problem) return <div>Loading...</div>;

  return (
    <div className="bg-slate-800 min-h-screen text-white flex flex-col">
      {/* Header */}
      <div className="w-full h-16 flex items-center justify-between px-4 sm:px-6 sticky top-0 bg-slate-800 z-10 border-b border-slate-700">
        <button
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
          onClick={handleLeave}
        >
          <FaArrowLeft /> Leave Problem
        </button>
        <div className="text-xl font-bold">
          Time Left: <span className="text-blue-400">{minutes}:{seconds}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
        {/* Problem Statement Column */}
        <div className="w-full md:w-1/2 p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">{problem.title}</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg">{problem.statement}</p>
            
            <h2 className="text-xl font-semibold mt-6">Examples</h2>
            {problem.examples.map((example, idx) => (
              <div key={idx} className="bg-gray-900 p-4 rounded-lg my-3">
                <p><strong>Input:</strong> {example.input}</p>
                <p><strong>Output:</strong> {example.output}</p>
                {example.explanation && (
                  <p><strong>Explanation:</strong> {example.explanation}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Code Editor Column */}
        <div className="w-full md:w-1/2 p-6 overflow-y-auto border-t md:border-t-0 md:border-l border-slate-700">
          <div className="flex flex-wrap items-center gap-4 mb-4 px-2">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-slate-700 text-white p-2 rounded-md px-2"
            >
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
              <option value="js">JavaScript</option>
            </select>
            
            <button 
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
            
            <div className="ml-auto">
              <span className="font-semibold">Status: </span>
              <span className={status === "Submitted" ? "text-green-400" : "text-yellow-400"}>
                {status}
              </span>
            </div>
          </div>

         <div className="bg-gray-900 rounded-lg overflow-hidden mb-4 h-[500px]">
        <Editor
          height="100%"
          language={languageMap[selectedLanguage]}
          value={code}
          onChange={(value) => setCode(value || "")}
          theme="slate-dark"
          beforeMount={setupEditor}
          options={{
            automaticLayout: true,
            fontSize: 14,
            minimap: { enabled: true },
            scrollBeyondLastLine: false,
            padding: { top: 10, bottom: 10 },
            renderLineHighlight: 'all',
            lineNumbersMinChars: 3,
            glyphMargin: false,
            folding: false,
            lineDecorationsWidth: 10,
          }}
          onMount={(editor) => {
          
            const editorElement = editor.getDomNode();
            if (editorElement) {
              editorElement.style.borderRadius = '0.5rem';
              editorElement.style.border = '1px solid #334155'; // 
            }
          }}
        />
      </div>

          {output && (
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Output</h3>
              <pre className="text-sm whitespace-pre-wrap">{output}</pre>
            </div>
          )}

          <div className="mt-4">
            <h3 className="font-bold mb-2">Live Feed</h3>
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-sm">System: Problem "{problem.title}" loaded successfully</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ide;