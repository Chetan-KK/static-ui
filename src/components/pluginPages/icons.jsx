import * as React from "react";
const Icon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <mask
        id="b"
        width={20}
        height={20}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="currentColor" d="M0 0h20v20H0V0Z" />
      </mask>
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.552}
        mask="url(#b)"
      >
        <path d="M14.695 9.637 10.2 14.132l2.594 2.593a3.179 3.179 0 0 0 4.495-4.495l-2.594-2.593ZM5.675 9.336l4.495-4.495-2.593-2.594A3.179 3.179 0 1 0 3.08 6.743l2.594 2.593ZM10.992 12.853l-1.626-1.626M13.413 10.431l-1.626-1.626M17.288 16.727l1.037 1.037M3.081 2.248 2.044 1.211M9.508 14.824l5.878-5.879M10.862 4.148l-5.879 5.879" />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Icon;
