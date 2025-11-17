import { Marquee } from '@/components/Marquee';
import {
  firstRow,
  secondRow,
  thirdRow,
  fourthRow,
} from '@/constants/RightSide';
import { motion } from 'framer-motion';
import {
  slideInLeft,
  staggerContainer,
  bounce,
  fadeIn,
  headerReveal,
} from '@/styles/Animations';
import Image from 'next/image';

const ReviewCard = ({
  img,
  title,
  description,
  buttonText,
}: {
  img: string;
  title: string;
  description?: string;
  buttonText?: string;
}) => {
  return (
    <figure className="relative h-auto min-h-[240px] w-full cursor-pointer overflow-hidden rounded-xl border p-6 md:p-7 border-white/40 bg-white/80 flex flex-col items-center text-center shadow-lg" style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden', flexShrink: 0, minWidth: '100%' }}>
      {/* SVG Icon */}
      {/* <img className="w-14 h-14 md:w-16 md:h-16 mb-3 object-contain" alt={title} src={img} loading="lazy" /> */}

      <Image
        src={img}
        width={500}
        height={500}
        alt='logo'
      />
    
      {/* Title */}
      {/* <figcaption className="text-lg md:text-xl font-semibold text-[var(--color-text-primary)] mb-2">
        {title}
      </figcaption> */}

      {/* Description */}
      {/* <p className="text-sm md:text-base font-medium text-[var(--color-text-secondary)] mt-1 leading-relaxed px-2">{description}</p> */}

      {/* Button */}
      {/* <button className="mt-5 px-4 py-2 border rounded-lg border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 hover:bg-[var(--color-accent)]/20 text-sm md:text-base font-medium text-[var(--color-accent)] transition-colors">
        {buttonText}
      </button> */}
    </figure>
  );
};

export function FloatingCards() {
  return (
    <div className="relative flex flex-col lg:flex-row h-auto lg:h-[700px] w-full items-center justify-center gap-6 lg:gap-10 overflow-visible [perspective:300px] px-2 sm:px-4 md:px-6 lg:px-8 bg-transparent">
      {/* Marquee Section - Only show the marquee, remove left side content */}
      <div
        className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 w-full"
        style={{
          transform: 'translate3d(0, 0, 0) rotateX(10deg) rotateY(-5deg) rotateZ(10deg)',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        <div className="group relative w-80 md:w-96 lg:w-[420px] overflow-hidden flex-shrink-0">
          <Marquee
            pauseOnHover
            vertical
            className="[--duration:25s]"
          >
            {firstRow.map((review) => (
              <ReviewCard key={review.title} {...review} />
            ))}
          </Marquee>
        </div>
        <div className="group relative w-80 md:w-96 lg:w-[420px] overflow-hidden flex-shrink-0">
          <Marquee
            reverse
            pauseOnHover
            vertical
            className="[--duration:30s]"
          >
            {secondRow.map((review) => (
              <ReviewCard key={review.title} {...review} />
            ))}
          </Marquee>
        </div>
        <div className="group relative w-80 md:w-96 lg:w-[420px] overflow-hidden flex-shrink-0">
          <Marquee
            reverse
            pauseOnHover
            vertical
            className="[--duration:28s]"
          >
            {thirdRow.map((review) => (
              <ReviewCard key={review.title} {...review} />
            ))}
          </Marquee>
        </div>
        <div className="group relative w-80 md:w-96 lg:w-[420px] overflow-hidden flex-shrink-0">
          <Marquee
            pauseOnHover
            vertical
            className="[--duration:32s]"
          >
            {fourthRow.map((review) => (
              <ReviewCard key={review.title} {...review} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
