import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PandaFace = ({ lookingAt }) => {
  return (
    <div className="relative w-64 h-64 mx-auto mb-8 border-4 border-gray-500 rounded-full bg-white">
      {/* Panda Ears */}
      <div className="absolute top-[-28px] left-6 w-20 h-20 bg-gray-800 rounded-full"></div>
      <div className="absolute top-[-28px] right-6 w-20 h-20 bg-gray-800 rounded-full"></div>

      {/* Panda Eyes */}
      <div className="absolute top-16 left-16 w-12 h-16 bg-gray-800 rounded-full">
        <div
          className={`absolute top-3 left-3 w-6 h-6 bg-white rounded-full ${
            lookingAt === "username" ? "transform translate-y-6" : ""
          }`}
        ></div>
      </div>
      <div className="absolute top-16 right-16 w-12 h-16 bg-gray-800 rounded-full">
        <div
          className={`absolute top-3 left-3 w-6 h-6 bg-white rounded-full ${
            lookingAt === "username" ? "transform translate-y-6" : ""
          }`}
        ></div>
      </div>

      {/* Panda Nose */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gray-800 rounded-full"></div>

      {/* Panda Mouth */}
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-16 h-8 flex justify-between">
        <div className="w-6 h-6 bg-gray-800 rounded-b-full">
          <div className="w-4 h-2 bg-white rounded-b-full mx-auto"></div>
        </div>
        <div className="w-6 h-6 bg-gray-800 rounded-b-full">
          <div className="w-4 h-2 bg-white rounded-b-full mx-auto"></div>
        </div>
      </div>

      {/* Panda Cheeks (For lookingAt = 'password') */}
      <div
        className={`absolute bottom-0 left-12 w-12 h-16 bg-gray-800 rounded-2xl transition-all duration-300 ease-in-out ${
          lookingAt === "password"
            ? "transform translate-x-6 translate-y-[-60px] rotate-45"
            : ""
        }`}
      ></div>
      <div
        className={`absolute bottom-0 right-12 w-12 h-16 bg-gray-800 rounded-2xl transition-all duration-300 ease-in-out ${
          lookingAt === "password"
            ? "transform -translate-x-6 translate-y-[-60px] -rotate-45"
            : ""
        }`}
      ></div>
    </div>
  );
};

const Login = () => {
  const [lookingAt, setLookingAt] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen bg-[url('../public/LoginBackgroundImage.jpeg')]   p-4 md:p-8 flex items-center justify-start"
      dir="rtl"
      style={{ fontFamily: "fantasy" }}
    >
      <div className="flex flex-col justify-around bg-slate-500 rounded-full shadow-xl p-6 md:p-8 w-full max-w-md h-auto  min-h-[800px]">
        <PandaFace lookingAt={lookingAt} />
        <form className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-base font-semibold text-white mb-2"
            >
              نام کاربری
            </label>
            <input
              dir="ltr"
              id="username"
              type="text"
              placeholder="Ali Kuchuloo / Pedare Ali Kuchuloo"
              className="w-full px-3 py-2 text-base rounded-3xl border-[#19868B] border-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              onFocus={() => setLookingAt("username")}
              onBlur={() => setLookingAt("")}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white mb-2"
            >
              رمز عبور
            </label>
            <div className="relative">
              <input
                id="password"
                placeholder="********"
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 text-base rounded-3xl border-[#19868B] border-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                onFocus={() => setLookingAt("password")}
                onBlur={() => setLookingAt("")}
              />
              <button
                type="button"
                className="absolute inset-y-0 left-0 px-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#19868B] text-white text-lg font-bold rounded-3xl  hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              ورود
            </button>
          </div>
          <div className="flex justify-around">
            <p className="text-white">فراموشی رمز عبور</p>
            <p className="text-white">ثبت نام</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
