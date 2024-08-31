import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <svg
          className="emoji-404"
          height="249.135"
          width="226"
          viewBox="0 0 226 249.135"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="113" cy="113" r="109" fill="#FFE585" />
          <line
            x1="88.866"
            y1="245.135"
            x2="136.866"
            y2="245.135"
            stroke="#6E6E96"
            strokeWidth="8"
            opacity="0.29"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="154.732"
            y1="245.135"
            x2="168.732"
            y2="245.135"
            stroke="#6E6E96"
            strokeWidth="8"
            opacity="0.17"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="69.732"
            y1="245.135"
            x2="58.732"
            y2="245.135"
            stroke="#6E6E96"
            strokeWidth="8"
            opacity="0.17"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="68.732" cy="93" r="9" fill="#6E6E96" />
          <circle cx="156.398" cy="93" r="9" fill="#6E6E96" />
          <ellipse
            cx="67.732"
            cy="140.894"
            rx="17.372"
            ry="8.106"
            fill="#FF0000"
            opacity="0.18"
          />
          <ellipse
            cx="154.88"
            cy="140.894"
            rx="17.371"
            ry="8.106"
            fill="#FF0000"
            opacity="0.18"
          />
          <path
            d="M13,118.5C13,61.338,59.338,15,116.5,15c55.922,0,101.477,44.353,103.427,99.797  c0.044-1.261,0.073-2.525,0.073-3.797C220,50.802,171.199,2,111,2S2,50.802,2,111c0,50.111,33.818,92.318,79.876,105.06  C41.743,201.814,13,163.518,13,118.5z"
            fill="#FFEFB5"
          />
          <circle
            cx="113"
            cy="113"
            r="109"
            fill="none"
            stroke="#6E6E96"
            strokeWidth="8"
          />
        </svg>
        <div className="tracking-widest mt-4">
          <span className="text-gray-500 text-6xl block">4 0 4</span>
          <span className="text-gray-500 text-xl">
            Sorry, We couldn't find what you are looking for!
          </span>
        </div>
        <div className="mt-6">
          <a
            href="#"
            className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md"
          >
            Go back
          </a>
        </div>
      </div>
      <style>{`
        .emoji-404 {
          position: relative;
          animation: verticalAnimation 2.5s infinite;
        }

        @keyframes verticalAnimation {
          33% { top: 0px; }
          66% { top: 20px; }
          100% { top: 0px; }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
