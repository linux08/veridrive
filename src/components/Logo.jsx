import React from 'react';

export default function Logo({ size = 34 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" rx="16" fill="#000080" />
      {/* White left arm */}
      <polygon points="14,15 40,15 52,83 26,83" fill="white" />
      {/* Antique Gold right arm */}
      <polygon points="40,15 86,15 74,83 52,83" fill="#D4AF37" />
    </svg>
  );
}
