import * as React from "react";
const Basketball = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 18"
  >
    <g stroke="#fff" strokeMiterlimit={10} strokeWidth={1.5} clipPath="url(#a)">
      <path
        fill="none"
        d="M9 15.75a6.75 6.75 0 1 0-.001-13.501A6.75 6.75 0 0 0 9 15.75Z"
      />
      <path
        strokeLinecap="round"
        d="M2.265 8.574c1.447.525 2.947.878 4.477 1.035h.053a20.422 20.422 0 0 0 4.433 0h.044c1.47-.15 2.91-.48 4.298-.967"
      />
      <path
        strokeLinecap="round"
        d="M4.327 4.133a5.392 5.392 0 0 1 1.92 2.295c.398.945.585 1.957.555 2.977v.203a6.196 6.196 0 0 1-.547 2.257 5.406 5.406 0 0 1-1.74 2.19m8.962-.014a5.569 5.569 0 0 1-1.732-2.19c-.3-.72-.48-1.485-.54-2.265v-.195A6.51 6.51 0 0 1 11.76 6.4a5.502 5.502 0 0 1 1.83-2.243"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Basketball;
