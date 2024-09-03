import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

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
  const [isRegistering, setIsRegistering] = useState(false);
  const [role, setRole] = useState("child");

  const handleRegisterClick = () => {
    setIsRegistering(true);
    setRole(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    if (isRegistering) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("role", role);

      MySwal.fire({
        title: "ثبت نام موفق!",
        text: "شما با موفقیت ثبت نام شدید.",
        icon: "success",
        confirmButtonText: "باشه",
        customClass: {
          popup: "bg-white border-4 border-green-500 rounded-3xl",
          confirmButton: "bg-green-500 text-white rounded-full px-6 py-2",
        },
      }).then(() => {
        setIsRegistering(false);
      });
    } else {
      const storedUsername = localStorage.getItem("username");
      const storedPassword = localStorage.getItem("password");

      if (username === storedUsername && password === storedPassword) {
        const storedRole = localStorage.getItem("role");
        if (storedRole === "child") {
          window.location.href = "/games-list";
        } else if (storedRole === "parent") {
          window.location.href = "/level-progress-screen";
        }
      } else {
        MySwal.fire({
          title: "خطا",
          text: "نام کاربری یا رمز عبور اشتباه است.",
          icon: "error",
          confirmButtonText: "باشه",
          customClass: {
            popup: "bg-white border-4 border-red-500 rounded-3xl",
            confirmButton: "bg-red-500 text-white rounded-full px-6 py-2",
          },
        });
      }
    }
  };

  return (
    <div
      className="min-h-screen bg-[url('../public/LoginBackgroundImage.jpeg')] p-4 md:p-8 flex items-center justify-start"
      dir="rtl"
      style={{ fontFamily: "fantasy" }}
    >
      <div className="flex flex-col justify-around bg-slate-500 rounded-full shadow-xl p-6 md:p-8 w-full max-w-md h-auto  min-h-[800px]">
        <PandaFace lookingAt={lookingAt} />
        <form className="space-y-6" onSubmit={handleSubmit}>
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
              required
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
                required
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

          {!isRegistering && (
            <div className="flex justify-between items-center">
              <label className="text-white font-medium text-sm">
                <input
                  type="radio"
                  name="role"
                  value="child"
                  className="mr-2"
                  checked={role === "child"}
                  onChange={(e) => setRole(e.target.value)}
                />
                کودک
              </label>
              <label className="text-white font-medium text-sm">
                <input
                  type="radio"
                  name="role"
                  value="parent"
                  className="mr-2"
                  checked={role === "parent"}
                  onChange={(e) => setRole(e.target.value)}
                />
                والدین
              </label>
            </div>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#19868B] text-white text-lg font-bold rounded-3xl  hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              {isRegistering ? "ثبت نام" : "ورود"}
            </button>
          </div>
          <div className="flex justify-center">
            <p
              className="text-white cursor-pointer"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? "بازگشت به ورود" : "ثبت نام"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
