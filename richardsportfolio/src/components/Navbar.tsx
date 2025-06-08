"use client";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";

export default function Navbar() {
  // const { theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);
  // useEffect(() => setMounted(true), {});
  return (
    <nav className="w-full py-4 px-6 border-b border-white/10 sticky top-0 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-lg font-semibold">Storm!</h1>
        <div className="flex gap-4 text-sm text-white-80">
          <a href="#projects" className="hover: text-white">
            projects
          </a>
          <a href="#about" className="hover: text-white">
            about
          </a>
          <a href="#contact" className="hover: text-white">
            contact
          </a>
          {/* {mounted && (
            <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="text-xs px-3 py-1 rounded border border-white/20 hover: bg-white/10 transition"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          )} */}
        </div>
      </div>
    </nav>
  );
}
