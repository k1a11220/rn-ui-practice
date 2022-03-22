import React from "react";
import Svg, { Path } from "react-native-svg";

export default function MenuIconOutline(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      stroke={props.fillColor}
      strokeWidth={1.6}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </Svg>
  );
}
