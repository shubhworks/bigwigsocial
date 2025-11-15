import React from "react";
import toast from "react-hot-toast";

const Button = () => {
  return (
    <div onClick={() => {
        toast.success("Portfolio button clicked!");
    }}>
      <button className="learn-more relative inline-block cursor-pointer outline-none align-middle border-3 no-underline font-inherit text-[15px] font-semibold text-[#1e3a8a] uppercase px-6 py-3 bg-[#eaf3ff] border-[#89a8d8] rounded-[0.75em] transition-all duration-150 ease-[cubic-bezier(0,0,0.58,1)] transform-gpu">
        Portfolio
      </button>

      <style>{`
        /* core 3D setup */
        .learn-more {
          transform-style: preserve-3d;
        }

        /* BEFORE pseudo element for 3D depth */
        .learn-more::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: #cfe1ff; /* lighter blue base */
          border-radius: inherit;
          box-shadow: 0 0 0 2px #89a8d8, 0 0.625em 0 0 #bcd4ff; /* blue shadows */
          transform: translate3d(0, 0.75em, -1em);
          transition: transform 150ms cubic-bezier(0,0,0.58,1),
                      box-shadow 150ms cubic-bezier(0,0,0.58,1);
        }

        /* Hover lift effect */
        .learn-more:hover {
          background: #d9e9ff; /* soft sky-blue */
          transform: translate(0, 0.25em);
        }

        /* Hover pseudo depth */
        .learn-more:hover::before {
          box-shadow: 0 0 0 2px #89a8d8, 0 0.5em 0 0 #bcd4ff;
          transform: translate3d(0, 0.5em, -1em);
        }

        /* Active (pressed) state */
        .learn-more:active {
          background: #d9e9ff;
          transform: translate(0, 0.75em);
        }

        .learn-more:active::before {
          box-shadow: 0 0 0 2px #89a8d8, 0 0 #bcd4ff;
          transform: translate3d(0, 0, -1em);
        }
      `}</style>
    </div>
  );
};

export default Button;
