import React from 'react';
import { ReactElement } from "react";

interface AboutHeroCardProps {
  logo: ReactElement;
  title: string;
  description: string;
}

const FlipCard = ({ logo, title, description }: AboutHeroCardProps) => {
  return (
    <div className="group cursor-pointer w-full h-80 perspective-1000">
      <div className="relative w-full h-full transition-transform duration-600 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center text-center backface-hidden">
          <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] rounded-full flex items-center justify-center text-white mb-4">
            {logo}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] rounded-full my-2"></div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Click/Hover to learn more about our {title.toLowerCase()} services...
          </p>
          <div className="absolute bottom-4 right-4 w-8 h-8 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-white text-sm opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
            ⟳
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute font-bold inset-0 bg-linear-to-br from-accent to-(--color-accent-dark) rounded-2xl p-6 flex flex-col justify-center items-center text-center backface-hidden rotate-y-180 text-white">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
            {logo}
          </div>
          <h4 className="text-lg font-bold mb-2 text-white">{title}</h4>
          <div className="w-10 h-0.5 bg-white/60 rounded-full my-2"></div>
          <div className="text-sm leading-relaxed opacity-90 max-h-28 overflow-y-auto pr-2 scrollbar-thin">
            {description}
          </div>
          <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-sm backdrop-blur-sm">
            ⟳
          </div>
        </div>
      </div>

      <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .transform-style-preserve-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                }
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
                .scrollbar-thin::-webkit-scrollbar {
                    width: 4px;
                }
                .scrollbar-thin::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 2px;
                }
                .scrollbar-thin::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 2px;
                }
            `}</style>
    </div>
  );
};

export default FlipCard;