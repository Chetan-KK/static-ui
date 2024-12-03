import * as React from "react";
const FirstLine = (props) => (
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
      strokeWidth={2.5}
      d="M29.167 9.375H43.75M29.167 19.793H43.75M6.25 30.207h37.5M6.25 40.625h37.5M19.792 17.561v-5.958c0-2.333-.938-3.271-3.292-3.271h-5.937c-2.334 0-3.271.938-3.271 3.27v5.938c0 2.355.937 3.292 3.27 3.292H16.5c2.355 0 3.292-.938 3.292-3.27Z"
    />
  </svg>
);
export default FirstLine;
