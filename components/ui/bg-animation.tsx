"use client";
import { useTheme } from "next-themes";

export const BackgroundAnimation = () => {
  const { resolvedTheme } = useTheme();

  return (
    <ul className="circles absolute top-0 left-0 w-full h-full">
      <li
        className={`absolute block list-none w-5 h-5 opacity-20 ${
          resolvedTheme === "dark" ? "bg-white" : "bg-black"
        }`}
      ></li>
      <li
        className={`absolute block list-none w-5 h-5 opacity-20 ${
          resolvedTheme === "dark" ? "bg-white" : "bg-black"
        }`}
      ></li>
      <li
        className={`absolute block list-none w-5 h-5 opacity-20 ${
          resolvedTheme === "dark" ? "bg-white" : "bg-black"
        }`}
      ></li>
      <li
        className={`absolute block list-none w-5 h-5 opacity-20 ${
          resolvedTheme === "dark" ? "bg-white" : "bg-black"
        }`}
      ></li>
      <li
        className={`absolute block list-none w-5 h-5 opacity-20 ${
          resolvedTheme === "dark" ? "bg-white" : "bg-black"
        }`}
      ></li>
      <li
        className={`absolute block list-none w-5 h-5 opacity-30 ${
          resolvedTheme === "dark" ? "bg-white" : "bg-black"
        }`}
      ></li>
      <li
        className={`absolute block list-none w-5 h-5 opacity-30 ${
          resolvedTheme === "dark" ? "bg-white" : "bg-black"
        }`}
      ></li>
      <li
        className={`absolute block list-none w-5 h-5 opacity-30 ${
          resolvedTheme === "dark" ? "bg-white" : "bg-black"
        }`}
      ></li>
      <li
        className={`absolute block list-none w-5 h-5 opacity-30 ${
          resolvedTheme === "dark" ? "bg-white" : "bg-black"
        }`}
      ></li>
      <li
        className={`absolute block list-none w-5 h-5 opacity-30 ${
          resolvedTheme === "dark" ? "bg-white" : "bg-black"
        }`}
      ></li>
    </ul>
  );
};
