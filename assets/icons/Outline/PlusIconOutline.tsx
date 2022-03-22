import React from "react";
import Svg, { Path } from "react-native-svg";

export default function PlusIconOutline(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      stroke={props.fillColor}
      strokeWidth={3}
    >
      <Path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </Svg>
  );
}
