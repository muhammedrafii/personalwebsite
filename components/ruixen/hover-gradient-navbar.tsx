"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Compass,
  FileText,
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

// Removed Connect
const menuItems: MenuItem[] = [
  { icon: <Home className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />, label: "Home", href: "/" },
  { icon: <Compass className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />, label: "Journey", href: "/journey" },
  { icon: <FileText className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />, label: "Projects", href: "/projects" },
  { icon: <Github className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />, href: "https://github.com/yourusername", iconOnly: true, isExternal: true },
  { icon: <Instagram className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />, href: "https://instagram.com/yourusername", iconOnly: true, isExternal: true },
  { icon: <Sun className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />, href: "#theme", isThemeToggler: true },
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
        px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-3
        rounded-3xl
        bg-white/20 dark:bg-black/20
        backdrop-blur-xl
        border border-white/20 dark:border-black/20
        shadow-md
        overflow-x-auto"
      >
        <ul className="flex items-center gap-2 md:gap-3 lg:gap-4 min-w-max">
          {menuItems.map((item) =>
            item.isThemeToggler ? (
              <button
                key={item.href}
                onClick={toggleTheme}
                className="flex items-center justify-center
                  w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12
                  rounded-full
                  hover:scale-110 transition-transform
                  text-blue-500 dark:text-yellow-400"
              >
                {isDark ? <Sun className="w-5 h-5 lg:w-6 lg:h-6" /> : <Moon className="w-5 h-5 lg:w-6 lg:h-6" />}
              </button>
            ) : (
              <li key={item.href}>
                {item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center
                      px-2 py-2 md:px-3 md:py-2 lg:px-4 lg:py-3
                      rounded-lg
                      text-gray-700 dark:text-gray-300
                      hover:text-blue-500 dark:hover:text-blue-300
                      transition-all
                      ${item.iconOnly ? "w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12" : ""}`}
                  >
                    {item.icon}
                    {!item.iconOnly && <span className="ml-2 text-sm md:text-base lg:text-lg">{item.label}</span>}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center justify-center
                      px-2 py-2 md:px-3 md:py-2 lg:px-4 lg:py-3
                      rounded-lg
                      text-gray-700 dark:text-gray-300
                      transition-all
                      ${pathname === item.href
                        ? "bg-white/30 dark:bg-black/30 text-blue-600 dark:text-blue-400"
                        : "hover:text-blue-500 dark:hover:text-blue-300"}
                      ${item.iconOnly ? "w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12" : ""}`}
                  >
                    {item.icon}
                    {!item.iconOnly && <span className="ml-2 text-sm md:text-base lg:text-lg">{item.label}</span>}
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
