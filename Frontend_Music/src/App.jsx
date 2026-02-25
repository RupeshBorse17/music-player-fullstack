// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import axios from "axios";

// import Homepage from "./pages/Homepage";
// import ResetPassword from "./components/auth/ResetPassword";
// import { setUser, setLoading, clearError, logout, setError } from "./redux/slices/authSlice";
// // import Login from "./pages/Login";
// // import Register from "./pages/Register";

// // import Login from "./components/auth/Login";
// // import Signup from "./components/auth/Signup";

// import "./App.css";

// function App() {

//   const dispatch = useDispatch();
//   const {token,user} = useSelector((state)=> state.auth);

//   useEffect(()=>{

//     const storedToken = token || localStorage.getItem("token");
//     if(!storedToken || user) return;

//     const fetchUser = async()=>{
//       try{
//         dispatch(setLoading(true));
//         dispatch(clearError());

//         const res = await axios.get(
//           `${import.meta.env.VITE_BASE_URL}/api/auth/me`,
//           {
//             headers:{
//               Authorization:`Bearer ${storedToken}`,
//             },
//           }
//         );
//         dispatch(setUser({user:res.data,token:
//           storedToken
//         }));
//       }

//       catch(error){
//         console.error("getme failed",error);
//         dispatch(logout());
//         dispatch(setError(error?.response?.data?.message ||
//           "Session expired Plese login Again",
//         ));
//       }

//       finally{
//         dispatch(setLoading(false));
//       }
//     };

//     fetchUser();

//   },[dispatch,token,user]);
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/reset-password/:token" element={<ResetPassword/>} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import Homepage from "./pages/Homepage";
import ResetPassword from "./components/auth/ResetPassword";

import {
  setUser,
  setLoading,
  clearError,
  logout,
  setError,
} from "./redux/slices/authSlice";

import "./App.css";

// ✅ Safe BASE URL fallback
const BASE_URL =
  import.meta.env.VITE_BASE_URL ||
  "https://music-player-fullstack-60ns.onrender.com";

function App() {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);

  useEffect(() => {
    const storedToken = token || localStorage.getItem("token");

    // ✅ If no token or already have user → stop
    if (!storedToken || user) return;

    const fetchUser = async () => {
      try {
        dispatch(setLoading(true));
        dispatch(clearError());

        const res = await axios.get(
          `${BASE_URL}/api/auth/me`,
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
            withCredentials: true, // ✅ important
          }
        );

        dispatch(
          setUser({
            user: res.data,
            token: storedToken,
          })
        );
      } catch (error) {
        console.error("getMe failed:", error);

        dispatch(logout());

        dispatch(
          setError(
            error?.response?.data?.message ||
              "Session expired. Please login again."
          )
        );
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchUser();
  }, [dispatch, token, user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/reset-password/:token"
          element={<ResetPassword />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;