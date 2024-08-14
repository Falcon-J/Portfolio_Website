import React from "react";

const DownloadResumeButton = () => {
  return (
    <a
      href="https://drive.usercontent.google.com/u/0/uc?id=1zzakeMbisPKXMf-BMgfSFt4Pmb0QMFqe&export=download"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Download Resume
      </button>
    </a>
  );
};

export default DownloadResumeButton;
