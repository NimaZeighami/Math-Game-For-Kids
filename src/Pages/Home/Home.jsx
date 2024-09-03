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
      <h1 className="text-center text-4xl"> به نام خدا </h1>
      <div className="flex flex-col items-center justify-between ">
        <div className="Text p-8">
          <p class="text-2xl text-wrap text-gray-600 mt-4">
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
          className="bg-[#1D8C96]  text-white rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500 self-end ml-10"
        >
          تبت نام در مهدکودک ریاضی آنلاین
        </a>
        <div>
          <img
            src={homePictures.pictureFour}
            alt="hello"
            className="object-cover w-full "
          />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Home;
