import React from "react";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";
import { Outlet } from "react-router-dom";

const LearnNumbers = () => {
  return (
    <ContentWrapper>
      <div className="LearnNumbers p-10">
        <h1 className="text-5xl font-black text-center">
          {" "}
          ← آموزش اعداد یک تا ده →{" "}
        </h1>
        <p className="text-lg font-semibold mt-2">
          برای یادگیری کودک خود، ابتدا عدد را برای او بخوانید و تکرار کنید و از
          او هم بخواهید همین کار را کند سپس توجهش را به شکل نوشتاری و شمارش سیب
          هاجلب نمایید
        </p>
        <p className="text-lg font-semibold text-[#DFA448] mt-2">بعد از آموزش عدد ده وارد بخش بازی شمارش میشوید قبل از رد کردن آموزش آخر همه موارد به خوبی مرور کنید!!!!</p>
        <Outlet />
      </div>
    </ContentWrapper>
  );
};

export default LearnNumbers;
