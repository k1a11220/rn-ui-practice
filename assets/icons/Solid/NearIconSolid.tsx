import Svg, { Path } from "react-native-svg";

export default function NearIconSolid(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      width={props.size}
      height={props.size}
      fill={props.fillColor}
    >
      <Path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
