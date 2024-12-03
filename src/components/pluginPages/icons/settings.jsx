import * as React from "react";
const SvgComponent = (props) => (
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
      d="M25 31.25a6.25 6.25 0 1 0 0-12.5 6.25 6.25 0 0 0 0 12.5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2.5}
      d="M4.167 26.834v-3.667a3.97 3.97 0 0 1 3.958-3.958c3.77 0 5.312-2.667 3.416-5.938A3.956 3.956 0 0 1 13 7.875l3.604-2.062c1.646-.98 3.77-.396 4.75 1.25l.23.396c1.874 3.27 4.957 3.27 6.853 0l.23-.396c.979-1.646 3.104-2.23 4.75-1.25l3.604 2.062a3.956 3.956 0 0 1 1.458 5.396c-1.896 3.271-.354 5.938 3.417 5.938a3.97 3.97 0 0 1 3.958 3.958v3.667a3.97 3.97 0 0 1-3.958 3.958c-3.771 0-5.313 2.667-3.417 5.938 1.083 1.895.438 4.312-1.458 5.395l-3.605 2.063c-1.645.979-3.77.396-4.75-1.25l-.229-.396c-1.875-3.27-4.958-3.27-6.854 0l-.229.396c-.98 1.646-3.104 2.229-4.75 1.25L13 42.125a3.956 3.956 0 0 1-1.459-5.395c1.896-3.271.355-5.938-3.416-5.938a3.97 3.97 0 0 1-3.958-3.958Z"
    />
  </svg>
);
export default SvgComponent;
