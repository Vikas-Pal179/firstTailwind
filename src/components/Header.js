// import { Grid } from "@mui/material";
// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Header() {
//   const navigate = useNavigate();
//   return (
//     <Grid container className="bg-purple-400 ">
//       <Grid item xs={6}>
//         <h1 className="  px-11 pt-4 text-slate-50  font-bold text-3xl">
//           My Dummy
//         </h1>
//       </Grid>
//       <Grid item xs={6}>
//         <div className="">
//           <ul className="flex px-10 space-x-10 justify-end  text-slate-50 p-6 cursor-pointer ">
//             <li className="hover:text-slate-800" onClick={() => navigate("/")}>
//               Home
//             </li>
//             <li
//               className="hover:text-slate-800"
//               onClick={() => navigate("/about")}
//             >
//               About
//             </li>
//             <li className="hover:text-slate-800">Phone</li>
//             <li className="hover:text-slate-800">Contact Us</li>
//             <li className="hover:text-slate-800">Phenomena</li>
//           </ul>
//         </div>
//       </Grid>
//     </Grid>
//   );
// }

// export default Header;

import React from "react";
function Header() {
  const [humBurger, setHumBurger] = React.useState(false);
  const [searchState, setSearchState] = React.useState(false);
  console.log(humBurger, "check");
  return (
    <>
      <div className="mainDiv flex sm:justify-evenly items-center xs:justify-evenly">
        {!searchState && (
          <>
            <div className="w-fit mx-2 py-2 px-3  mt-2 md:hidden">
              {humBurger ? (
                <span
                  className="material-symbols-outlined text-3xl cursor-pointer -ml-5 "
                  onClick={() => setHumBurger(!humBurger)}
                >
                  close
                </span>
              ) : (
                <span
                  className="material-symbols-outlined text-3xl cursor-pointer -ml-5 "
                  onClick={() => setHumBurger(!humBurger)}
                >
                  menu
                </span>
              )}
            </div>
            <div className="search sm:-ml-[16%] xs:-ml-[16%] md:order-2 md:-mr-5 mt-3 md:pl-[20%] lg:-mr-20 xl:-mr-40 2xl:-mr-[19%]  ">
              <span
                className="material-symbols-outlined cursor-pointer"
                onClick={() => setSearchState(true)}
              >
                search
              </span>
            </div>
            <div className="middleDiv md:order-1">
              <img src="microsoftLogo.png" alt="logo" className="h-6" />
            </div>
            <div className="rightDiv w-fit py-2  mt-2 text-2xl md:order-2 ">
              <span className="material-symbols-outlined cursor-pointer ">
                shopping_cart
              </span>

              <span className="material-symbols-outlined cursor-pointer text-3xl md:pl-[1.2rem] sm:pl-5% xs:pl-[1rem]">
                account_circle
              </span>
            </div>
            <div className="features md:order-1 -translate-x-96 md:translate-x-0 space-x-6 sm:hidden xs:hidden md:block 2xl:-ml-[18%] xl:-ml-[12%] lg:-ml-[10%] md:-ml-[5%] mt-2">
              <ul className="flex space-x-2 cursor-pointer">
                <li>Microsoft 365</li>
                <li>Teams</li>
                <li>Windows</li>
                <li>Surface</li>
                <li>Xbox</li>
                <li>Support</li>
              </ul>
            </div>
          </>
        )}
      </div>
      {searchState && (
        <div className="searchBox flex justify-center items-center">
          <span
            className="material-symbols-outlined px-5 py-4 text-3xl"
            onClick={() => setSearchState(false)}
          >
            arrow_back
          </span>
          <input
            type="text"
            className="w-4/6 h-8 outline-double mt-1 rounded-lg"
          />
          <button
            onClick={() => setSearchState(false)}
            className="bg-gray-600 px-5 h-9 rounded-lg m-4 text-white mt-4"
          >
            Search
          </button>
        </div>
      )}
    </>
  );
}

export default Header;
