import React from "react";
import logo from "../logo/logo.jpeg";
import "../App.css";
import { FaSun, FaMoon } from "react-icons/fa"; // Assuming you have installed the react-icons package
import { useDispatch, useSelector } from "react-redux";
import { update } from "../store/features/theme";

export function Navbar() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  console.log(theme);

  return (
    <div className="bg-white-100 px-[15px]  h-[95px] py-4 flex justify-between items-center custom-shadow">
      <div>
        <img src={logo} alt="Logo" className="h-[80px] w-[80px]" />
      </div>

      <div>
        {theme && theme ? (
          <FaMoon
            className="text-white text-2xl"
            onClick={() => dispatch(update())}
          />
        ) : (
          <FaSun
            className="text-yellow-500 text-2xl"
            onClick={() => dispatch(update())}
          />
        )}
      </div>
    </div>
  );
}
