import { useState } from "react";
import {
  Upload as UploadIcon,
  X,
  FileJson,
  Search,
  Users,
  UserMinus,
  ChevronDown,
  ExternalLink,
} from "lucide-react";

const Unfollowers = () => {
    const [followersFile, setFollowersFile] = useState(null);
    const [followingFile, setFollowingFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [results, setResults] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("unfollowers");
    const [showStats, setShowStats] = useState(true);

  const handleFileUpload = (event, type) => {
    const file = event.target.files[0];
    if (file && file.type === "application/json") {
      if (type === "followers") {
        setFollowersFile(file);
      } else {
        setFollowingFile(file);
      }
      setError(null);
    } else {
      setError("Please upload a valid JSON file");
    }
  };

  const removeFile = (type) => {
    if (type === "followers") {
      setFollowersFile(null);
    } else {
      setFollowingFile(null);
    }
    setResults(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!followersFile || !followingFile) return;

    setLoading(true);
    setError(null);

    try {
      const followersData = await followersFile.text();
      const followingData = await followingFile.text();

      const followersJson = JSON.parse(followersData);
      const followingJson = JSON.parse(followingData);

      const followers = new Set(
        followersJson
          .map((entry) => {
            if (entry?.string_list_data?.[0]?.value) {
              return entry.string_list_data[0].value;
            }
            return null;
          })
          .filter(Boolean)
      );

      const following = new Set(
        followingJson.relationships_following
          .map((entry) => {
            if (entry?.string_list_data?.[0]?.value) {
              return entry.string_list_data[0].value;
            }
            return null;
          })
          .filter(Boolean)
      );

      const unfollowers = [...following].filter(
        (username) => !followers.has(username)
      );

      const mutualFollowers = [...following].filter((username) =>
        followers.has(username)
      );

      setResults({
        total: {
          followers: followers.size,
          following: following.size,
          unfollowers: unfollowers.length,
          mutualFollowers: mutualFollowers.length,
          ratio: ((followers.size / following.size) * 100).toFixed(1),
        },
        unfollowers: unfollowers.map((username) => ({
          username,
          link: `https://instagram.com/${username}`,
        })),
        followers: [...followers].map((username) => ({
          username,
          link: `https://instagram.com/${username}`,
        })),
        following: [...following].map((username) => ({
          username,
          link: `https://instagram.com/${username}`,
        })),
        mutualFollowers: mutualFollowers.map((username) => ({
          username,
          link: `https://instagram.com/${username}`,
        })),
      });

      setActiveTab("unfollowers");
    } catch (error) {
      console.error("Error processing files:", error);
      setError(
        "Error processing files. Please ensure you uploaded the correct JSON files (followers_1.json and following.json)"
      );
    } finally {
      setLoading(false);
    }
  };

  const filterUsers = (users) => {
    if (!searchTerm) return users;
    return users.filter((user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const tabData = {
    unfollowers: {
      title: "Users Who Don't Follow You Back",
      data: results?.unfollowers || [],
      color: "red",
      ariaLabel: "List of users who don't follow you back",
      description: "These Instagram users are in your following list but don't follow you back"
    },
    followers: {
      title: "Your Followers",
      data: results?.followers || [],
      color: "green",
      ariaLabel: "List of your followers",
      description: "Complete list of users who follow your Instagram account"
    },
    following: {
      title: "People You Follow",
      data: results?.following || [],
      color: "blue",
      ariaLabel: "List of people you follow",
      description: "Complete list of Instagram accounts you are following"
    },
    mutualFollowers: {
      title: "Mutual Followers",
      data: results?.mutualFollowers || [],
      color: "purple",
      ariaLabel: "List of mutual followers",
      description: "Users who follow you and whom you follow back"
    },
  };

  const getTabContent = () => {
    if (!results) return null;

    const { title, data, color, ariaLabel, description } = tabData[activeTab];
    const filteredUsers = filterUsers(data);

    return (
      <div className="space-y-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-xl font-semibold text-gray-100">
              {title}
            </h3>
            <span className="text-sm text-gray-400">
              {filteredUsers.length} users
            </span>
          </div>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
        <div 
          className="space-y-2 max-h-[60vh] overflow-y-auto custom-scrollbar"
          aria-label={ariaLabel}
          role="list"
        >
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 sm:p-4 glass-effect rounded-lg hover:bg-gray-800/50 transition-all group"
                role="listitem"
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span
                    className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-${color}-900/20 text-${color}-400 font-semibold text-sm sm:text-lg`}
                    aria-hidden="true"
                  >
                    {user.username[0].toUpperCase()}
                  </span>
                  <span className="font-medium text-gray-200 text-sm sm:text-base truncate max-w-[120px] sm:max-w-[200px]">
                    {user.username}
                  </span>
                </div>
                <a
                  href={user.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 sm:space-x-2 text-purple-300 hover:text-purple-400"
                  aria-label={`View ${user.username}'s Instagram profile`}
                >
                  <span className="hidden sm:inline text-sm">View Profile</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            ))
          ) : (
            <div className="p-6 text-center text-gray-400">
              No users found matching "{searchTerm}"
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4 py-6 sm:py-12">
      <div className="glass-effect rounded-xl shadow-xl p-4 sm:p-8">
        {!results ? (
          <>
            <h2 className="text-2xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6 sm:mb-8">
              Upload Instagram Data Files 📤
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 gap-4">
                {/* Followers File Upload */}
                <div className="space-y-3 sm:space-y-4">
                  <label htmlFor="followers-file" className="block text-xs sm:text-sm font-medium text-gray-300">
                    Followers List (followers_1.json)
                  </label>
                  <div className="flex items-center space-x-4">
                    {!followersFile ? (
                      <div className="flex-1">
                        <label className="flex justify-center items-center px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-700 border-dashed rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                          <input
                            type="file"
                            id="followers-file"
                            className="hidden"
                            accept=".json"
                            onChange={(e) => handleFileUpload(e, "followers")}
                            aria-describedby="followers-file-help"
                          />
                          <div className="flex items-center space-x-2">
                            <UploadIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" aria-hidden="true" />
                            <span className="text-sm sm:text-base text-gray-400">
                              Choose followers.json
                            </span>
                          </div>
                        </label>
                        <p id="followers-file-help" className="mt-1 text-xs text-gray-500">
                          Upload the followers_1.json file from your Instagram data download
                        </p>
                      </div>
                    ) : (
                      <div className="flex-1 flex items-center justify-between p-3 sm:p-4 bg-purple-900/20 rounded-lg">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <FileJson className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" aria-hidden="true" />
                          <span className="text-xs sm:text-sm font-medium text-gray-300 truncate">
                            {followersFile.name}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile("followers")}
                          className="text-gray-400 hover:text-gray-300"
                          aria-label="Remove followers file"
                        >
                          <X className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Following File Upload */}
                <div className="space-y-3 sm:space-y-4">
                  <label htmlFor="following-file" className="block text-xs sm:text-sm font-medium text-gray-300">
                    Following List (following.json)
                  </label>
                  <div className="flex items-center space-x-4">
                    {!followingFile ? (
                      <div className="flex-1">
                        <label className="flex justify-center items-center px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-700 border-dashed rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                          <input
                            type="file"
                            id="following-file"
                            className="hidden"
                            accept=".json"
                            onChange={(e) => handleFileUpload(e, "following")}
                            aria-describedby="following-file-help"
                          />
                          <div className="flex items-center space-x-2">
                            <UploadIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" aria-hidden="true" />
                            <span className="text-sm sm:text-base text-gray-400">
                              Choose following.json
                            </span>
                          </div>
                        </label>
                        <p id="following-file-help" className="mt-1 text-xs text-gray-500">
                          Upload the following.json file from your Instagram data download
                        </p>
                      </div>
                    ) : (
                      <div className="flex-1 flex items-center justify-between p-3 sm:p-4 bg-purple-900/20 rounded-lg">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <FileJson className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" aria-hidden="true" />
                          <span className="text-xs sm:text-sm font-medium text-gray-300 truncate">
                            {followingFile.name}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile("following")}
                          className="text-gray-400 hover:text-gray-300"
                          aria-label="Remove following file"
                        >
                          <X className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={!followersFile || !followingFile || loading}
                className="w-full flex justify-center items-center px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02]"
                aria-live="polite"
              >
                {loading ? (
                  <div className="flex items-center space-x-2" role="status">
                    <span className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-2 border-b-0 border-white" aria-hidden="true"></span>
                    <span>Processing...</span>
                  </div>
                ) : (
                  <span className="flex items-center space-x-2">
                    <span>Compare Files</span>
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                  </span>
                )}
              </button>
            </form>

            <div className="mt-6 sm:mt-8 p-4 sm:p-6 glass-effect rounded-lg border border-gray-800">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-200">
                Important Notes:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-gray-400">
                <li>Your data is processed locally and never leaves your device</li>
                <li>Make sure to upload both JSON files for accurate results</li>
                <li>Files should be named correctly (followers_1.json and following.json)</li>
                <li>This tool is not affiliated with Instagram or Meta</li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-6 sm:space-y-8">
              {showStats && (
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="glass-effect p-2 sm:p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" aria-hidden="true" />
                      <span className="text-xs text-gray-400">Followers</span>
                    </div>
                    <span className="text-sm sm:text-lg md:text-xl font-bold text-gray-100">
                      {results.total.followers}
                    </span>
                  </div>
                  <div className="glass-effect p-2 sm:p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" aria-hidden="true" />
                      <span className="text-xs text-gray-400">Following</span>
                    </div>
                    <span className="text-sm sm:text-lg md:text-xl font-bold text-gray-100">
                      {results.total.following}
                    </span>
                  </div>
                  <div className="glass-effect p-2 sm:p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <UserMinus className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" aria-hidden="true" />
                      <span className="text-xs text-gray-400">Non-Followers</span>
                    </div>
                    <span className="text-sm sm:text-lg md:text-xl font-bold text-gray-100">
                      {results.total.unfollowers}
                    </span>
                  </div>
                  <div className="glass-effect p-2 sm:p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" aria-hidden="true" />
                      <span className="text-xs text-gray-400">Ratio</span>
                    </div>
                    <span className="text-sm sm:text-lg md:text-xl font-bold text-gray-100">
                      {results.total.ratio}%
                    </span>
                  </div>
                </div>
              )}

              <div className="flex flex-col space-y-4">
                <div className="flex flex-wrap gap-2" role="tablist">
                  {Object.entries(tabData).map(([key, { title, color }]) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-lg transition-colors ${
                        activeTab === key
                          ? `bg-${color}-900/20 text-${color}-400`
                          : "text-gray-400 hover:text-gray-300"
                      }`}
                      role="tab"
                      aria-selected={activeTab === key}
                      aria-controls={`${key}-panel`}
                      id={`${key}-tab`}
                    >
                      {title}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-7 sm:pl-9 pr-3 sm:pr-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-300 placeholder-gray-500"
                    aria-label="Search users"
                  />
                </div>
              </div>

              <div 
                id={`${activeTab}-panel`}
                role="tabpanel"
                aria-labelledby={`${activeTab}-tab`}
              >
                {getTabContent()}
              </div>

              <div className="mt-6 sm:mt-8 flex justify-center">
                <button
                  onClick={() => {
                    setFollowersFile(null);
                    setFollowingFile(null);
                    setResults(null);
                    setSearchTerm("");
                  }}
                  className="px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-400 hover:text-gray-300 transition-colors"
                >
                  Upload Different Files
                </button>
              </div>
            </div>
          </>
        )}

        {error && (
          <div 
            className="mt-4 p-3 sm:p-4 bg-red-900/20 border border-red-900 rounded-lg" 
            role="alert"
            aria-live="assertive"
          >
            <p className="text-xs sm:text-sm text-red-400">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Unfollowers;