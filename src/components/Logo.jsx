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
      <rect width="100" height="100" rx="16" fill="#00006B" />
      {/* White left arm */}
      <polygon points="14,15 40,15 52,83 26,83" fill="white" />
      {/* Gold right arm */}
      <polygon points="40,15 86,15 74,83 52,83" fill="#C9A84C" />
    </svg>
  );
}
