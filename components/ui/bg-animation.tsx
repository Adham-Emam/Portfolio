"use client";
import { useTheme } from "next-themes";

export const BackgroundAnimation = () => {
  const { resolvedTheme } = useTheme();

  // Configuration for each circle
  const circlesConfig = [
    { id: 1, opacity: "opacity-20" },
    { id: 2, opacity: "opacity-20" },
    { id: 3, opacity: "opacity-20" },
    { id: 4, opacity: "opacity-20" },
    { id: 5, opacity: "opacity-20" },
    { id: 6, opacity: "opacity-30" },
    { id: 7, opacity: "opacity-30" },
    { id: 8, opacity: "opacity-30" },
    { id: 9, opacity: "opacity-30" },
    { id: 10, opacity: "opacity-30" },
  ];

  return (
    <ul className="circles absolute top-0 left-0 w-full h-full">
      {circlesConfig.map((circle) => (
        <li
          key={circle.id}
          className={`absolute block list-none ${circle.opacity} ${
            resolvedTheme === "dark" ? "bg-white" : "bg-black"
          }`}
        ></li>
      ))}
    </ul>
  );
};
