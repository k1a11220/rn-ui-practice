import Svg, { Path } from "react-native-svg";

export default function MyIconOutline(props: any) {
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
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </Svg>
  );
}
