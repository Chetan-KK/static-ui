import * as React from "react";
const Happy = (props) => (
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
      d="M18.75 45.833h12.5c10.416 0 14.583-4.167 14.583-14.584v-12.5c0-10.416-4.166-14.583-14.583-14.583h-12.5c-10.417 0-14.584 4.167-14.584 14.583v12.5c0 10.417 4.167 14.584 14.584 14.584Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2.5}
      d="M32.291 20.313a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Zm-14.582 0a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Zm-.209 7.396h15c1.042 0 1.875.833 1.875 1.875A9.362 9.362 0 0 1 25 38.959a9.362 9.362 0 0 1-9.375-9.375c0-1.042.833-1.875 1.875-1.875Z"
    />
  </svg>
);
export default Happy;
