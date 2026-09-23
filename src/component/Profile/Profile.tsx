import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";
import { useCurrentUser } from "../../hooks/useCurrentUser";

const Profile = () => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const location = useLocation();
  const { data: user } = useCurrentUser();
  
  // State to manage responsive mobile sidebar toggle
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Sign out handler placeholder (Integrate your auth store clear action here)
  const handleSignOut = () => {
    console.log("Signing out...");
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      {/* Brand Header */}
      <div className="h-16 flex items-center px-6 border-b border-gray-100">
        <span className="text-xl font-bold text-gray-900 tracking-tight">Dashboard</span>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 py-6 px-4 space-y-1.5 overflow-y-auto">
        <Link
          to="#"
          className="flex items-center px-4 py-2.5 bg-blue-50 text-blue-600 rounded-xl font-medium transition duration-200"
          onClick={() => setIsMobileOpen(false)}
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          Profile
        </Link>

        {accessToken && (
          <Link
            to={"/orders"}
            className="flex items-center px-4 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition duration-200"
            onClick={() => setIsMobileOpen(false)}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            Orders
          </Link>
        )}
      </div>

      {/* Sidebar Footer Action */}
      <div className="p-4 border-t border-gray-100">
        {!accessToken ? (
          <Link 
            to={"/login"} 
            state={{ from: location.pathname }}
            className="w-full"
            onClick={() => setIsMobileOpen(false)}
          >
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl transition duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              Login
            </button>
          </Link>
        ) : (
          <button 
            onClick={handleSignOut}
            className="w-full flex items-center justify-center bg-red-50 hover:bg-red-100 text-red-600 font-medium py-2.5 px-4 rounded-xl transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            Sign Out
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* 1. Desktop Static Sidebar */}
      <aside className="hidden md:block w-64 flex-shrink-0 fixed inset-y-0 left-0 z-20">
        <SidebarContent />
      </aside>

      {/* 2. Mobile Backdrop & Off-Canvas Drawer Overlay */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          <div 
            className="fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white transform transition ease-in-out duration-300">
            <SidebarContent />
          </div>
        </div>
      )}

      {/* Main Main Workspace Layout Container */}
      <div className="flex-1 flex flex-col md:pl-64">
        {/* Top Navbar Header for Mobile Adjustments */}
        <header className="h-16 flex items-center justify-between px-4 sm:px-6 bg-white border-b border-gray-200 sticky top-0 z-10 md:hidden">
          <span className="text-lg font-bold text-gray-900">Profile Dashboard</span>
          <button 
            onClick={() => setIsMobileOpen(true)}
            className="p-2 -mr-2 text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </header>

        {/* Content Area Section */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-4xl w-full mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h1 className="text-xl font-bold text-gray-900">Profile Details</h1>
            </div>

            <div className="p-6">
              {!accessToken ? (
                <div className="text-center py-8">
                  <p className="text-sm text-gray-500 mb-4">
                    Please log in to view your profile details.
                  </p>
                  <Link to={"/login"} state={{ from: location.pathname }}>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-xl transition duration-200">
                      Login
                    </button>
                  </Link>
                </div>
              ) : (
                user && (
                  <div className="space-y-6">
                    {/* Header Details Hero Profile */}
                    <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 pb-6 border-b border-gray-100">
                      <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl uppercase shadow-inner">
                        {user.firstName?.[0] || user.username?.[0] || "?"}
                      </div>
                      <div className="text-center sm:text-left">
                        <h2 className="text-xl font-bold text-gray-800">
                          {user.firstName} {user.lastName}
                        </h2>
                        <p className="text-sm text-gray-400">@{user.username}</p>
                      </div>
                    </div>

                    {/* Meta Fields Table Form List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">User ID</div>
                        <div className="font-mono text-sm text-gray-800 break-all select-all">{user.id}</div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Username</div>
                        <div className="text-sm font-medium text-gray-800">{user.username}</div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">First Name</div>
                        <div className="text-sm font-medium text-gray-800">{user.firstName}</div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Last Name</div>
                        <div className="text-sm font-medium text-gray-800">{user.lastName}</div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
