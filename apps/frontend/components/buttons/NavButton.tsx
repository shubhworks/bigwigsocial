import React from "react";

const NavPortfolioBtn = ({text}: {
    text: string;
}) => {
    return (
        <div onClick={() => {
          window.location.href = "/#portfolio"
        }} className="relative">
            <button className="btn relative appearance-none bg-transparent border-none text-[#0f1923] cursor-pointer p-2 mb-5 uppercase font-bold text-[14px] transition-all duration-150 ease-linear">

                {/* Inner container */}
                <span className="button_lg relative block py-[10px] px-[20px] text-white bg-[#0f1923] overflow-hidden shadow-[inset_0_0_0_1px_transparent]">

                    {/* Sliding red bar */}
                    <span className="button_sl absolute top-0 -bottom-px left-[-8px] w-0 bg-[#2d3af8] skew-x-[-15deg] transition-all duration-200 ease-linear"></span>

                    <span className="relative"> {text} </span>
                </span>
            </button>

            {/* Pseudo-element styles */}
            <style>{`
        .btn::before,
        .btn::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          height: calc(50% - 5px);
          border: 1px solid #7D8082;
          transition: all .15s ease;
        }

        .btn::before {
          top: 0;
          border-bottom-width: 0;
        }

        .btn::after {
          bottom: 0;
          border-top-width: 0;
        }

        .btn:active::before,
        .btn:active::after {
          left: 3px;
          right: 3px;
        }

        .btn:active::before {
          top: 3px;
        }

        .btn:active::after {
          bottom: 3px;
        }

        .button_lg::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 2px;
          height: 2px;
          background-color: #0f1923;
        }

        .button_lg::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          width: 4px;
          height: 4px;
          background-color: #0f1923;
          transition: all .2s ease;
        }

        .btn:hover .button_sl {
          width: calc(100% + 15px);
        }

        .btn:hover .button_lg::after {
          background-color: white;
        }
      `}</style>
        </div>
    );
};

export default NavPortfolioBtn;
