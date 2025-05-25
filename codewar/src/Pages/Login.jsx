import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTerminal, FaArrowRight , FaArrowLeft} from "react-icons/fa";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  function handleBack(){
      navigate('/home')
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User logged in:", user);
    // Add your authentication logic here
  };

  const Cursor = () => (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-4 bg-white animate-blink" />
  );

  return (
    
    <div className="bg-slate-900 min-h-screen p-8 flex justify-center items-start ">
         <FaArrowLeft className="text-white text-2xl position absolute -ml-[86rem]" onClick={handleBack}/>
      <div className="w-[500px] rounded-xl overflow-hidden shadow-lg mt-40">
        {/* Terminal Header */}
        <div className="bg-[#202425] p-3 flex items-center justify-between">
          <span className="text-white text-sm font-semibold flex items-center gap-2">
            <FaTerminal className="text-blue-400" />
            Terminal Login
          </span>
        </div>

        {/* Terminal Body */}
        <form onSubmit={handleSubmit} className="bg-[#202425] text-white p-4 font-mono">
          {/* Email Input */}
          <div className="flex items-center mb-4">
            <span className="text-white mr-2">email:</span>
            <div className="relative flex-grow">
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                className="bg-transparent border-none text-blue-400 font-mono text-sm outline-none w-full pr-2"
                placeholder="Enter email"
                required
              />
              <Cursor />
            </div>
          </div>

          {/* Password Input */}
          <div className="flex items-center mb-6">
            <span className="text-white mr-2">password:</span>
            <div className="relative flex-grow">
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleInputChange}
                className="bg-transparent border-none text-blue-400 font-mono text-sm outline-none w-full pr-2"
                placeholder="Enter password"
                required
              />
              <Cursor />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => navigate('/forgot-password')}
              className="text-blue-400 hover:text-blue-300 text-sm underline"
            >
              Forgot password?
            </button>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              Login <FaArrowRight />
            </button>
          </div>

          {/* Create Account */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/register')}
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Create new account
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;