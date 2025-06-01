import {
  FaArrowLeft,
  FaUser,
  FaCamera,
  FaSave,
  FaTimes,
  FaPen,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Profile() {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});

  // Sample user data with progress/level information
  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@gmail.com",
    level: 3,
    progress: 65, // percentage (0-100)
    nextLevel: 1000,
    currentXP: 650,
  });

  const [editedData, setEditedData] = useState({ ...userData });

  function handleImage(e) {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.match("image.*")) {
        setErrors({ ...errors, image: "Please select an image file" });
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        setErrors({ ...errors, image: "Image must be less than 2MB" });
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
        setErrors({ ...errors, image: null });
      };
      reader.readAsDataURL(file);
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!editedData.email.includes("@gmail.com")) {
      newErrors.email = "Please enter a valid Gmail address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) return;

    setUserData({ ...editedData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedData({ ...userData });
    setIsEditing(false);
    setErrors({});
  };

  return (
    <div className="bg-slate-800 min-h-screen flex  items-center justify-center p-4">
      {/* Back button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="absolute top-6 left-6 text-white hover:text-sky-500 transition-colors duration-200"
        aria-label="Go back"
      >
        <FaArrowLeft className="text-2xl" />
      </button>

      {/* Profile container */}
      <div className="max-w-md w-full  mx-auto bg-gray-700 rounded-xl ml-30 overflow-hidden shadow-lg">
        {/* Profile header */}
        <div className="bg-gray-800 p-4 text-center relative">
          <h1 className="text-xl font-bold text-white">My Profile</h1>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sky-400 hover:text-sky-300 transition-colors duration-200"
              aria-label="Edit profile"
            >
              <FaPen className="text-lg" />
            </button>
          )}
        </div>

        {/* Profile content */}
        <div className="p-6 flex flex-col items-center">
          {/* Profile image with edit button */}
          <div className="relative mb-6 group">
            <div className="w-32 h-32 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden border-4 border-gray-500">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <FaUser className="text-5xl text-gray-400" />
              )}
            </div>

            {/* Camera button */}
            <label
              htmlFor="fileInput"
              className="absolute -bottom-2 -right-2 bg-sky-500 hover:bg-sky-600 text-white rounded-full p-3 cursor-pointer transition-colors duration-200 shadow-md"
              title="Change photo"
            >
              <FaCamera className="text-lg" />
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                onChange={handleImage}
                className="hidden"
              />
            </label>
            {errors.image && (
              <p className="text-red-400 text-sm mt-2 text-center">
                {errors.image}
              </p>
            )}
          </div>

          {/* User information */}
          <div className="w-full space-y-4">
            {isEditing ? (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={editedData.firstName}
                      onChange={handleInputChange}
                      className="w-full bg-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={editedData.lastName}
                      onChange={handleInputChange}
                      className="w-full bg-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={editedData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-600 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold text-white">
                    {userData.firstName} {userData.lastName}
                  </h2>
                </div>
                <div className="bg-gray-600 p-4 rounded-lg space-y-3">
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">{userData.email}</p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Action buttons - only visible in edit mode */}
          {isEditing && (
            <div className="flex gap-3 w-full mt-6">
              <button
                onClick={handleCancel}
                className="flex-1 bg-gray-600 hover:bg-gray-500 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <FaTimes /> Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <FaSave /> Save
              </button>
            </div>
          )}
        </div>

        {/* Progress/Level Bar */}
        <div className="px-6 py-4 w-full bg-gray-600">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-300">
              Level {userData.level}
            </span>
            <span className="text-xs text-gray-400">
              {userData.currentXP}/{userData.nextLevel} XP
            </span>
          </div>
          <div className="w-full bg-gray-500 rounded-full h-2.5">
            <div
              className="bg-sky-500 h-2.5 rounded-full"
              style={{ width: `${userData.progress}%` }}
            ></div>
          </div>
          <div className="mt-2 text-xs text-gray-400 text-right">
            {userData.nextLevel - userData.currentXP} XP to next level
          </div>
        </div>
      </div>
      {/*Achievement */}
     <div className="max-w-2xl w-full  mx-auto bg-gray-700 rounded-xl  overflow-hidden shadow-lg">
        {/*header */}
       <div className="bg-gray-800 p-4 text-center relative">
          <h1 className="text-xl font-bold text-white">Achievement</h1>
        </div>
        {/*achievement body */}
        <div className="flex flex-col p-4 space-y-4">
  {/* Sample achievements */}
  <div className="bg-gray-600 p-3 rounded-lg flex items-center gap-4">
    <div className="bg-sky-500 p-2 rounded-full">
      <FaUser className="text-white text-xl" />
    </div>
    <div>
      <h3 className="text-white font-semibold">Profile Complete</h3>
      <p className="text-gray-300 text-sm">
        Completed all profile details.
      </p>
    </div>
  </div>

  <div className="bg-gray-600 p-3 rounded-lg flex items-center gap-4">
    <div className="bg-yellow-500 p-2 rounded-full">
      <FaPen className="text-white text-xl" />
    </div>
    <div>
      <h3 className="text-white font-semibold">First Edit</h3>
      <p className="text-gray-300 text-sm">
        Edited your profile for the first time.
      </p>
    </div>
  </div>

  <div className="bg-gray-600 p-3 rounded-lg flex items-center gap-4">
    <div className="bg-green-500 p-2 rounded-full">
      <FaSave className="text-white text-xl" />
    </div>
    <div>
      <h3 className="text-white font-semibold">Milestone Reached</h3>
      <p className="text-gray-300 text-sm">
        Reached Level {userData.level} — keep going!
      </p>
    </div>
  </div>
</div>
     </div>
    </div>
  );
}

export default Profile;
