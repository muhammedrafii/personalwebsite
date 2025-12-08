"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Compass,
  FileText,
  Users,
  Sun,
  Moon,
  Github,
  Instagram,
} from "lucide-react";

interface MenuItem {
  icon: React.ReactNode;
  label?: string;
  href: string;
  isThemeToggler?: boolean;
  isExternal?: boolean;
  iconOnly?: boolean;
}

const menuItems: MenuItem[] = [
  { icon: <Home className="w-4 h-4 lg:w-5 lg:h-5" />, label: "Home", href: "/" },
  { icon: <Compass className="w-4 h-4 lg:w-5 lg:h-5" />, label: "Journey", href: "/journey" },
  { icon: <FileText className="w-4 h-4 lg:w-5 lg:h-5" />, label: "Projects", href: "/projects" },
  { icon: <Users className="w-4 h-4 lg:w-5 lg:h-5" />, label: "Connect", href: "/connect" },
  { icon: <Github className="w-4 h-4 lg:w-5 lg:h-5" />, href: "https://github.com/yourusername", iconOnly: true, isExternal: true },
  { icon: <Instagram className="w-4 h-4 lg:w-5 lg:h-5" />, href: "https://instagram.com/yourusername", iconOnly: true, isExternal: true },
  { icon: <Sun className="w-4 h-4 lg:w-5 lg:h-5" />, href: "#theme", isThemeToggler: true },
];

export default function HoverGradientNavBar() {
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const dark = !isDark;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  return (
    <div className="fixed top-2 left-1/2 -translate-x-1/2 w-[98%] z-50">
      <nav className="flex justify-center 
        px-1 py-1 lg:px-3 lg:py-2 
        rounded-3xl 
        bg-white/10 dark:bg-black/10 
        backdrop-blur-xl 
        border border-white/20 dark:border-black/20 
        shadow-md 
        overflow-x-auto">
        
        <ul className="flex items-center gap-1 md:gap-2 lg:gap-4 min-w-max">
          {menuItems.map((item) =>
            item.isThemeToggler ? (
              // 🌙 SUN / MOON with reversed color logic
              <button
                key={item.href}
                onClick={toggleTheme}
                className="flex items-center justify-center 
                  w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 
                  rounded-full
                  hover:scale-110 transition-transform
                  text-blue-500 dark:text-yellow-400"
              >
                {/* Light mode → Moon (blue). Dark mode → Sun (yellow) */}
                {isDark ? (
                  <Sun className="w-4 h-4 lg:w-5 lg:h-5" />
                ) : (
                  <Moon className="w-4 h-4 lg:w-5 lg:h-5" />
                )}
              </button>
            ) : (
              <li key={item.href}>
                {item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center
                      px-1 py-1 md:px-2 md:py-1 lg:px-3 lg:py-2
                      rounded-lg
                      text-gray-700 dark:text-gray-300
                      hover:text-blue-500 dark:hover:text-blue-300
                      transition-all
                      ${item.iconOnly ? "w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" : ""}`}
                  >
                    {item.icon}
                    {!item.iconOnly && <span className="text-[10px] md:text-xs lg:text-sm ml-1">{item.label}</span>}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center justify-center
                      px-1 py-1 md:px-2 md:py-1 lg:px-3 lg:py-2
                      rounded-lg
                      text-gray-700 dark:text-gray-300
                      text-[10px] md:text-xs lg:text-sm
                      whitespace-nowrap transition-all
                      ${pathname === item.href
                        ? "bg-white/30 dark:bg-black/30 text-blue-600 dark:text-blue-400"
                        : "hover:text-blue-500 dark:hover:text-blue-300"}
                      ${item.iconOnly ? "w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" : ""}`}
                  >
                    {item.icon}
                    {!item.iconOnly && <span className="ml-1">{item.label}</span>}
                  </Link>
                )}
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
}
