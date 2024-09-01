import React from "react";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";
import { Outlet } from "react-router-dom";

const LearnNumbers = () => {
  return (
    <ContentWrapper>
      <div className="LearnNumbers p-10">
        <h1 className="text-5xl font-black text-center"> ← آموزش اعداد   → </h1>
        <p className="text-2xl font-semibold mt-7">     برای بهبود یادگیری کودک لطف کنید ،  توجه او را به شکل نوشتاری و شمارش سیب ها جلب نمایید و عدد را برای او بخوانید و تکرار کنید</p>
        <Outlet />
      </div>
    </ContentWrapper>
  );
};

export default LearnNumbers;
