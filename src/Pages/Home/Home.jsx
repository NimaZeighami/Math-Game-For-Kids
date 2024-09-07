import React from "react";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";

const homePictures = {
  pictureOne: require("../../Assets/Images/LandingPicturesOfHome/Home.jpg"),
  pictureTwo: require("../../Assets/Images/LandingPicturesOfHome/HomePic2.jpg"),
  pictureThree: require("../../Assets/Images/LandingPicturesOfHome/HomePic3.jpg"),
  pictureFour: require("../../Assets/Images/LandingPicturesOfHome/svgviewer-png-output.png"),
};

const Home = () => {
  return (
    <ContentWrapper>
      <h1 className="text-center text-3xl md:text-4xl"> به نام خدا </h1>
      <div className="flex flex-col items-center justify-between mx-auto max-w-screen-lg overflow-hidden">
        <div className="Text p-4">
          <p className="text-2xl text-wrap text-gray-600 mt-4">
            در این برنامه فرزند شما یک سرگرمی مفید می یابد که نه تنها باعث اتلاف
            شدن وقتش نمیشود بلکه ریاضی را به خوبی یاد میگیرد و برای یادگیری
            ریاضی اول دبستان بسیار راحت خواهد بود چرا که خیلی از مباحث یا برای
            او تکراری خواهد بود یا اینکه پایه قوی برای یادگیری آن خواهد داشت این
            برنامه که توسط فرشید فرخی برای دانشگاه شهید رجایی توسعه داده شده است
            یک مهدکودک ریاضی آنلاین برای کودکان شماست تا بتوانید بدون خارج کردن
            فرشته کوچک خود از خانه و درگیری با خطرات و هزینه ها و از دست رفتن
            زمان او را برای مدرسه آماده کنید
          </p>
        </div>
        <a
          href="/login"
          className="bg-[#1D8C96] text-white  text-xl rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500 self-center md:self-end mt-4"
        >
          تبت نام در مهدکودک ریاضی آنلاین
        </a>
        <div className="w-full mt-4">
          <img
            src={homePictures.pictureFour}
            alt="HomePic"
            className="object-contain   w-full"
          />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Home;
