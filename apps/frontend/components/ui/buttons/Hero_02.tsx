import React from "react";

const HeroBtn2 = ({text}: {text: string;}) => {
  return (
    <div className="relative">
      <button className="cta-btn flex items-center py-[11px] px-[33px] text-[25px] text-white bg-[#6225e6] shadow-[6px_6px_0px_black] skew-x-[-15deg] border-0 cursor-pointer transition-all duration-1000 hover:shadow-[10px_10px_0_#fbc638]">

        {/* Text */}
        <span className="skew-x-15">{text}</span>

        {/* Arrow Container */}
        <span className="second ml-[30px] w-5 relative top-[12%] transition-all duration-500">
          <svg width="50px" height="20px" viewBox="0 0 66 43">
            <g fill="none" fillRule="evenodd">

              <path className="one" d="M40.1543933,3.89485454..." fill="#FFFFFF" />
              <path className="two" d="M20.1543933,3.89485454..." fill="#FFFFFF" />
              <path className="three" d="M0.154393339,3.89485454..." fill="#FFFFFF" />

            </g>
          </svg>
        </span>

      </button>

      <style>{`
        .cta-btn:hover .second {
          margin-right: 45px;
        }

        .one {
          transition: 0.4s;
          transform: translateX(-60%);
        }
        .two {
          transition: 0.5s;
          transform: translateX(-30%);
        }

        .cta-btn:hover .one {
          transform: translateX(0%);
          animation: color_anim 1s infinite 0.6s;
        }
        .cta-btn:hover .two {
          transform: translateX(0%);
          animation: color_anim 1s infinite 0.4s;
        }
        .cta-btn:hover .three {
          animation: color_anim 1s infinite 0.2s;
        }

        @keyframes color_anim {
          0% { fill: white; }
          50% { fill: #fbc638; }
          100% { fill: white; }
        }
      `}</style>
    </div>
  );
};

export default HeroBtn2;
