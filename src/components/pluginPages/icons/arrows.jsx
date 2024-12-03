import * as React from "react";
const Arrows = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 50 50"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2.5}
      d="M18.77 42.709 8.314 32.271m10.457-24.98v35.417M31.229 7.291l10.458 10.438M31.229 42.708V7.29"
    />
  </svg>
);
export default Arrows;
