import React from "react";
import Svg, { Path } from "react-native-svg";

export default function ChattingIconOutline(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      stroke={props.fillColor}
      strokeWidth={1.2}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
      />
    </Svg>
  );
}
