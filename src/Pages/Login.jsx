import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

// const PandaFace = ({ lookingAt }) => {
//   return (
//     <div className="relative w-64 h-64 mx-auto mb-8">
//       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full">
//         <div className="absolute top-0 left-0 w-12 h-12 bg-gray-800 rounded-full transform -rotate-38 origin-bottom-right"></div>
//         <div className="absolute top-0 right-0 w-12 h-12 bg-gray-800 rounded-full transform rotate-38 origin-bottom-left"></div>
//         <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-white rounded-full">
//           <div className="absolute top-6 left-6 w-8 h-6 bg-pink-200 rounded-full transform rotate-25"></div>
//           <div className="absolute top-6 right-6 w-8 h-6 bg-pink-200 rounded-full transform -rotate-25"></div>
//           <div className={`absolute top-10 left-8 w-10 h-12 bg-gray-800 rounded-full `}>
//             <div className={`absolute top-3 left-3 w-4 h-4 bg-white rounded-full ${lookingAt === 'username' ? 'transform translate-y-2' : ''}`}></div>
//           </div>
//           <div className={`absolute top-10 right-8 w-10 h-12 bg-gray-800 rounded-full`}>
//             <div className={`absolute top-3 right-3 w-4 h-4 bg-white rounded-full ${lookingAt === 'username' ? 'transform translate-y-2' : ''}`}></div>
//           </div>
//           <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-800 rounded-full rotate-45"></div>
//           <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex">
//             <div className="w-5 h-3 bg-gray-800 rounded-b-full mr-1">
//               <div className="w-4 h-2 bg-white rounded-b-full mx-auto"></div>
//             </div>
//             <div className="w-5 h-3 bg-gray-800 rounded-b-full ml-1">
//               <div className="w-4 h-2 bg-white rounded-b-full mx-auto"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={`absolute bottom-0 left-12 w-12 h-16 bg-gray-800 rounded-2xl transition-all duration-300 ease-in-out ${lookingAt === 'password' ? 'transform translate-x-6 translate-y-[-60px] rotate-45' : ''}`}></div>
//       <div className={`absolute bottom-0 right-12 w-12 h-16 bg-gray-800 rounded-2xl transition-all duration-300 ease-in-out ${lookingAt === 'password' ? 'transform -translate-x-6 translate-y-[-60px] -rotate-45' : ''}`}></div>
//       <div className="absolute bottom-0 left-20 w-16 h-16 bg-gray-800 rounded-3xl">
//         <div className="absolute top-2 left-2 w-12 h-8 bg-white rounded-2xl">
//           <div className="absolute top-6 left-2 w-3 h-3 bg-gray-800 rounded-full"></div>
//           <div className="absolute top-6 left-6 w-3 h-3 bg-gray-800 rounded-full"></div>
//           <div className="absolute top-6 right-2 w-3 h-3 bg-gray-800 rounded-full"></div>
//         </div>
//       </div>
//       <div className="absolute bottom-0 right-20 w-16 h-16 bg-gray-800 rounded-3xl">
//         <div className="absolute top-2 left-2 w-12 h-8 bg-white rounded-2xl">
//           <div className="absolute top-6 left-2 w-3 h-3 bg-gray-800 rounded-full"></div>
//           <div className="absolute top-6 left-6 w-3 h-3 bg-gray-800 rounded-full"></div>
//           <div className="absolute top-6 right-2 w-3 h-3 bg-gray-800 rounded-full"></div>
//         </div>
//       </div>
//     </div>
//   );
// };
const PandaFace = ({ lookingAt }) => {
    return (
      <div className="relative w-64 h-64 mx-auto mb-8 border-4 border-gray-500 rounded-full bg-white">
        {/* Panda Ears */}
        <div className="absolute top-[-28px] left-6 w-20 h-20 bg-gray-800 rounded-full"></div>
        <div className="absolute top-[-28px] right-6 w-20 h-20 bg-gray-800 rounded-full"></div>
        
        {/* Panda Eyes */}
        <div className="absolute top-16 left-16 w-12 h-16 bg-gray-800 rounded-full">
          <div className={`absolute top-3 left-3 w-6 h-6 bg-white rounded-full ${lookingAt === 'username' ? 'transform translate-y-6' : ''}`}></div>
        </div>
        <div className="absolute top-16 right-16 w-12 h-16 bg-gray-800 rounded-full">
          <div className={`absolute top-3 left-3 w-6 h-6 bg-white rounded-full ${lookingAt === 'username' ? 'transform translate-y-6' : ''}`}></div>
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
        <div className={`absolute bottom-0 left-12 w-12 h-16 bg-gray-800 rounded-2xl transition-all duration-300 ease-in-out ${lookingAt === 'password' ? 'transform translate-x-6 translate-y-[-60px] rotate-45' : ''}`}></div>
        <div className={`absolute bottom-0 right-12 w-12 h-16 bg-gray-800 rounded-2xl transition-all duration-300 ease-in-out ${lookingAt === 'password' ? 'transform -translate-x-6 translate-y-[-60px] -rotate-45' : ''}`}></div>
      </div>
    );
  };
const LoginPage = () => {
  const [lookingAt, setLookingAt] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen bg-[url('../public/LoginBackgroundImage.jpeg')]   flex items-center justify-start "  dir="rtl">

      <div className="bg-white rounded-lg shadow-xl p-8 w-96 h-screen">
        <PandaFace lookingAt={lookingAt} />
        <form className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">نام کاربری</label>
            <input
              id="username"
              type="text"
              placeholder='Kuchuloo / Hamrah Kuchuloo'
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              onFocus={() => setLookingAt('username')}
              onBlur={() => setLookingAt('')}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">رمز عبور</label>
            <div className="relative">
              <input
                id="password"
                placeholder='********'
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                onFocus={() => setLookingAt('password')}
                onBlur={() => setLookingAt('')}
              />
              <button
                type="button"
                className="absolute inset-y-0 left-0 px-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              ورود
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;