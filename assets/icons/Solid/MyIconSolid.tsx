import Svg, { Path } from "react-native-svg";

export default function MyIconSolid(props: any) {
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
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
