import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <main className="px-0 sm:px-4">
        {children ?? <Outlet />}
      </main>
      <Toaster position="top-right" />
    </div>
  );
};

export default MainLayout;
