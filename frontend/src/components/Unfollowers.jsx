import { useState } from "react";
import {
  Upload as UploadIcon,
  X,
  Search,
  Users,
  UserMinus,
  ChevronDown,
  ExternalLink,
  BarChart3,
  TrendingUp,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Unfollowers = () => {
    const [followersFile, setFollowersFile] = useState(null);
    const [followingFile, setFollowingFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [results, setResults] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("unfollowers");

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

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event, type) => {
    event.preventDefault();
    event.stopPropagation();
    
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
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
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-800",
      iconColor: "text-red-600",
      hoverColor: "hover:bg-red-100",
      ariaLabel: "List of users who don't follow you back",
      description: "These Instagram users are in your following list but don't follow you back",
      icon: UserMinus,
    },
    followers: {
      title: "Your Followers",
      data: results?.followers || [],
      color: "emerald",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-800",
      iconColor: "text-emerald-600",
      hoverColor: "hover:bg-emerald-100",
      ariaLabel: "List of your followers",
      description: "Complete list of users who follow your Instagram account",
      icon: Users,
    },
    following: {
      title: "People You Follow",
      data: results?.following || [],
      color: "blue",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-800",
      iconColor: "text-blue-600",
      hoverColor: "hover:bg-blue-100",
      ariaLabel: "List of people you follow",
      description: "Complete list of Instagram accounts you are following",
      icon: TrendingUp,
    },
    mutualFollowers: {
      title: "Mutual Followers",
      data: results?.mutualFollowers || [],
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-800",
      iconColor: "text-purple-600",
      hoverColor: "hover:bg-purple-100",
      ariaLabel: "List of mutual followers",
      description: "Users who follow you and whom you follow back",
      icon: BarChart3,
    },
  };

  const getTabContent = () => {
    if (!results) return null;

    const { title, data, bgColor, borderColor, textColor, hoverColor, ariaLabel, description } = tabData[activeTab];
    const filteredUsers = filterUsers(data);

    return (
      <div className="space-y-6">
        <div className={`${bgColor} ${borderColor} border rounded-xl p-6`}>
          <div className="flex items-center justify-between mb-3">
            <h3 className={`text-xl font-bold ${textColor}`}>
              {title}
            </h3>
            <span className={`text-sm font-semibold px-3 py-1 rounded-full ${bgColor} ${textColor} border ${borderColor}`}>
              {filteredUsers.length} users
            </span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
        
        <div 
          className="space-y-3 max-h-[70vh] overflow-y-auto"
          aria-label={ariaLabel}
          role="list"
        >
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg ${hoverColor} transition-all duration-200 shadow-sm hover:shadow-md`}
                role="listitem"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full ${bgColor} ${borderColor} border-2`}
                    aria-hidden="true"
                  >
                    <span className={`font-bold text-lg ${textColor}`}>
                      {user.username[0].toUpperCase()}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-900 text-base">
                      @{user.username}
                    </span>
                    <span className="text-sm text-gray-500">
                      Instagram Profile
                    </span>
                  </div>
                </div>
                <a
                  href={user.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-4 py-2 ${textColor} ${hoverColor} border ${borderColor} rounded-lg transition-all duration-200 hover:shadow-sm font-medium`}
                  aria-label={`View ${user.username}'s Instagram profile`}
                >
                  <span className="text-sm">View Profile</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            ))
          ) : (
            <div className="p-12 text-center bg-gray-50 rounded-xl border border-gray-200">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No users found matching &ldquo;{searchTerm}&rdquo;</p>
              <p className="text-gray-500 text-sm mt-2">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        {!results ? (
          <div className="p-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
                <UploadIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Upload Instagram Data Files
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Analyze your Instagram followers and following to discover who doesn&apos;t follow you back
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Followers File Upload */}
                <div className="space-y-4">
                  <label htmlFor="followers-file" className="block text-sm font-semibold text-gray-900">
                    Followers List
                  </label>
                  <div className="space-y-3">
                    {!followersFile ? (
                      <div>
                        <label className="group relative flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-blue-400 transition-all duration-200"
                          onDragOver={handleDragOver}
                          onDragEnter={handleDragEnter}
                          onDragLeave={handleDragLeave}
                          onDrop={(e) => handleDrop(e, "followers")}
                        >
                          <input
                            type="file"
                            id="followers-file"
                            className="hidden"
                            accept=".json"
                            onChange={(e) => handleFileUpload(e, "followers")}
                            aria-describedby="followers-file-help"
                          />
                          <div className="flex flex-col items-center space-y-3">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                              <UploadIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                            </div>
                            <div className="text-center">
                              <p className="text-sm font-semibold text-gray-900">
                                Choose followers_1.json
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                Drag and drop or click to browse
                              </p>
                            </div>
                          </div>
                        </label>
                        <p id="followers-file-help" className="text-xs text-gray-500 mt-2">
                          Upload the followers_1.json file from your Instagram data download
                        </p>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-emerald-900">
                              {followersFile.name}
                            </p>
                            <p className="text-xs text-emerald-700">
                              File uploaded successfully
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile("followers")}
                          className="text-emerald-600 hover:text-emerald-800 p-2 hover:bg-emerald-100 rounded-lg transition-colors"
                          aria-label="Remove followers file"
                        >
                          <X className="w-4 h-4" aria-hidden="true" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Following File Upload */}
                <div className="space-y-4">
                  <label htmlFor="following-file" className="block text-sm font-semibold text-gray-900">
                    Following List
                  </label>
                  <div className="space-y-3">
                    {!followingFile ? (
                      <div>
                        <label className="group relative flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-purple-400 transition-all duration-200"
                          onDragOver={handleDragOver}
                          onDragEnter={handleDragEnter}
                          onDragLeave={handleDragLeave}
                          onDrop={(e) => handleDrop(e, "following")}
                        >
                          <input
                            type="file"
                            id="following-file"
                            className="hidden"
                            accept=".json"
                            onChange={(e) => handleFileUpload(e, "following")}
                            aria-describedby="following-file-help"
                          />
                          <div className="flex flex-col items-center space-y-3">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                              <UploadIcon className="w-6 h-6 text-purple-600" aria-hidden="true" />
                            </div>
                            <div className="text-center">
                              <p className="text-sm font-semibold text-gray-900">
                                Choose following.json
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                Drag and drop or click to browse
                              </p>
                            </div>
                          </div>
                        </label>
                        <p id="following-file-help" className="text-xs text-gray-500 mt-2">
                          Upload the following.json file from your Instagram data download
                        </p>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-emerald-900">
                              {followingFile.name}
                            </p>
                            <p className="text-xs text-emerald-700">
                              File uploaded successfully
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile("following")}
                          className="text-emerald-600 hover:text-emerald-800 p-2 hover:bg-emerald-100 rounded-lg transition-colors"
                          aria-label="Remove following file"
                        >
                          <X className="w-4 h-4" aria-hidden="true" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  disabled={!followersFile || !followingFile || loading}
                  className="w-full flex justify-center items-center px-8 py-4 text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] disabled:transform-none shadow-lg hover:shadow-xl"
                  aria-live="polite"
                >
                  {loading ? (
                    <div className="flex items-center space-x-3" role="status">
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-b-0 border-white" aria-hidden="true"></div>
                      <span>Analyzing Your Instagram Data...</span>
                    </div>
                  ) : (
                    <span className="flex items-center space-x-2">
                      <BarChart3 className="w-5 h-5" aria-hidden="true" />
                      <span>Analyze Instagram Data</span>
                      <ChevronDown className="w-5 h-5" aria-hidden="true" />
                    </span>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-10 p-6 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-base font-semibold mb-3 text-blue-900">
                    Privacy & Security Information
                  </h3>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Your data is processed locally and never leaves your device</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Make sure to upload both JSON files for accurate results</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Files should be named correctly (followers_1.json and following.json)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>This tool is not affiliated with Instagram or Meta</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-8 space-y-8">
            {/* Statistics Overview */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <Users className="w-6 h-6 text-emerald-600" aria-hidden="true" />
                  <span className="text-sm font-medium text-emerald-800">Followers</span>
                </div>
                <div className="text-2xl font-bold text-emerald-900">
                  {results.total.followers.toLocaleString()}
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <TrendingUp className="w-6 h-6 text-blue-600" aria-hidden="true" />
                  <span className="text-sm font-medium text-blue-800">Following</span>
                </div>
                <div className="text-2xl font-bold text-blue-900">
                  {results.total.following.toLocaleString()}
                </div>
              </div>
              
              <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <UserMinus className="w-6 h-6 text-red-600" aria-hidden="true" />
                  <span className="text-sm font-medium text-red-800">Don&apos;t Follow Back</span>
                </div>
                <div className="text-2xl font-bold text-red-900">
                  {results.total.unfollowers.toLocaleString()}
                </div>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <BarChart3 className="w-6 h-6 text-purple-600" aria-hidden="true" />
                  <span className="text-sm font-medium text-purple-800">Follow Ratio</span>
                </div>
                <div className="text-2xl font-bold text-purple-900">
                  {results.total.ratio}%
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-col space-y-6">
              <div className="flex flex-wrap gap-2 p-1 bg-gray-100 rounded-xl" role="tablist">
                {Object.entries(tabData).map(([key, { title, color, icon: IconComponent }]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center space-x-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                      activeTab === key
                        ? `bg-white shadow-sm text-${color}-700 border border-${color}-200`
                        : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                    }`}
                    role="tab"
                    aria-selected={activeTab === key}
                    aria-controls={`${key}-panel`}
                    id={`${key}-tab`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="hidden sm:inline">{title}</span>
                    <span className="sm:hidden">{title.split(' ')[0]}</span>
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 shadow-sm"
                  aria-label="Search users"
                />
              </div>
            </div>

            {/* Tab Content */}
            <div 
              id={`${activeTab}-panel`}
              role="tabpanel"
              aria-labelledby={`${activeTab}-tab`}
            >
              {getTabContent()}
            </div>

            {/* Reset Button */}
            <div className="pt-6 border-t border-gray-200 text-center">
              <button
                onClick={() => {
                  setFollowersFile(null);
                  setFollowingFile(null);
                  setResults(null);
                  setSearchTerm("");
                }}
                className="px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
              >
                Upload Different Files
              </button>
            </div>
          </div>
        )}

        {error && (
          <div className="m-8 mt-0">
            <div 
              className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-3" 
              role="alert"
              aria-live="assertive"
            >
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-red-900 mb-1">Error Processing Files</h4>
                <p className="text-sm text-red-800">{error}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Unfollowers;