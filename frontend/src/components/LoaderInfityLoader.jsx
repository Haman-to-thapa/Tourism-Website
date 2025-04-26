import React from 'react';

const LoaderInfinityLoader = ({
  size = 100,
  colorFrom = '#3b82f6',  // blue-500
  colorTo = '#9333ea',    // purple-600
  strokeWidth = 6,
  speed = 2,
  className = '',
  circle = true,
  circleColor = 'rgba(59, 130, 246, 0.1)', // subtle background ring
}) => {
  const height = size / 2;

  return (
    <div className={`flex justify-center items-center h-screen ${className}`}>
      <svg
        className="relative animate-float"
        viewBox="0 0 100 50"
        width={size}
        height={height}
        aria-label="Loading..."
        role="status"
      >
        {/* Optional background ring */}
        {circle && (
          <circle
            cx="50"
            cy="25"
            r="23"
            fill="none"
            stroke={circleColor}
            strokeWidth={strokeWidth}
            className="opacity-40"
          />
        )}

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colorFrom} />
            <stop offset="100%" stopColor={colorTo} />
          </linearGradient>
        </defs>

        {/* Infinity Path */}
        <path
          d="M20,25 C20,10 35,10 35,25 C35,40 50,40 50,25 C50,10 65,10 65,25 C65,40 80,40 80,25"
          fill="none"
          stroke="url(#infinityGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray="100"
          strokeDashoffset="100"
          className="drop-shadow-2xl"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="100;0;100"
            dur={`${speed}s`}
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

export default LoaderInfinityLoader;
