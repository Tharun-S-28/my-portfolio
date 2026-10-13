import React from "react";

export function GithubIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function LeetCodeIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .271 3.543 5.614 5.614 0 0 0 2.228 2.658l3.86 2.348 2.404 1.464a4.041 4.041 0 0 0 2.106.595 4.048 4.048 0 0 0 2.92-1.258l3.968-4.225a1.373 1.373 0 0 0-1.002-2.338 1.372 1.372 0 0 0-.974.432l-3.955 4.21a1.306 1.306 0 0 1-.94.405 1.3 1.3 0 0 1-.68-.192l-2.403-1.464-3.86-2.349a2.868 2.868 0 0 1-1.137-1.356 2.824 2.824 0 0 1-.138-1.808 2.73 2.73 0 0 1 .618-1.074l3.854-4.126 5.406-5.788a1.374 1.374 0 0 0-.416-2.225 1.378 1.378 0 0 0-.58-.124zm-2.073 10.96a1.374 1.374 0 0 0-.973.402l-2.03 2.03a1.374 1.374 0 1 0 1.943 1.943l2.03-2.03a1.374 1.374 0 0 0-.97-2.345z" />
    </svg>
  );
}

export function CodeChefIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M11.97 2c-3.1 0-5.63 2.53-5.63 5.63 0 .76.15 1.48.42 2.15C4.08 10.74 2 13.12 2 16c0 3.31 2.69 6 6 6h7.97c3.31 0 6-2.69 6-6 0-2.88-2.08-5.26-4.76-6.22.27-.67.42-1.39.42-2.15 0-3.1-2.53-5.63-5.66-5.63zm0 2c2 0 3.63 1.63 3.63 3.63 0 .58-.14 1.13-.38 1.62-.33.67-.18 1.48.36 1.98.92.85 1.42 2.03 1.42 3.27 0 2.48-2.02 4.5-4.5 4.5H7.97c-2.48 0-4.5-2.02-4.5-4.5 0-1.24.5-2.42 1.42-3.27.54-.5.69-1.31.36-1.98-.24-.49-.38-1.04-.38-1.62 0-2 1.63-3.63 3.63-3.63 1.05 0 2 .45 2.66 1.17.48.52 1.25.52 1.73 0 .66-.72 1.61-1.17 2.66-1.17z" />
    </svg>
  );
}
