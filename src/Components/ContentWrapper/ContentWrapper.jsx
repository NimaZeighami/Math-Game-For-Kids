import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div className="h-screen bg-[#0D7D81] flex items-center justify-center">
      <div className="w-[90%]  h-[85%] bg-white border-8 border-[#DFA448] rounded-3xl p-2">
        {/* Your content goes here */}
        {children}
      </div>
    </div>
  );
};

export default ContentWrapper;
