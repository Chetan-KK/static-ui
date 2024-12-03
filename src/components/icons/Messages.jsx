import * as React from "react";
const Messages = (props) => (
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
      d="M37.459 22.48v8.332c0 .542-.021 1.063-.084 1.563-.479 5.625-3.791 8.417-9.895 8.417h-.834c-.52 0-1.02.25-1.333.666l-2.5 3.334c-1.104 1.479-2.896 1.479-4 0l-2.5-3.334c-.271-.354-.875-.666-1.333-.666h-.834c-6.646 0-9.979-1.646-9.979-9.98V22.48c0-6.104 2.813-9.416 8.417-9.896.5-.062 1.02-.083 1.562-.083H27.48c6.645 0 9.979 3.333 9.979 9.98Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2.5}
      d="M45.791 14.147v8.333c0 6.125-2.812 9.417-8.416 9.896.062-.5.083-1.02.083-1.562V22.48c0-6.645-3.333-9.979-9.98-9.979H14.146c-.541 0-1.062.021-1.562.084.48-5.605 3.792-8.417 9.896-8.417h13.333c6.646 0 9.98 3.333 9.98 9.98Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M28.115 27.604h.019m-7.31 0h.019m-7.311 0h.019"
    />
  </svg>
);
export default Messages;
