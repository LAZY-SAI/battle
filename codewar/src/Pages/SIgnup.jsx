import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTerminal, FaPlus, FaUser, FaArrowLeft } from "react-icons/fa";

function SignUp() {
  const [user, setUser] = useState({
    username: "", // Changed from 'name' to 'username'
    useremail: "", // Changed from 'email' to 'useremail'
    userpassword: "", // Changed from 'password' to 'userpassword'
  });
  const navigate = useNavigate();

  function handleBack() {
    navigate('/home');
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    // Process form data here
  }

  const Cursor = ({ delay = 0 }) => (
    <div 
      className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-4 bg-white animate-blink" 
      style={{ animationDelay: `${delay}s` }}
    />
  );

  return (
    <div className="bg-gray-800 min-h-screen p-8 flex justify-center items-start">
      <FaArrowLeft className="text-white text-2xl position absolute -ml-[86rem] hover:text-sky-600" onClick={handleBack}/>
      <div className="w-[500px] rounded-xl overflow-hidden shadow-lg mt-40 w-xl">
        {/* Terminal Header */}
        <div className="bg-[#202425] p-3 flex items-center justify-between ">
          <span className="text-white text-sm font-semibold flex items-center gap-2">
            <FaTerminal className="text-blue-400" />
            SignUP
          </span>
        </div>

        {/* Terminal Body */}
        <form onSubmit={handleSubmit} autoComplete="off" className="bg-[#202425] text-white p-4 font-mono">
          {/* Hidden dummy inputs to trick browsers */}
          <input type="text" name="prevent_autofill" style={{ display: 'none' }} />
          <input type="password" name="password_fake" style={{ display: 'none' }} />

          {/* UserName */}
          <div className="flex items-center mb-4">
            <span className="text-white mr-2">UserName:</span>
            <div className="relative flex-grow">
              <input
                type="text"
                name="username" 
                id="username-field" 
                value={user.username}
                onChange={handleInputChange}
                className="bg-transparent border-none text-blue-400 font-mono text-sm outline-none w-full pr-2"
                placeholder="Enter username"
                autoComplete="username" 
                required
              />
              <Cursor  />
            </div>
          </div>
          
          {/* Email Input */}
          <div className="flex items-center mb-4">
            <span className="text-white mr-2">email:</span>
            <div className="relative flex-grow">
              <input
                type="email"
                name="useremail" // Changed from 'email'
                id="useremail-field" // Custom ID
                value={user.useremail}
                onChange={handleInputChange}
                className="bg-transparent border-none text-blue-400 font-mono text-sm outline-none w-full pr-2"
                placeholder="Enter email"
                autoComplete="email" 
                required
              />
              <Cursor delay={0.1} />
            </div>
          </div>

          {/* Password Input */}
          <div className="flex items-center mb-6">
            <span className="text-white mr-2">password:</span>
            <div className="relative flex-grow">
              <input
                type="password"
                name="userpassword" // Changed from 'password'
                id="userpassword-field" // Custom ID
                value={user.userpassword}
                onChange={handleInputChange}
                className="bg-transparent border-none text-blue-400 font-mono text-sm outline-none w-full pr-2"
                placeholder="Enter password"
                autoComplete="new-password" // Disables autocomplete
                required
              />
              <Cursor delay={0.3} />
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="flex items-center mb-6">
            <span className="text-white mr-2">Confirm password:</span>
            <div className="relative flex-grow">
              <input
                type="password"
                name="confirmpassword" // Different name
                id="confirmpassword-field" // Custom ID
                value={user.userpassword}
                onChange={handleInputChange}
                className="bg-transparent border-none text-blue-400 font-mono text-sm outline-none w-full pr-2"
                autoComplete="new-password" // Disables autocomplete
                required
              />
              <Cursor delay={0.5} />
            </div>
          </div>

          {/* Rest of your form remains the same */}
          <div className="flex justify-between items-center translate-x-30">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              Create Account<FaUser/> <FaPlus />
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="text-blue-400 hover:text-blue-300 underline"
              >
                login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;