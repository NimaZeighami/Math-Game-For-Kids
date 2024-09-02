import React from "react";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";
import { Outlet } from "react-router-dom";

const LearnNumbers = () => {
  return (
    <ContentWrapper>
      <div className="LearnNumbers p-10">
        <h1 className="text-5xl font-black text-center"> ← آموزش اعداد → </h1>
        <p className="text-2xl font-semibold mt-7">
          از کودک خود بخواهید که 
        </p>
        <Outlet />
      </div>
    </ContentWrapper>
  );
};

export default LearnNumbers;
