import React from "react";
import { FaGithub } from "react-icons/fa";

export default function GitHubIcon() {
  return (
    <div className="flex items-center justify-center">
      <a
        href="https://github.com/Fuugarlu/womanco"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="absolute top-0 left-0 text-2xl cursor-pointer hover:text-blue-500" /> {/* GitHub icon */}
      </a>
    </div>
  );
}
