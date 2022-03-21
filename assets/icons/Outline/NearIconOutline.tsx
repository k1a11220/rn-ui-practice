import Svg, { Path } from "react-native-svg";

export default function NearIconOutline(props: any) {
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
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </Svg>
  );
}
